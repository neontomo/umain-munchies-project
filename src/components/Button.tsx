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
      className={`rounded-full bg-[#00703A] text-white min-h-8 min-w-8 ${
        disabled ? 'opacity-30' : 'opacity-100 cursor-pointer'
      }`}
      onClick={onClick}
      disabled={disabled}>
      {children}
    </button>
  )
}

export default Button
