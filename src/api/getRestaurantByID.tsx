export async function getRestaurantByID({ id }: { id: string }) {
  try {
    const response = await fetch(
      `https://work-test-web-2024-eze6j4scpq-lz.a.run.app/api/restaurants/${id}`
    )
    return response.json()
  } catch (error) {
    console.log(`Error fetching restaurants: ${error}`)
    return null
  }
}
