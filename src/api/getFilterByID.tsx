export async function getFilterByID({ id }: { id: string }) {
  try {
    const testData = {
      id: '528705d1-ae49-4035-b68b-698be09c429b',
      name: 'Coffee',
      image_url: '/images/coffee.png'
    }

    const response = await fetch(
      `https://work-test-web-2024-eze6j4scpq-lz.a.run.app/api/filter/${id}`
    )

    return response.json()
  } catch (error) {
    console.log(`Error fetching filters: ${error}`)
    return null
  }
}
