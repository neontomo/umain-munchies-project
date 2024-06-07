import React from 'react'
import Button from 'next/link'

function Pill({
  children,
  rounded,
  alt,
  disabled = false,
  onClick
}: {
  children: React.ReactNode
  rounded?: boolean
  alt?: string
  disabled?: boolean
  onClick?: () => void
}) {
  const roundedStyling = rounded ? 'rounded-2xl' : 'rounded-lg'
  const disabledStyling = disabled ? 'bg-gray-100' : 'bg-white cursor-pointer'

  return (
    <div
      className={`pill ${roundedStyling} ${disabledStyling}`}
      onClick={onClick}
      title={alt}>
      <div>{children}</div>
    </div>
  )
}

export default Pill
