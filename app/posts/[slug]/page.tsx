import { notFound } from 'next/navigation'
import { formatDate, getPost, getPosts } from '@/lib/content'
import { Badge } from '@/ui/Badge'
import { Markdown } from '@/ui/Markdown'

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
  }
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug)
  if (!post) notFound()

  return (
    <main className="mx-auto max-w-4xl space-y-8">
      <header>
        <p className="mb-3 text-sm font-black text-clay">
          {formatDate(post.publishedAt)}
        </p>
        <h1 className="text-4xl font-black leading-none md:text-6xl">
          {post.title}
        </h1>
        {post.description ? (
          <p className="mt-5 text-lg leading-8 text-ink/65 dark:text-white/65">
            {post.description}
          </p>
        ) : null}
        <div className="mt-5 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      </header>
      {post.image ? (
        <img
          className="w-full rounded-lg shadow-soft"
          src={post.image}
          alt={post.alt || post.title}
        />
      ) : null}
      <Markdown html={post.html} />
    </main>
  )
}

