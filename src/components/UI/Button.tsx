function Button({
  children,
  disabled = false,
  onClick,
  alt
}: {
  children?: React.ReactNode
  disabled?: boolean
  onClick?: () => void
  alt?: string
}) {
  return (
    <button
      title={alt || 'button'}
      className={`rounded-full bg-[#00703A] text-white min-h-8 min-w-8 hover:bg-[#3fa476] transition-all duration-300 ease-in-out
      ${disabled ? 'opacity-30' : 'opacity-100 cursor-pointer'}`}
      onClick={onClick}
      disabled={disabled}>
      {children}
    </button>
  )
}

export default Button
