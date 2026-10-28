import Link from 'next/link'
import { getProjects } from '@/lib/content'
import { Badge } from '@/ui/Badge'

export default function Home() {
  const featuredProjects = getProjects().slice(0, 3)

  return (
    <main className="space-y-20">
      <section className="grid min-h-[68vh] items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-clay">
            Antonio Arjona / Industrial technology & software / Germany
          </p>
          <h1 className="max-w-3xl text-5xl font-black leading-none tracking-tight text-ink md:text-7xl dark:text-white">
            Industrial experience. Practical software.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/65 dark:text-white/65">
            I bring a background in automotive manufacturing, supplier development
            and electronics to web applications and industrial design studies.
            My focus is making operational information easier to understand and use.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-ink/65 dark:text-white/65">
            Currently developing my frontend and DevOps skills with Lemoncode,
            alongside a career working with components, production processes and quality.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="rounded-full bg-ink px-5 py-3 text-sm font-black text-white transition hover:bg-clay dark:bg-white dark:text-ink dark:hover:bg-clay dark:hover:text-white" href="/projects">
              Explore my work
            </Link>
            <Link className="rounded-full border border-ink/15 px-5 py-3 text-sm font-black text-ink transition hover:border-clay hover:text-clay dark:border-white/20 dark:text-white" href="/cv">
              View experience
            </Link>
          </div>
        </div>
        <figure className="rotate-1 rounded-lg border border-ink/10 bg-[#f7f4ee] p-3 shadow-soft dark:border-white/10 dark:bg-white/10">
          <img className="aspect-[4/5] w-full rounded-md object-cover" src="/profil.jpg" alt="Antonio Arjona" />
          <figcaption className="px-1 pt-3 text-sm text-ink/60 dark:text-white/60">
            Based in Germany. Curious about how things are built.
          </figcaption>
        </figure>
      </section>

      <section className="grid border-y border-ink/10 dark:border-white/10 md:grid-cols-3">
        {[
          ['Industrial context', 'Experience in supplier development, component qualification, manufacturing and automotive lighting.'],
          ['Practical software', 'Web interfaces and data tools that turn operational questions into something people can work with.'],
          ['Electronics & systems', 'An interest in sensing, embedded software and the path from a physical signal to a useful interface.'],
        ].map(([title, text]) => (
          <article className="border-ink/10 p-6 dark:border-white/10 md:border-r md:last:border-r-0" key={title}>
            <h2 className="text-lg font-black">{title}</h2>
            <p className="mt-2 text-sm leading-6 text-ink/60 dark:text-white/60">{text}</p>
          </article>
        ))}
      </section>

      <section>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-clay">Selected work</p>
            <h2 className="max-w-3xl text-4xl font-black leading-tight md:text-5xl">From industrial questions to technical decisions.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-ink/65 dark:text-white/65">A working portfolio application and two original concept designs exploring electronics and shopfloor workflows.</p>
          </div>
          <Link className="text-sm font-black text-clay" href="/projects">All projects & studies</Link>
        </div>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <Link className="group rounded-lg border border-ink/10 bg-white/55 p-4 shadow-soft transition hover:-translate-y-1 hover:border-clay/50 dark:border-white/10 dark:bg-white/5" href={`/projects/${project.slug}`} key={project.slug}>
              {project.img ? <img className="aspect-video w-full rounded-md bg-mist object-cover" src={`/projects/${project.img}`} alt={project.alt || project.title} /> : null}
              <div className="mt-4 flex items-center gap-2"><Badge tone={project.status === 1 ? 'active' : 'muted'}>{project.kind}</Badge></div>
              <h3 className="mt-4 text-xl font-black group-hover:text-clay">{project.title}</h3>
              <p className="mt-2 text-sm leading-6 text-ink/60 dark:text-white/60">{project.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-clay">About</p>
          <h2 className="text-4xl font-black leading-tight">A career built around how things work.</h2>
        </div>
        <div className="space-y-4 text-base leading-8 text-ink/65 dark:text-white/65">
          <p>My route into software started with chemistry and a career in automotive manufacturing, lighting development and supplier qualification. That background shapes the questions I bring to software: what information is missing, who needs it, and how can a tool make the next decision clearer?</p>
          <p>I also enjoy making things by hand, electronics and creative technology. I am interested in the details that connect an idea to something useful.</p>
          <Link className="inline-block text-sm font-black text-clay" href="/about">More about my background →</Link>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-clay">Writing</p>
          <h2 className="text-4xl font-black leading-tight">Thinking through technology.</h2>
        </div>
        <div className="space-y-4">
          <p className="text-base leading-8 text-ink/65 dark:text-white/65">I write in English about software, industrial systems and the decisions behind them. Programmable is where I explore these questions; this site also keeps an archive of earlier technical notes.</p>
          <div className="flex flex-wrap gap-6 text-sm font-black text-clay">
            <a href="https://programmablelog.substack.com/">Read Programmable →</a>
            <Link href="/posts">Browse the writing archive →</Link>
          </div>
        </div>
      </section>

      <section className="grid items-center gap-6 rounded-lg bg-ink p-8 text-white md:grid-cols-[1fr_auto]">
        <div>
          <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-clay">Get in touch</p>
          <h2 className="text-3xl font-black">Working where industry meets software?</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/70">I welcome conversations about industrial tools, electronics, web development and practical projects. You can reach me on LinkedIn.</p>
        </div>
        <a className="rounded-full bg-white px-5 py-3 text-sm font-black text-ink transition hover:bg-clay hover:text-white" href="https://www.linkedin.com/in/antonio-manuel-arjona/">Connect on LinkedIn</a>
      </section>
    </main>
  )
}
