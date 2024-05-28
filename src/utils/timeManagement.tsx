export const deliveryTimesAvailable = [
  '0-5 min',
  '5-10 min',
  '10-20 min',
  '20-25 min',
  '25-40 min',
  '40-50 min',
  '1 hour'
]

export const convertToHours = (minutes: number) => {
  const hours = Math.floor(minutes / 60)
  return hours > 1 ? `${hours} hours` : `${hours} hour`
}

export const convertMinutesToRanges = (minutes: number) => {
  if (minutes <= 5) return '0-5 min'
  if (minutes <= 10) return '5-10 min'
  if (minutes <= 20) return '10-20 min'
  if (minutes <= 25) return '20-25 min'
  if (minutes <= 40) return '25-40 min'
  if (minutes <= 50) return '40-50 min'
  if (minutes > 50) return convertToHours(minutes)
  return `${minutes} min`
}

export const convertRangesToMinutes = (range: string) => {
  switch (range) {
    case '0-5 min':
      return 5
    case '5-10 min':
      return 10
    case '10-20 min':
      return 20
    case '20-25 min':
      return 25
    case '25-40 min':
      return 40
    case '40-50 min':
      return 50
    case '1 hour':
      return 60
    default:
      return 0
  }
}
