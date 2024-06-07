import React from 'react'

function FilterButton({
  children,
  alt,
  select = false,
  onClick
}: {
  children: React.ReactNode
  alt?: string
  select?: boolean
  onClick?: () => void
}) {
  return (
    <button
      className={`filter-button ${select && 'active'}`}
      onClick={onClick}
      title={alt}>
      {children}
    </button>
  )
}

export default FilterButton
