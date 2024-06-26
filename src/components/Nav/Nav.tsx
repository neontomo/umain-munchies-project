import Image from 'next/image'
import Link from 'next/link'

function Nav({ inverted = false }: { inverted?: boolean }) {
  return (
    <nav className="mb-12 hover:opacity-70 transition-opacity duration-500">
      <Link
        href="/"
        title="Go to Munchies start page"
        className={inverted ? 'invert' : 'invert-0'}>
        <Image
          src="/logo.svg"
          alt="Munchies"
          width={273}
          height={40}
          priority={true}
        />
      </Link>
    </nav>
  )
}

export default Nav
