'use client'

import RestaurantCard from '@/components/RestaurantCard'
import { memo, useEffect, useState } from 'react'
import { Restaurant } from '@/types/restaurants'
import { getRestaurants } from '@/api/getRestaurants'
import { convertMinutesToRanges } from '@/utils/timeManagement'

const RestaurantCards = memo(function RestaurantCards({
  filterIDs = [],
  deliveryTimes = [],
  priceRangeIDs = []
}: {
  filterIDs?: string[]
  deliveryTimes?: string[]
  priceRangeIDs?: string[]
}) {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRestaurants = async () => {
      const data = await getRestaurants()

      setRestaurants(data?.restaurants || [])
      setLoading(false)
    }

    if (!loading) return
    fetchRestaurants()
  }, [])

  return (
    <section className="content w-full h-full">
      {!loading && restaurants.length === 0 ? (
        <h1>No restaurants found</h1>
      ) : (
        <h1>Restaurant&rsquo;s</h1>
      )}
      <div className="grid grid-cols-3 gap-4 mt-4">
        {restaurants.length === 0 && (
          <>
            {Array(7)
              .fill(null)
              .map((_, index) => (
                <RestaurantCard
                  key={`no-restaurants-${index}`}
                  id={`no-restaurants-${index}`}
                  loading={true}
                />
              ))}
          </>
        )}

        {!loading &&
          restaurants &&
          restaurants
            .filter((restaurant) => {
              const filterActive = filterIDs.length > 0

              return filterActive
                ? filterIDs.includes(restaurant.filter_ids[0])
                : true
            })
            .filter((restaurant) => {
              const deliverTimeFilterActive = deliveryTimes.length > 0

              return deliverTimeFilterActive
                ? deliveryTimes.includes(
                    convertMinutesToRanges(restaurant.delivery_time_minutes)
                  )
                : true
            })
            .filter((restaurant) => {
              const priceRangeFilterActive = priceRangeIDs.length > 0

              return priceRangeFilterActive
                ? priceRangeIDs.includes(restaurant.price_range.range as string)
                : true
            })

            .sort((a, b) => (a.open ? -1 : 1)) // put closed restaurants at the end
            .map((restaurant) => (
              <RestaurantCard
                key={restaurant.id}
                id={restaurant.id}
                name={restaurant.name}
                deliveryTimeMinutes={restaurant.delivery_time_minutes}
                icon={restaurant.image_url}
                priceRange={restaurant.price_range}
                open={restaurant.open}
              />
            ))}
      </div>
    </section>
  )
})

export default RestaurantCards
