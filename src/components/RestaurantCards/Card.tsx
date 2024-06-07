'use client'
import Pill from '@/components/UI/Pill'
import PurchaseButton from '@/components/UI/PurchaseButton'
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
      className={`card restaurant-card`}
      style={{ position: 'relative' }}>
      {restaurant?.image_url && !loading && (
        <div
          className={`restaurant-card-bg ${restaurant.open && 'active'}`}
          style={{
            backgroundImage: `url(${restaurant.image_url.replace(
              /\.png$/,
              '.webp'
            )})`
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
          <div className="flex flex-row justify-between items-end w-full">
            <h3 className={!restaurant.open ? 'text-gray-400' : 'text-black'}>
              {restaurant.name}
            </h3>
            <PurchaseButton
              alt={`Buy food from ${restaurant.name}`}
              disabled={!restaurant.open}>
              &rarr;
            </PurchaseButton>
          </div>
        </div>
      )}
    </div>
  )
}

export default RestaurantCard
