import SkeletonLoader from '@/components/UI/SkeletonLoader'

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
      className={`card food-card ${select && 'active'}`}>
      {icon && !loading && (
        <div
          className={`food-card-bg`}
          style={{
            backgroundImage: `url(${icon.replace(/\.png$/, '.webp')})`
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
