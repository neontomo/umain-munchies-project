export async function getAllFilters() {
  try {
    const testData = {
      filters: [
        {
          id: '0745fd7c-68d9-4a16-b4e1-13b7d834dcaf',
          name: 'Hamburger',
          image_url: '/images/hamburger.png'
        },
        {
          id: 'ee7ad581-d6a1-487b-8d1e-17a54813c60b',
          name: 'Pizza',
          image_url: '/images/pizza.png'
        },
        {
          id: 'eb785003-4a1d-42d1-9b93-127d54d065bd',
          name: 'Taco´s',
          image_url: '/images/taco.png'
        },
        {
          id: '528705d1-ae49-4035-b68b-698be09c429b',
          name: 'Coffee',
          image_url: '/images/coffee.png'
        },
        {
          id: '1b165c5b-897c-4451-af0d-189579731a7b',
          name: 'Burrito',
          image_url: '/images/burrito.png'
        },
        {
          id: '75c3c769-85ff-49f1-b5c3-0bc46c2c61f0',
          name: 'Fries',
          image_url: '/images/fries.png'
        },
        {
          id: '5c16b293-d606-44a3-842a-c2ffda8e1ce3',
          name: 'Breakfast',
          image_url: '/images/breakfast.png'
        }
      ]
    }

    const response = await fetch(
      'https://work-test-web-2024-eze6j4scpq-lz.a.run.app/api/filter'
    )

    return response.json()
  } catch (error) {
    console.log(`Error fetching filters: ${error}`)
    return null
  }
}
