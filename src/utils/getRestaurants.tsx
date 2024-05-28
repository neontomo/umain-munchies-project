import { getPriceRangeByID } from './getPriceRangeByID'
import { Restaurant } from '@/types/restaurants'

export async function getRestaurants() {
  try {
    const data = {
      restaurants: [
        {
          id: '2910e521-748c-4462-9d12-b005196c8cfe',
          name: 'Waynes Coffee',
          rating: 4.5,
          filter_ids: ['528705d1-ae49-4035-b68b-698be09c429b'],
          image_url: '/images/coffee.png',
          delivery_time_minutes: 30,
          price_range_id: '38b8f3be-d378-49a7-b024-3a9ab1bfd860'
        },
        {
          id: '23dadbdb-3a19-4e5d-b961-93feac741180',
          name: 'Oskars Tacos',
          rating: 3.8,
          filter_ids: ['eb785003-4a1d-42d1-9b93-127d54d065bd'],
          image_url: '/images/taco.png',
          delivery_time_minutes: 45,
          price_range_id: 'bd332b79-fc70-42e0-ba42-6489c04ece43'
        },
        {
          id: 'e80a7d55-695e-43d8-960c-698a491bd34c',
          name: 'Dawids Deli',
          rating: 4.9,
          filter_ids: [
            '75c3c769-85ff-49f1-b5c3-0bc46c2c61f0',
            '1b165c5b-897c-4451-af0d-189579731a7b'
          ],
          image_url: '/images/fries.png',
          delivery_time_minutes: 60,
          price_range_id: '19225fdc-dcbe-4c90-8e86-150f73736a29'
        },
        {
          id: '398bbd26-5fb4-4de4-9c26-d100b51c7867',
          name: 'Viktors Valmofrön & Potatis',
          rating: 4.2,
          filter_ids: [
            'ee7ad581-d6a1-487b-8d1e-17a54813c60b',
            '75c3c769-85ff-49f1-b5c3-0bc46c2c61f0'
          ],
          image_url: '/images/pizza.png',
          delivery_time_minutes: 30,
          price_range_id: 'bd332b79-fc70-42e0-ba42-6489c04ece43'
        },
        {
          id: 'edd37fd3-ca8a-4765-98f6-97e557062b07',
          name: 'Sebbes Slizes',
          rating: 4.3,
          filter_ids: ['ee7ad581-d6a1-487b-8d1e-17a54813c60b'],
          image_url: '/images/pizza.png',
          delivery_time_minutes: 45,
          price_range_id: '38b8f3be-d378-49a7-b024-3a9ab1bfd860'
        },
        {
          id: '00118065-8b00-46f0-a60d-cdeed21572c9',
          name: 'Karls Korv (vegan)',
          rating: 4.4,
          filter_ids: ['5c16b293-d606-44a3-842a-c2ffda8e1ce3'],
          image_url: '/images/breakfast.png',
          delivery_time_minutes: 10,
          price_range_id: 'da7a5763-7cb9-47a6-9d1d-436fd0f2036b'
        },
        {
          id: 'bf911304-149a-4965-b6af-afcb3a34e660',
          name: 'Emils Elit-biffar',
          rating: 4.5,
          filter_ids: ['0745fd7c-68d9-4a16-b4e1-13b7d834dcaf'],
          image_url: '/images/hamburger.png',
          delivery_time_minutes: 60,
          price_range_id: '19225fdc-dcbe-4c90-8e86-150f73736a29'
        }
      ]
    }

    const priceRangeFetcher = async (restaurant: Restaurant) => {
      return getPriceRangeByID({
        id: restaurant.price_range_id
      }).then((data) => data)
    }

    const newData = await Promise.all(
      (data.restaurants as Restaurant[]).map(async (restaurant) => {
        const priceRange = await priceRangeFetcher(restaurant)
        return { ...restaurant, price_range: priceRange }
      })
    )

    return { ...data, restaurants: newData }

    const response = await fetch(
      'https://work-test-web-2024-eze6j4scpq-lz.a.run.app/api/restaurants'
    )
    return response.json()
  } catch (error) {
    console.log(`Error fetching restaurants: ${error}`)
    return null
  }
}
