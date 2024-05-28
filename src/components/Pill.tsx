function Pill({
  children,
  rounded,
  alt,
  disabled = false,
  select = false,
  onClick
}: {
  children: React.ReactNode
  rounded?: boolean
  alt?: string
  disabled?: boolean
  select?: boolean
  onClick?: () => void
}) {
  return (
    <div
      className="flex flex-row items-center"
      title={alt}
      onClick={onClick}>
      <div
        className={`border py-1 px-2 text-base hover:bg-gray-100 transition-all duration-500 ${
          rounded ? 'rounded-2xl' : 'rounded-lg'
        } ${disabled ? 'bg-gray-100' : 'bg-white cursor-pointer'} ${
          select ? 'border-gray-400' : 'border-[#E5E5E5]'
        }`}>
        {children}
      </div>
    </div>
  )
}

export default Pill
