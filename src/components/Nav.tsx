import Image from 'next/image'
import Link from 'next/link'

function Nav() {
  return (
    <nav className="mb-12">
      <Link
        href="/"
        title="Go to Munchies start page">
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
