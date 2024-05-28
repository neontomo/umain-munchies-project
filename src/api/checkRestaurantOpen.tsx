export async function checkRestaurantOpen({ id }: { id: string }) {
  try {
    const testData = {
      restaurant_id: id,
      is_open: Math.random() < 0.5
    }

    const response = await fetch(
      `https://work-test-web-2024-eze6j4scpq-lz.a.run.app/api/open/${id}`
    )

    return response.json()
  } catch (error) {
    console.log(`Error fetching restaurants: ${error}`)
    return null
  }
}
