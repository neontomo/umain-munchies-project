import SkeletonLoader from '@/components/SkeletonLoader'

function Card({
  title,
  icon,
  select = false,
  loading = false,
  onClick
}: {
  title?: string
  icon?: string
  select?: boolean
  loading?: boolean
  onClick?: () => void
}) {
  return (
    <div
      style={{ position: 'relative' }}
      onClick={onClick}
      className={`food-card cursor-pointer flex flex-row justify-between border rounded-xl p-4 bg-white min-h-[80px] min-w-[160px] hover:bg-gray-100 transition-all duration-300 ${
        select ? 'border-gray-400' : 'border-[#E5E5E5]'
      }`}>
      {icon && !loading && (
        <div
          className={`food-card-bg`}
          style={{
            backgroundImage: `url(${icon})`
          }}></div>
      )}

      {loading ? (
        <div className="w-full h-full flex flex-col justify-center items-center">
          <SkeletonLoader />
        </div>
      ) : (
        <h4 className="food-card-title">{title}</h4>
      )}
    </div>
  )
}

export default Card
