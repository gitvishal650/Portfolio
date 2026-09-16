import { navLinks } from '../data/content'

export default function Header() {
  return (
    <header className="site">
      <div className="wrap nav-row">
        <div className="nav-mark">vishal<span>.</span>panchal</div>
        <nav className="links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </nav>
        <div className="nav-status"><span className="dot"></span> Open to internships</div>
      </div>
    </header>
  )
}
