'use client'
import { memo, useEffect, useState } from 'react'
import Nav from '@/components/Nav/Nav'
import SidebarFilters from '@/components/SidebarFilters/SidebarFilters'
import RestaurantCards from '@/components/RestaurantCards/RestaurantCards'
import FoodCards from '@/components/FoodCards/FoodCards'
import { filter } from '@/types/filters'
import { getAllFilters } from '@/api/getAllFilters'
import Overlay from '@/components/Mobile/Overlay'

export default memo(function Home() {
  const [overlayOpen, setOverlayOpen] = useState(false)
  const [filtersAvailable, setFiltersAvailable] = useState<filter[]>([])
  const [filterIDs, setFilterIDs] = useState<string[]>([])
  const [priceRangeIDs, setPriceRangeIDs] = useState<string[]>([])
  const [deliveryTimes, setDeliveryTimes] = useState<string[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchFiltersAvailable = async () => {
      if (!loading) return
      const data = await getAllFilters()
      setFiltersAvailable(data?.filters || [])
      setLoading(false)
    }

    fetchFiltersAvailable()
  }, [])

  useEffect(() => {
    if (!window) return
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

      <section className="flex flex-col md:flex-row gap-6 md:gap-8 w-full h-full z-0">
        <SidebarFilters
          filtersAvailable={filtersAvailable}
          filterIDs={filterIDs}
          setFilterIDs={setFilterIDs}
          priceRangeIDs={priceRangeIDs}
          setPriceRangeIDs={setPriceRangeIDs}
          deliveryTimes={deliveryTimes}
          setDeliveryTimes={setDeliveryTimes}
        />
        <section className="content w-full h-full overflow-x-auto flex flex-col gap-8">
          <FoodCards
            filtersAvailable={filtersAvailable}
            filterIDs={filterIDs}
            setFilterIDs={setFilterIDs}
          />
          <RestaurantCards
            filterIDs={filterIDs}
            priceRangeIDs={priceRangeIDs}
            deliveryTimes={deliveryTimes}
          />
        </section>
      </section>

      <footer className="mt-32 flex flex-row justify-center w-full overflow-hidden text-xs">
        made by Tomo with ❤️
      </footer>
    </main>
  )
})
