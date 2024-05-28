'use client'
import { memo, useEffect, useState } from 'react'
import Nav from '@/components/Nav'
import SidebarFilters from '@/components/SidebarFilters'
import RestaurantCards from '@/components/RestaurantCards/RestaurantCards'
import FoodCards from '@/components/FoodCards/FoodCards'
import { filter } from '@/types/filters'
import { getAllFilters } from '@/api/getAllFilters'

export default memo(function Home() {
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

  return (
    <main className="min-h-screen w-full mx-auto overflow-x-hidden">
      <Nav />
      <section className="flex flex-col md:flex-row gap-6 md:gap-8 w-full h-full">
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
