'use client'
import { useEffect, useState } from 'react'
import Pill from '@/components/UI/Pill'
import Button from '@/components/UI/Button'
import SkeletonLoader from '@/components/UI/SkeletonLoader'
import { Restaurant } from '@/types/restaurants'
import { convertMinutesToRanges } from '@/utils/timeManagement'

function RestaurantCard({
  restaurant,
  loading = false
}: {
  restaurant: Restaurant
  loading?: boolean
}) {
  const deliveryTime = restaurant
    ? convertMinutesToRanges(restaurant.delivery_time_minutes || 0)
    : ''

  return (
    <div
      id={restaurant.id || 'restaurant-card'}
      className={`restaurant-card zoom-on-hover cursor-pointer flex flex-row min-h-[202px] justify-start items-start border border-[#E5E5E5] rounded-xl p-3 bg-opacity-40 bg-white`}
      style={{ position: 'relative' }}>
      {restaurant?.image_url && !loading && (
        <div
          className={`restaurant-card-bg ${
            restaurant.open ? 'opacity-100' : 'opacity-10'
          }`}
          style={{
            backgroundImage: `url(${restaurant.image_url})`
          }}></div>
      )}

      {loading ? (
        <div className="w-full h-full flex flex-col justify-center items-center p-4">
          <SkeletonLoader />
        </div>
      ) : (
        <div className="flex flex-col justify-between h-full w-full">
          <div className="flex flex-row gap-1">
            <Pill rounded>
              <div className="flex flex-row items-center gap-1">
                {restaurant.open ? (
                  <>
                    <span className="w-2 h-2 rounded-full bg-[#00703A]"></span>
                    <span>Open</span>
                  </>
                ) : (
                  <>
                    <span className="w-2 h-2 rounded-full bg-black"></span>
                    <span>Closed</span>
                  </>
                )}
              </div>
            </Pill>
            {restaurant.delivery_time_minutes > 0 && restaurant.open && (
              <Pill
                rounded
                alt={`${restaurant.delivery_time_minutes} min`}>
                {deliveryTime}
              </Pill>
            )}
          </div>

          {!restaurant.open && (
            <div className="flex justify-center">
              <Pill disabled>Opens tomorrow at 12 pm</Pill>
            </div>
          )}
          <div className="flex flex-row justify-between items-center w-full">
            <h3 className={!restaurant.open ? 'text-gray-400' : 'text-black'}>
              {restaurant.name}
            </h3>
            <Button
              alt={`Buy food from ${restaurant.name}`}
              disabled={!restaurant.open}>
              &rarr;
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default RestaurantCard
