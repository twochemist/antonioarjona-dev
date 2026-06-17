const socialLinks = [
  { href: 'https://github.com/twochemist', label: 'GitHub' },
  { href: 'https://twitter.com/chemistdev', label: 'Twitter' },
  {
    href: 'https://www.linkedin.com/in/antonio-manuel-arjona/',
    label: 'LinkedIn',
  },
]

export function Footer() {
  return (
    <footer className="flex flex-col gap-4 border-t border-ink/10 py-8 text-sm font-bold text-ink/70 md:flex-row md:items-center md:justify-between dark:border-white/10 dark:text-white/70">
      <p>Antonio Arjona</p>
      <ul className="flex flex-wrap gap-2">
        {socialLinks.map((link) => (
          <li key={link.href}>
            <a
              className="rounded-full px-3 py-2 transition hover:bg-mist hover:text-clay dark:hover:bg-white/10 dark:hover:text-white"
              href={link.href}
              rel="me noreferrer"
            >
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <a
            className="rounded-full px-3 py-2 transition hover:bg-mist hover:text-clay dark:hover:bg-white/10 dark:hover:text-white"
            href=""
          >
            Contact
          </a>
        </li>
      </ul>
    </footer>
  )
}

