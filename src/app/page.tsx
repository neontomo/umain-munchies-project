import { getAllFilters } from '@/api/getAllFilters'
import Home from '@/components/Home'

export default async function Index() {
  const filtersAvailable = await getAllFilters()

  return <Home filtersAvailable={filtersAvailable.filters} />
}
