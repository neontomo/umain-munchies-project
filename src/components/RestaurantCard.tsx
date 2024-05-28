'use client'
import { useEffect, useState } from 'react'
import Pill from '@/components/Pill'
import Button from '@/components/Button'
import SkeletonLoader from '@/components/SkeletonLoader'
import { PriceRange } from '@/types/restaurants'
import { convertMinutesToRanges } from '@/utils/timeManagement'

function RestaurantCard({
  id,
  name,
  deliveryTimeMinutes = 0,
  icon,
  loading = false,
  priceRange,
  open = false
}: {
  id: string
  name?: string
  deliveryTimeMinutes?: number
  icon?: string
  loading?: boolean
  priceRange?: PriceRange
  open?: boolean
}) {
  const deliveryTime = convertMinutesToRanges(deliveryTimeMinutes)

  return (
    <div
      className={`restaurant-card flex flex-row min-h-[202px] justify-start items-start border border-[#E5E5E5] rounded-xl p-3 bg-opacity-40 bg-white`}
      style={{ position: 'relative' }}>
      {icon && !loading && (
        <div
          className={`restaurant-card-bg ${
            open ? 'opacity-100' : 'opacity-10'
          }`}
          style={{
            backgroundImage: `url(${icon})`
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
                {open ? (
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
            {deliveryTimeMinutes > 0 && open && (
              <Pill
                rounded
                alt={`${deliveryTimeMinutes} min`}>
                {deliveryTime}
              </Pill>
            )}
          </div>

          {!open && (
            <div className="flex justify-center">
              <Pill disabled>Opens tomorrow at 12 pm</Pill>
            </div>
          )}
          <div className="flex flex-row justify-between items-center w-full">
            <h3>{name}</h3>
            <Button
              alt={`Buy food from ${name}`}
              disabled={!open}>
              &rarr;
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default RestaurantCard
