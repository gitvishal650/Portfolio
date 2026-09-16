import { contactLinks } from '../data/content'

export default function Contact() {
  return (
    <section id="contact">
      <div className="wrap contact-inner">
        <h2>Looking for a web developer intern? Let's talk.</h2>
        <div className="contact-links">
          {contactLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
