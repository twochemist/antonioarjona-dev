import { getCv } from '@/lib/content'
import { SectionHeader } from '@/ui/SectionHeader'

export const metadata = {
  title: 'CV',
  description: 'Antonio Arjona CV and professional profile.',
}

type CvEntry = {
  title?: string
  position?: string
  location?: string
  from?: string
  to?: string
  description?: string
}

type CvSegment = {
  title: string
  entries: CvEntry[]
}

export default function CvPage() {
  const cv = getCv() as {
    information: { name: string; image?: string; list?: Array<{ title: string; url: string }> }
    segments: CvSegment[]
    skills: Record<string, unknown>
  }

  return (
    <main className="space-y-10">
      <section className="grid items-center gap-8 rounded-lg border border-ink/10 bg-white/60 p-6 shadow-soft dark:border-white/10 dark:bg-white/5 md:grid-cols-[12rem_1fr]">
        {cv.information.image ? (
          <img
            className="aspect-square rounded-lg object-cover"
            src={cv.information.image}
            alt={cv.information.name}
          />
        ) : null}
        <SectionHeader
          eyebrow="CV"
          title={cv.information.name}
          description="Industrial software, supplier development, manufacturing operations, electronics and web technology."
        />
      </section>

      <div className="grid gap-6">
        {cv.segments.map((segment) => (
          <section
            className="rounded-lg border border-ink/10 bg-white/60 p-6 shadow-soft dark:border-white/10 dark:bg-white/5"
            key={segment.title}
          >
            <h2 className="text-2xl font-black">{segment.title}</h2>
            <div className="mt-6 grid gap-5">
              {segment.entries.map((entry, index) => (
                <article
                  className="border-t border-ink/10 pt-5 first:border-t-0 first:pt-0 dark:border-white/10"
                  key={`${entry.title}-${index}`}
                >
                  <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                    <h3 className="text-lg font-black">{entry.title}</h3>
                    <p className="text-sm font-bold text-clay">
                      {[entry.from, entry.to].filter(Boolean).join(' - ')}
                    </p>
                  </div>
                  <p className="mt-1 text-sm font-bold text-ink/60 dark:text-white/60">
                    {[entry.position, entry.location].filter(Boolean).join(' / ')}
                  </p>
                  {entry.description ? (
                    <p className="mt-3 text-sm leading-7 text-ink/65 dark:text-white/65">
                      {entry.description}
                    </p>
                  ) : null}
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}
