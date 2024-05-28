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
  const roundedStyling = rounded ? 'rounded-2xl' : 'rounded-lg'
  const disabledStyling = disabled ? 'bg-gray-100' : 'bg-white cursor-pointer'
  const selectStyling = select ? 'border-gray-400' : 'border-[#E5E5E5]'

  return (
    <div
      className="flex flex-row items-center"
      onClick={onClick}
      title={alt}>
      <div
        className={`border py-1 px-2 text-base hover:bg-gray-100 transition-all duration-500 ${roundedStyling} ${disabledStyling} ${selectStyling}`}>
        {children}
      </div>
    </div>
  )
}

export default Pill
