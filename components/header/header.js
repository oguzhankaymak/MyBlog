import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex flex-row justify-between items-center site-container py-6">
      <nav className="space-x-4">
        <Link href="/">
          <a>Hakkımda</a>
        </Link>
        <Link href="/activity">
          <a>Etkinlikler</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </nav>
    </header>
  )
}
