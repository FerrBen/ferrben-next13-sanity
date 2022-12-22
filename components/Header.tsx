import Link from 'next/link'
import Image from 'next/image'

function Header() {
  return (
    <header className="space-between flex items-center justify-between space-x-2 px-10 py-5 font-bold">
      <div className="flex items-center space-x-4">
        <Link href="/" className="flex items-center space-x-4">
          <Image
            className="rounded-full"
            src="https://pbs.twimg.com/profile_images/1336890675321823232/wxRiMYXp_400x400.jpg"
            alt="logo"
            width={50}
            height={50}
          />
          <h1>Ferruccio Benito</h1>
        </Link>
      </div>
      <div className="space-x-4">
        <Link href="/about" className="btn-secondary">
          About
        </Link>
        <Link href="/blog" className="btn-secondary">
          Blog
        </Link>
        <Link href="/projects" className="btn-secondary">
          Projects
        </Link>
        <Link href="/contact" className="btn-primary">
          Get In Touch
        </Link>
      </div>
    </header>
  )
}

export default Header
