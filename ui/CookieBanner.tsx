'use client'

import { useEffect, useState } from 'react'

const storageKey = 'GDPR:accepted'

export function CookieBanner() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(localStorage.getItem(storageKey) === null)
  }, [])

  function decide(value: boolean) {
    localStorage.setItem(storageKey, value.toString())
    setIsOpen(false)
  }

  if (!isOpen) return null

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-md rounded-lg bg-ink p-5 text-white shadow-soft dark:bg-white dark:text-ink max-md:left-4">
      <h2 className="text-lg font-black">Cookies</h2>
      <p className="mt-2 text-sm leading-6 opacity-80">
        I do not use cookies for analytics, but it is fine if you disagree.
      </p>
      <div className="mt-4 flex gap-3">
        <button
          className="rounded-full bg-white px-4 py-2 text-sm font-black text-ink transition hover:bg-clay hover:text-white dark:bg-ink dark:text-white"
          type="button"
          onClick={() => decide(true)}
        >
          Accept
        </button>
        <button
          className="rounded-full border border-white/30 px-4 py-2 text-sm font-black transition hover:border-clay hover:text-clay dark:border-ink/20"
          type="button"
          onClick={() => decide(false)}
        >
          Deny
        </button>
      </div>
    </div>
  )
}

