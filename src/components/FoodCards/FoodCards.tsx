import Card from '@/components/FoodCards/Card'
import { filter } from '@/types/filters'
import { addOrRemoveFilter } from '@/utils/addOrRemoveFilter'

function FoodCards({
  filtersAvailable,
  filterIDs,
  setFilterIDs
}: {
  filtersAvailable: filter[]
  filterIDs: string[]
  setFilterIDs: (filterIDs: string[]) => void
}) {
  if (!filtersAvailable) return null

  return (
    <div className="w-full flex flex-col gap-2">
      <section className="content w-full h-full overflow-x-scroll scrollbar-hide">
        <div className="w-full">
          <div className="flex gap-3">
            {filtersAvailable.length === 0 ? (
              <>
                {Array(7)
                  .fill(null)
                  .map((_, index) => (
                    <div
                      className="opacity-70"
                      key={`no-filters-${index}`}>
                      <Card loading />
                    </div>
                  ))}
              </>
            ) : (
              <>
                {Object.values(filtersAvailable).map((filter) => (
                  <Card
                    key={filter.id}
                    title={filter.name}
                    icon={filter.image_url}
                    onClick={() => {
                      addOrRemoveFilter({
                        filterIDs,
                        filterID: filter.id,
                        setFilterIDs
                      })
                    }}
                    select={
                      filterIDs.length > 0 && filterIDs.includes(filter.id)
                    }
                  />
                ))}
              </>
            )}
          </div>
        </div>
      </section>
      <div className="flex justify-end items-center text-xs text-gray-400">
        Scroll &rarr;
      </div>
    </div>
  )
}

export default FoodCards
