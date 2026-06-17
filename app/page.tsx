import Link from 'next/link'
import { getProjects } from '@/lib/content'
import { Badge } from '@/ui/Badge'

const stack = [
  'JavaScript / TypeScript',
  'React / Next.js',
  'Vue',
  'Node.js',
  'Python',
  'Django',
  'MySQL / MongoDB',
  'C / embedded systems',
]

export default function Home() {
  const featuredProjects = getProjects().slice(0, 3)

  return (
    <main className="space-y-20">
      <section className="grid min-h-[68vh] items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-clay">
            Software developer / Industrial systems / Germany
          </p>
          <h1 className="max-w-3xl text-5xl font-black leading-none tracking-tight text-ink md:text-7xl dark:text-white">
            Building industrial software for manufacturing excellence.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/65 dark:text-white/65">
            I am Antonio Arjona, a software developer turning operational data
            into practical tools, automation, embedded systems and visual
            projects. Skilled in electronics, manufacturing, and craftsmanship
            techniques.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              className="rounded-full bg-ink px-5 py-3 text-sm font-black text-white transition hover:bg-clay dark:bg-white dark:text-ink dark:hover:bg-clay dark:hover:text-white"
              href="/projects"
            >
              View projects
            </Link>
            <Link
              className="rounded-full border border-ink/15 px-5 py-3 text-sm font-black text-ink transition hover:border-clay hover:text-clay dark:border-white/20 dark:text-white"
              href="/cv"
            >
              See profile
            </Link>
          </div>
        </div>
        <figure className="rotate-1 rounded-lg border border-ink/10 bg-[#f7f4ee] p-3 shadow-soft dark:border-white/10 dark:bg-white/10">
          <img
            className="aspect-[4/5] w-full rounded-md object-cover"
            src="/profil.jpg"
            alt="Antonio Arjona"
          />
          <figcaption className="px-1 pt-3 text-sm text-ink/60 dark:text-white/60">
            Developer and automotive enthusiast.
          </figcaption>
        </figure>
      </section>

      <section className="grid border-y border-ink/10 dark:border-white/10 md:grid-cols-3">
        {[
          ['Frontend', 'React, Next.js, Vue, design systems'],
          ['Backend', 'Node.js, Python, APIs, databases'],
          ['Systems', 'Automation, embedded C, maker tools'],
        ].map(([title, text]) => (
          <article
            className="border-ink/10 p-6 dark:border-white/10 md:border-r md:last:border-r-0"
            key={title}
          >
            <h2 className="text-lg font-black">{title}</h2>
            <p className="mt-2 text-sm leading-6 text-ink/60 dark:text-white/60">
              {text}
            </p>
          </article>
        ))}
      </section>

      <section>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-clay">
              Selected projects
            </p>
            <h2 className="max-w-3xl text-4xl font-black leading-tight md:text-5xl">
              Practical tools for real operations.
            </h2>
          </div>
          <Link className="text-sm font-black text-clay" href="/projects">
            All projects
          </Link>
        </div>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <Link
              className="group rounded-lg border border-ink/10 bg-white/55 p-4 shadow-soft transition hover:-translate-y-1 hover:border-clay/50 dark:border-white/10 dark:bg-white/5"
              href={`/projects/${project.slug}`}
              key={project.slug}
            >
              {project.img ? (
                <img
                  className="aspect-video w-full rounded-md bg-mist object-cover"
                  src={`/projects/${project.img}`}
                  alt={project.alt || project.title}
                />
              ) : null}
              <div className="mt-4 flex items-center gap-2">
                <Badge tone={project.status === 1 ? 'active' : 'muted'}>
                  {project.status === 1 ? 'Active' : 'Archived'}
                </Badge>
              </div>
              <h3 className="mt-4 text-xl font-black group-hover:text-clay">
                {project.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-ink/60 dark:text-white/60">
                {project.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-clay">
            Current stack
          </p>
          <h2 className="text-4xl font-black leading-tight">
            Pragmatic tools, modern delivery.
          </h2>
        </div>
        <ul className="flex flex-wrap gap-3">
          {stack.map((item) => (
            <li
              className="rounded-full border border-ink/10 bg-white/60 px-4 py-2 text-sm font-black dark:border-white/10 dark:bg-white/10"
              key={item}
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="grid items-center gap-6 rounded-lg bg-ink p-8 text-white md:grid-cols-[1fr_auto]">
        <div>
          <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-clay">
            Collaborations
          </p>
          <h2 className="text-3xl font-black">Have a project or prototype idea?</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/70">
            I like projects where technology has a clear purpose: a sharper
            website, a useful internal tool, a reliable integration, or a custom
            creative piece with a personal story behind it.
          </p>
        </div>
        <a
          className="rounded-full bg-white px-5 py-3 text-sm font-black text-ink transition hover:bg-clay hover:text-white"
          href=""
        >
          Start a conversation
        </a>
      </section>
    </main>
  )
}

