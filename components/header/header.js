import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex justify-center md:justify-start items-center site-container py-6">
      <nav className="space-x-4">
        <Link href="/">
          <a className="hover:text-secondary text-xl font-serif font-medium">
            Hakkımda
          </a>
        </Link>
        <Link href="/activity">
          <a className="hover:text-secondary text-xl font-serif font-medium">
            Etkinlikler
          </a>
        </Link>
        <Link href="/blog">
          <a className="hover:text-secondary text-xl font-serif font-medium">
            Blog
          </a>
        </Link>
      </nav>
    </header>
  )
}
