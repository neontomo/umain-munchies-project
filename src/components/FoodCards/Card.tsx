import Image from 'next/image'
import SkeletonLoader from '@/components/SkeletonLoader'

function Card({
  title,
  icon,
  onClick,
  select = false,
  loading = false
}: {
  title?: string
  icon?: string
  onClick?: () => void
  select?: boolean
  loading?: boolean
}) {
  return (
    <div
      style={{ position: 'relative' }}
      className={`food-card cursor-pointer flex flex-row justify-between border rounded-xl p-4 bg-white min-h-[80px] min-w-[160px] hover:bg-gray-100 transition-all duration-300 ${
        select ? 'border-gray-400' : 'border-[#E5E5E5]'
      }`}
      onClick={onClick}>
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
