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
        className={`border py-1 px-2 text-base ${
          rounded ? 'rounded-2xl' : 'rounded-lg'
        } ${disabled ? 'bg-gray-100' : 'bg-white cursor-pointer'} ${
          select ? 'border-black' : 'border-[#E5E5E5]'
        }`}>
        {children}
      </div>
    </div>
  )
}

export default Pill
