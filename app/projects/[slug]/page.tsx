import { notFound } from 'next/navigation'
import { getProject, getProjects } from '@/lib/content'
import { Badge } from '@/ui/Badge'
import { Markdown } from '@/ui/Markdown'

export function generateStaticParams() {
  return getProjects().map((project) => ({ slug: project.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug)
  if (!project) return {}
  return {
    title: project.title,
    description: project.excerpt,
  }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug)
  if (!project) notFound()

  return (
    <main className="space-y-8">
      <div>
        <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-clay">
          Project
        </p>
        <h1 className="max-w-4xl text-4xl font-black leading-none md:text-6xl">
          {project.title}
        </h1>
        <div className="mt-5 flex flex-wrap gap-2">
          <Badge tone={project.status === 1 ? 'active' : 'muted'}>
            {project.status === 1 ? 'Active' : 'Archived'}
          </Badge>
          {project.responsibilities.map((item) => (
            <Badge key={item}>{item}</Badge>
          ))}
        </div>
      </div>
      {project.img ? (
        <img
          className="w-full rounded-lg border border-ink/10 bg-mist object-cover shadow-soft dark:border-white/10"
          src={`/projects/${project.img}`}
          alt={project.alt || project.title}
        />
      ) : null}
      <div className="grid gap-8 lg:grid-cols-[1fr_16rem]">
        <Markdown html={project.html} />
        <aside className="space-y-3">
          {project.links
            .filter((link) => link.url)
            .map((link) => (
              <a
                className="block rounded-full bg-ink px-4 py-3 text-center text-sm font-black text-white transition hover:bg-clay dark:bg-white dark:text-ink dark:hover:bg-clay dark:hover:text-white"
                href={link.url || '#'}
                key={link.title}
              >
                {link.title}
              </a>
            ))}
        </aside>
      </div>
    </main>
  )
}

