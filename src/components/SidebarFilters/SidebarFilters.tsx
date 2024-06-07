'use client'
import { useContext } from 'react'
import { addOrRemoveDeliveryTimeFilter } from '@/utils/addOrRemoveDeliveryTimeFilter'
import { addOrRemoveFilter } from '@/utils/addOrRemoveFilter'
import { addOrRemovePriceRangeFilter } from '@/utils/addOrRemovePriceRangeFilter'
import { deliveryTimesAvailable } from '@/utils/timeManagement'
import { priceRangesAvailable } from '@/utils/priceRangesAvailable'
import { SidebarFiltersContext } from '@/components/SidebarFilters/SidebarFiltersContext'
import SidebarFilter from '@/components/SidebarFilters/SidebarFilter'
import FilterButton from '@/components/UI/FilterButton'

function SidebarFilters() {
  const {
    filtersAvailable = [],
    filterIDs = [],
    priceRangeIDs = [],
    deliveryTimes = [],
    setFilterIDs = () => {},
    setPriceRangeIDs = () => {},
    setDeliveryTimes = () => {}
  } = useContext(SidebarFiltersContext)

  return (
    <>
      <aside className="sidebar flex flex-col w-full md:min-w-[239px] md:max-w-[239px] md:border md:border-[#E5E5E5] rounded-xl md:p-[24px] md:bg-white">
        <h2 className="hidden md:block title mb-6">Filter</h2>

        <SidebarFilter
          id="food-category"
          title="Food Category"
          hiddenOnMobile>
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
                <FilterButton
                  select={
                    filterIDs.length > 0 && filterIDs.includes(filter.id)
                  }>
                  {filter?.name}
                </FilterButton>
              </div>
            ))}
          </div>
        </SidebarFilter>

        <SidebarFilter
          id="delivery-time"
          title="Delivery Time">
          <div className="flex flex-row gap-2 flex-wrap">
            {deliveryTimesAvailable.map((time, index) => (
              <FilterButton
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
              </FilterButton>
            ))}
          </div>
        </SidebarFilter>

        <SidebarFilter
          id="price-range"
          title="Price Range"
          hiddenOnMobile>
          <div className="flex flex-row gap-2 flex-wrap">
            {priceRangesAvailable.map((price, index) => (
              <FilterButton
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
              </FilterButton>
            ))}
          </div>
        </SidebarFilter>
      </aside>
    </>
  )
}

export default SidebarFilters
