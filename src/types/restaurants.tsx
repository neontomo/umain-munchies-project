export type Restaurant = {
  id: string
  name: string
  rating: number
  filter_ids: string[]
  image_url: string
  delivery_time_minutes: number
  price_range: PriceRange
  price_range_id: string
  open: boolean
}

export type openStatus = {
  restaurant_id: string
  is_currently_open: boolean
}

export type PriceRange = {
  range?: string
  id?: string
}
