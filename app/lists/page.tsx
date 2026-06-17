import Link from 'next/link'
import { getUseLists } from '@/lib/content'
import { SectionHeader } from '@/ui/SectionHeader'

export const metadata = {
  title: 'Uses',
  description: 'Hardware, tools and technologies used by Antonio Arjona.',
}

export default function ListsPage() {
  const lists = getUseLists()

  return (
    <main className="space-y-10">
      <SectionHeader
        eyebrow="Uses"
        title="Tools, hardware and stack"
        description="A practical list of the tools and technologies I use for development, operations and personal work."
      />
      <div className="grid gap-5 md:grid-cols-3">
        {lists.map((list) => (
          <Link
            className="rounded-lg border border-ink/10 bg-white/60 p-5 shadow-soft transition hover:-translate-y-1 hover:border-clay/50 dark:border-white/10 dark:bg-white/5"
            href={`/lists/${list.slug}`}
            key={list.slug}
          >
            {list.image ? (
              <img
                className="mb-5 aspect-video w-full rounded-md bg-mist object-cover"
                src={list.image}
                alt={list.title}
              />
            ) : null}
            <h2 className="text-2xl font-black">{list.title}</h2>
            {list.description ? (
              <p className="mt-2 text-sm leading-7 text-ink/65 dark:text-white/65">
                {list.description}
              </p>
            ) : null}
          </Link>
        ))}
      </div>
    </main>
  )
}

