function SidebarFilter({
  id,
  title,
  children,
  hiddenOnMobile = false
}: {
  id: string
  title: string
  children: React.ReactNode
  hiddenOnMobile?: boolean
}) {
  return (
    <article
      id={id}
      className={`${
        hiddenOnMobile ? 'hidden md:block' : 'block'
      } filter-sub-category mb-4`}>
      <h4 className="text-[#999999] uppercase mb-2">{title}</h4>
      {children}
    </article>
  )
}

export default SidebarFilter
