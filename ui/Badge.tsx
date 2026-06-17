type BadgeProps = {
  children: React.ReactNode
  tone?: 'default' | 'active' | 'muted'
}

export function Badge({ children, tone = 'default' }: BadgeProps) {
  const tones = {
    default:
      'border-ink/10 bg-white/70 text-ink/70 dark:border-white/10 dark:bg-white/10 dark:text-white/70',
    active:
      'border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300',
    muted:
      'border-amber-500/20 bg-amber-500/10 text-amber-700 dark:text-amber-300',
  }

  return (
    <span
      className={`inline-flex rounded-full border px-3 py-1 text-xs font-black ${tones[tone]}`}
    >
      {children}
    </span>
  )
}
