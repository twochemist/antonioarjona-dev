import Link from 'next/link'
import { getProjects } from '@/lib/content'
import { Badge } from '@/ui/Badge'
import { SectionHeader } from '@/ui/SectionHeader'

export const metadata = {
  title: 'Projects',
  description: 'Selected software, automation, industrial and creative projects.',
}

export default function ProjectsPage() {
  const projects = getProjects()

  return (
    <main className="space-y-10">
      <SectionHeader
        eyebrow="Portfolio"
        title="Selected Projects"
        description="A curated view of software, industrial dashboards, automation and creative technology projects."
      />
      <div className="grid gap-5">
        {projects.map((project) => (
          <article
            className="grid gap-6 rounded-lg border border-ink/10 bg-white/60 p-5 shadow-soft dark:border-white/10 dark:bg-white/5 md:grid-cols-[17rem_1fr]"
            key={project.slug}
          >
            {project.img ? (
              <Link href={`/projects/${project.slug}`}>
                <img
                  className="aspect-video w-full rounded-md bg-mist object-cover"
                  src={`/projects/${project.img}`}
                  alt={project.alt || project.title}
                />
              </Link>
            ) : null}
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge tone={project.status === 1 ? 'active' : 'muted'}>
                  {project.status === 1 ? 'Active' : 'Archived'}
                </Badge>
                {project.responsibilities.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
              <h2 className="mt-4 text-2xl font-black">
                <Link className="hover:text-clay" href={`/projects/${project.slug}`}>
                  {project.title}
                </Link>
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-ink/65 dark:text-white/65">
                {project.excerpt}
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link className="text-sm font-black text-clay" href={`/projects/${project.slug}`}>
                  View project
                </Link>
                {project.links
                  .filter((link) => link.url)
                  .map((link) => (
                    <a
                      className="text-sm font-black text-ink/65 hover:text-clay dark:text-white/65"
                      href={link.url || '#'}
                      key={link.title}
                    >
                      {link.title}
                    </a>
                  ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}

