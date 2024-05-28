'use client'
import Pill from '@/components/Pill'
import { filter } from '@/types/filters'
import { addOrRemoveDeliveryTimeFilter } from '@/utils/addOrRemoveDeliveryTimeFilter'
import { addOrRemoveFilter } from '@/utils/addOrRemoveFilter'
import { addOrRemovePriceRangeFilter } from '@/utils/addOrRemovePriceRangeFilter'
import {
  convertRangesToMinutes,
  deliveryTimesAvailable
} from '@/utils/timeManagement'

function SidebarFilters({
  filtersAvailable,
  filterIDs,
  priceRangeIDs,
  setFilterIDs,
  setPriceRangeIDs,
  deliveryTimes,
  setDeliveryTimes
}: {
  filtersAvailable: filter[]
  filterIDs: string[]
  priceRangeIDs: string[]
  setFilterIDs: (filterIDs: string[]) => void
  setPriceRangeIDs: (filterIDs: string[]) => void
  deliveryTimes: string[]
  setDeliveryTimes: (filterIDs: string[]) => void
}) {
  const priceRangesAvailable = ['$', '$$', '$$$', '$$$$']
  return (
    <>
      <aside className="sidebar flex flex-col w-full md:min-w-[239px] md:max-w-[239px] md:border md:border-[#E5E5E5] rounded-xl md:p-[24px] md:bg-white">
        <h2 className="hidden md:block title mb-6">Filter</h2>
        <article
          id="food-category"
          className="hidden md:block filter-sub-category mb-4">
          <h4 className="text-[#999999] uppercase mb-2">Food Category</h4>
          <div className="flex flex-col gap-2 flex-wrap">
            {Object.values(filtersAvailable).map((filter, index) => (
              <div
                key={`filter-${index}`}
                className="flex flex-row gap-2"
                onClick={() => {
                  addOrRemoveFilter({
                    filterIDs,
                    filterID: filter.id,
                    setFilterIDs
                  })
                }}>
                <Pill
                  select={
                    filterIDs.length > 0 && filterIDs.includes(filter.id)
                  }>
                  {filter?.name}
                </Pill>
              </div>
            ))}
          </div>
        </article>
        <article
          id="delivery-time"
          className="filter-sub-category md:mb-4">
          <h4 className="text-[#999999] uppercase mb-2">Delivery Time</h4>
          <div className="flex flex-row gap-2 flex-wrap">
            {deliveryTimesAvailable.map((time, index) => (
              <Pill
                select={
                  deliveryTimes.length > 0 && deliveryTimes.includes(time)
                }
                onClick={() => {
                  addOrRemoveDeliveryTimeFilter({
                    deliveryTimes,
                    filterID: time,
                    setDeliveryTimes
                  })
                }}
                key={index}>
                {time}
              </Pill>
            ))}
          </div>
        </article>
        <article
          id="price-range"
          className="hidden md:block filter-sub-category mb-4">
          <h4 className="text-[#999999] uppercase mb-2">Price Range</h4>
          <div className="flex flex-row gap-2 flex-wrap">
            {priceRangesAvailable.map((price, index) => (
              <Pill
                key={index}
                select={
                  priceRangeIDs.length > 0 && priceRangeIDs.includes(price)
                }
                onClick={() => {
                  addOrRemovePriceRangeFilter({
                    priceRangeIDs,
                    filterID: price,
                    setPriceRangeIDs
                  })
                }}>
                {price}
              </Pill>
            ))}
          </div>
        </article>
      </aside>
    </>
  )
}

export default SidebarFilters
