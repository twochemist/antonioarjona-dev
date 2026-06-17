'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/lists', label: 'Uses' },
  { href: '/posts', label: 'Blog' },
  { href: '/cv', label: 'CV' },
]

export function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') setIsOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  return (
    <header className="sticky top-4 z-30 flex items-center justify-center rounded-full border border-ink/10 bg-paper/85 px-4 py-3 shadow-soft backdrop-blur dark:border-white/10 dark:bg-ink/85">
      <button
        aria-controls="primary-menu"
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        className="absolute right-3 inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 bg-white/70 text-ink transition hover:border-clay/40 hover:bg-mist focus:outline-none focus:ring-2 focus:ring-clay/50 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
        type="button"
        onClick={() => setIsOpen((current) => !current)}
      >
        <span className="relative h-4 w-5" aria-hidden="true">
          <span
            className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition ${
              isOpen ? 'translate-y-[7px] rotate-45' : ''
            }`}
          />
          <span
            className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition ${
              isOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`absolute bottom-0 left-0 h-0.5 w-5 rounded-full bg-current transition ${
              isOpen ? '-translate-y-[7px] -rotate-45' : ''
            }`}
          />
        </span>
      </button>

      <Link
        className="px-12 text-center text-base font-black tracking-tight"
        href="/"
        onClick={() => setIsOpen(false)}
      >
        Antonio Arjona
      </Link>

      <nav
        aria-label="Primary navigation"
        className={`absolute right-0 top-[calc(100%+0.75rem)] w-64 origin-top-right rounded-2xl border border-ink/10 bg-paper/95 p-2 shadow-soft backdrop-blur transition dark:border-white/10 dark:bg-ink/95 ${
          isOpen
            ? 'scale-100 opacity-100'
            : 'pointer-events-none scale-95 opacity-0'
        }`}
        id="primary-menu"
      >
        <ul className="grid gap-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                aria-current={pathname === item.href ? 'page' : undefined}
                className="block rounded-xl px-4 py-3 text-sm font-bold text-ink/75 transition hover:bg-mist hover:text-clay aria-[current=page]:bg-mist aria-[current=page]:text-clay dark:text-white/75 dark:hover:bg-white/10 dark:hover:text-white dark:aria-[current=page]:bg-white/10 dark:aria-[current=page]:text-white"
                href={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
