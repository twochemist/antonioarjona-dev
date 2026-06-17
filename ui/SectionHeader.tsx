type SectionHeaderProps = {
  eyebrow?: string
  title: string
  description?: string
}

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-clay">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="text-4xl font-black leading-none tracking-tight text-ink md:text-6xl dark:text-white">
        {title}
      </h1>
      {description ? (
        <p className="mt-5 text-lg leading-8 text-ink/65 dark:text-white/65">
          {description}
        </p>
      ) : null}
    </div>
  )
}

