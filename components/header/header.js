import Link from 'next/link'

export default function Header() {
  const changeTheme = () => {
    let htmlClasses = document.querySelector('html').classList
    if (localStorage.theme === 'dark') {
      htmlClasses.remove('dark')
      localStorage.removeItem('theme')
    } else {
      htmlClasses.add('dark')
      localStorage.theme = 'dark'
    }
  }

  return (
    <header className="flex flex-row justify-between items-center site-container py-6">
      <nav className="space-x-4">
        <Link href="/">
          <a>Hakkımda</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </nav>
      <button className="focus:outline-none" onClick={changeTheme}>
        <img src="/light.svg" height={28} width={28} alt="change theme" />
      </button>
    </header>
  )
}
