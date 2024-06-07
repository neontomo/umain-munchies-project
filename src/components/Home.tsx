'use client'
import { memo, useEffect, useState } from 'react'
import Nav from '@/components/Nav/Nav'
import SidebarFilters from '@/components/SidebarFilters/SidebarFilters'
import RestaurantCards from '@/components/RestaurantCards/RestaurantCards'
import FoodCards from '@/components/FoodCards/FoodCards'
import { filter } from '@/types/filters'
import { Restaurant } from '@/types/restaurants'
import Overlay from '@/components/Mobile/Overlay'
import { SidebarFiltersContext } from '@/components/SidebarFilters/SidebarFiltersContext'

export default memo(function Home({
  filtersAvailable,
  restaurants
}: {
  filtersAvailable?: filter[]
  restaurants?: Restaurant[]
}) {
  const [overlayOpen, setOverlayOpen] = useState(false)
  const [filterIDs, setFilterIDs] = useState<string[]>([])
  const [priceRangeIDs, setPriceRangeIDs] = useState<string[]>([])
  const [deliveryTimes, setDeliveryTimes] = useState<string[]>([])

  useEffect(() => {
    if (window.innerWidth < 768) {
      setOverlayOpen(true)
    } else {
      setOverlayOpen(false)
    }
  }, [])

  return (
    <main className="min-h-screen w-full mx-auto overflow-x-hidden">
      <Overlay
        overlayOpen={overlayOpen}
        setOverlayOpen={setOverlayOpen}
      />

      <Nav />

      <SidebarFiltersContext.Provider
        value={{
          restaurants,
          filtersAvailable,
          filterIDs,
          priceRangeIDs,
          deliveryTimes,
          setFilterIDs,
          setPriceRangeIDs,
          setDeliveryTimes
        }}>
        <section className="flex flex-col md:flex-row gap-6 md:gap-8 w-full h-full z-0">
          <SidebarFilters />

          <section className="content w-full h-full overflow-x-auto flex flex-col gap-8">
            <FoodCards />
            <RestaurantCards />
          </section>
        </section>
      </SidebarFiltersContext.Provider>

      <footer className="mt-32 flex flex-row justify-center w-full overflow-hidden text-xs">
        made by Tomo with ❤️
      </footer>
    </main>
  )
})
