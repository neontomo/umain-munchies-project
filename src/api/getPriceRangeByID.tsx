export async function getPriceRangeByID({ id }: { id: string }) {
  try {
    const testData = {
      id: '38b8f3be-d378-49a7-b024-3a9ab1bfd860',
      range: '$$'
    }

    const response = await fetch(
      `https://work-test-web-2024-eze6j4scpq-lz.a.run.app/api/price-range/${id}`
    )
    return response.json()
  } catch (error) {
    console.log(`Error fetching filters: ${error}`)
    return null
  }
}
