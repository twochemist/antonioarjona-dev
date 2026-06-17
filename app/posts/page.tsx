import Link from 'next/link'
import { formatDate, getPosts } from '@/lib/content'
import { Badge } from '@/ui/Badge'
import { SectionHeader } from '@/ui/SectionHeader'

export const metadata = {
  title: 'Blog',
  description: 'Articles and notes by Antonio Arjona.',
}

export default function PostsPage() {
  const posts = getPosts()

  return (
    <main className="space-y-10">
      <SectionHeader
        eyebrow="Writing"
        title="Blog"
        description="Notes about software, industrial technology, electronics, tooling and experiments."
      />
      <div className="grid gap-4">
        {posts.map((post) => (
          <Link
            className="rounded-lg border border-ink/10 bg-white/60 p-5 shadow-soft transition hover:-translate-y-1 hover:border-clay/50 dark:border-white/10 dark:bg-white/5"
            href={`/posts/${post.slug}`}
            key={post.slug}
          >
            <p className="text-sm font-bold text-clay">{formatDate(post.publishedAt)}</p>
            <h2 className="mt-2 text-2xl font-black">{post.title}</h2>
            {post.description ? (
              <p className="mt-2 text-sm leading-7 text-ink/65 dark:text-white/65">
                {post.description}
              </p>
            ) : null}
            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}

