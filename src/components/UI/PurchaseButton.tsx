function PurchaseButton({
  children,
  disabled = false,
  alt,
  onClick
}: {
  children?: React.ReactNode
  disabled?: boolean
  alt?: string
  onClick?: () => void
}) {
  return (
    <button
      title={alt || 'button'}
      className="purchase-button"
      onClick={onClick}
      disabled={disabled}>
      {children}
    </button>
  )
}

export default PurchaseButton
