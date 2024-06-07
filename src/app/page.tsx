import { getAllFilters } from '@/api/getAllFilters'
import { getRestaurants } from '@/api/getRestaurants'
import Home from '@/components/Home'

export default async function Index() {
  const filtersAvailable = await getAllFilters()
  const restaurants = await getRestaurants()

  return (
    <Home
      filtersAvailable={filtersAvailable?.filters}
      restaurants={restaurants?.restaurants}
    />
  )
}
