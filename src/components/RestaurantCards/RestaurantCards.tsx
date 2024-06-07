'use client'

import Card from '@/components/RestaurantCards/Card'
import { memo, useEffect, useState, useContext } from 'react'
import { Restaurant } from '@/types/restaurants'
import { convertMinutesToRanges } from '@/utils/timeManagement'
import { SidebarFiltersContext } from '@/components/SidebarFilters/SidebarFiltersContext'

const RestaurantCards = memo(function RestaurantCards() {
  const {
    restaurants = [],
    filterIDs = [],
    priceRangeIDs = [],
    deliveryTimes = []
  } = useContext(SidebarFiltersContext)

  const [sortedRestaurants, setSortedRestaurants] = useState<Restaurant[]>([])

  useEffect(() => {
    setSortedRestaurants(
      restaurants
        .filter((restaurant) => {
          // food filter
          const filterActive = filterIDs.length > 0

          return filterActive
            ? filterIDs.includes(restaurant.filter_ids[0])
            : true
        })
        .filter((restaurant) => {
          // delivery time filter
          const deliverTimeFilterActive = deliveryTimes.length > 0

          return deliverTimeFilterActive
            ? deliveryTimes.includes(
                convertMinutesToRanges(restaurant.delivery_time_minutes)
              )
            : true
        })
        .filter((restaurant) => {
          // price range filter
          const priceRangeFilterActive = priceRangeIDs.length > 0

          return priceRangeFilterActive
            ? priceRangeIDs.includes(restaurant.price_range.range as string)
            : true
        })
        .sort((a, b) => (a.open ? -1 : 1)) // put closed restaurants at the end
    )
  }, [restaurants, filterIDs, deliveryTimes, priceRangeIDs])

  return (
    <section className="content w-full h-full overflow-x-hidden">
      <h1>
        {sortedRestaurants.length === 0 ? (
          'No restaurants found'
        ) : (
          <>Restaurant&rsquo;s</>
        )}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 overflow-hidden">
        {restaurants.length === 0 && (
          <>
            {Array(7)
              .fill(null)
              .map((_, index) => (
                <Card
                  key={`no-restaurants-${index}`}
                  loading={true}
                  restaurant={
                    {
                      id: `no-restaurants-${index}`,
                      name: `no-restaurants-${index}`
                    } as Restaurant
                  }
                />
              ))}
          </>
        )}

        {sortedRestaurants &&
          sortedRestaurants.length > 0 &&
          sortedRestaurants.map((restaurant) => (
            <Card
              key={restaurant.id}
              restaurant={restaurant}
            />
          ))}
      </div>
    </section>
  )
})

export default RestaurantCards
