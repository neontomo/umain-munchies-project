export const addOrRemoveDeliveryTimeFilter = ({
  deliveryTimes,
  filterID,
  setDeliveryTimes
}: {
  deliveryTimes: string[]
  filterID: string | number
  setDeliveryTimes: (filterIDs: string[]) => void
}) => {
  if (deliveryTimes.includes(filterID as string)) {
    setDeliveryTimes(deliveryTimes.filter((id) => id !== filterID))
    return
  }
  setDeliveryTimes([...deliveryTimes, filterID as string])
}
