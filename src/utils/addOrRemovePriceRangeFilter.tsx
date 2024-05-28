export const addOrRemovePriceRangeFilter = ({
  priceRangeIDs,
  filterID,
  setPriceRangeIDs
}: {
  priceRangeIDs: string[]
  filterID: string | number
  setPriceRangeIDs: (filterIDs: string[]) => void
}) => {
  if (priceRangeIDs.includes(filterID as string)) {
    setPriceRangeIDs(priceRangeIDs.filter((id) => id !== filterID))
    return
  }
  setPriceRangeIDs([...priceRangeIDs, filterID as string])
}
