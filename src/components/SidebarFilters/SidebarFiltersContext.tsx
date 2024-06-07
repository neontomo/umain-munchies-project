import { createContext } from 'react'
import { filter } from '@/types/filters'

interface ContextProps {
  filtersAvailable: filter[]
  filterIDs: string[]
  priceRangeIDs: string[]
  deliveryTimes: string[]
  setFilterIDs: (filterIDs: string[]) => void
  setPriceRangeIDs: (filterIDs: string[]) => void
  setDeliveryTimes: (filterIDs: string[]) => void
}

export const SidebarFiltersContext = createContext<Partial<ContextProps>>({})
