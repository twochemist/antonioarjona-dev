import { notFound } from 'next/navigation'
import { getUseList, getUseLists } from '@/lib/content'
import { SectionHeader } from '@/ui/SectionHeader'

export function generateStaticParams() {
  return getUseLists().map((list) => ({ slug: list.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const list = getUseList(params.slug)
  if (!list) return {}
  return {
    title: list.title,
    description: list.description,
  }
}

export default function ListDetailPage({ params }: { params: { slug: string } }) {
  const list = getUseList(params.slug)
  if (!list) notFound()

  return (
    <main className="space-y-10">
      <SectionHeader
        eyebrow="Uses"
        title={list.title}
        description={list.description}
      />
      <div className="grid gap-4 md:grid-cols-2">
        {list.entries.map((entry) => {
          const content = (
            <article className="flex h-full gap-4 rounded-lg border border-ink/10 bg-white/60 p-5 shadow-soft transition hover:border-clay/50 dark:border-white/10 dark:bg-white/5">
              {!list.hideLogos && entry.logo ? (
                <img
                  className="h-12 w-12 flex-none rounded-md object-contain"
                  src={entry.logo}
                  alt=""
                />
              ) : null}
              <div>
                <h2 className="text-xl font-black">{entry.title}</h2>
                {entry.description ? (
                  <p className="mt-2 text-sm leading-7 text-ink/65 dark:text-white/65">
                    {entry.description}
                  </p>
                ) : null}
              </div>
            </article>
          )

          return entry.url ? (
            <a href={entry.url} key={entry.title}>
              {content}
            </a>
          ) : (
            <div key={entry.title}>{content}</div>
          )
        })}
      </div>
    </main>
  )
}

