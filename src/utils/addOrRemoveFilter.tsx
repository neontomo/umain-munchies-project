export const addOrRemoveFilter = ({
  filterIDs,
  filterID,
  setFilterIDs
}: {
  filterIDs: string[]
  filterID: string | number
  setFilterIDs: (filterIDs: string[]) => void
}) => {
  if (filterIDs.includes(filterID as string)) {
    setFilterIDs(filterIDs.filter((id) => id !== filterID))
    return
  }
  setFilterIDs([...filterIDs, filterID as string])
}
