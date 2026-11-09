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
            Antonio Arjona
          </p>
          <h1 className="max-w-3xl text-5xl font-black leading-none tracking-tight text-ink md:text-7xl dark:text-white">
            I like building things with software and electronics.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/65 dark:text-white/65">
            I’m Antonio, based in Germany. I build web tools and explore how
            sensors, electronics and software can work together. Lately, that’s
            meant building a supplier risk dashboard and designing a CAN sensor node.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="rounded-full bg-ink px-5 py-3 text-sm font-black text-white transition hover:bg-clay dark:bg-white dark:text-ink dark:hover:bg-clay dark:hover:text-white" href="/projects">
              Explore my work
            </Link>
            <Link className="rounded-full border border-ink/15 px-5 py-3 text-sm font-black text-ink transition hover:border-clay hover:text-clay dark:border-white/20 dark:text-white" href="/about">
              About me
            </Link>
          </div>
        </div>
        <figure className="rotate-1 rounded-lg border border-ink/10 bg-[#f7f4ee] p-3 shadow-soft dark:border-white/10 dark:bg-white/10">
          <img className="aspect-[4/5] w-full rounded-md object-cover" src="/profil.jpg" alt="Antonio Arjona" />
          <figcaption className="px-1 pt-3 text-sm text-ink/60 dark:text-white/60">
            Based in Germany.
          </figcaption>
        </figure>
      </section>

      <section>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-clay">Selected work</p>
            <h2 className="max-w-3xl text-4xl font-black leading-tight md:text-5xl">What I’ve been building</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-ink/65 dark:text-white/65">A working web app for supplier risk, plus two design studies in electronics and automation.</p>
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
          <h2 className="text-4xl font-black leading-tight">From chemistry to software and electronics</h2>
        </div>
        <div className="space-y-4 text-base leading-8 text-ink/65 dark:text-white/65">
          <p>I studied chemistry and spent more than 20 years in automotive manufacturing, from exterior lighting development to supplier qualification. That experience still shapes what I build, whether I’m thinking about how to read a sensor or how to make a dashboard easier to use.</p>
          <p>Away from the screen, I enjoy making things by hand and tinkering with electronics.</p>
          <Link className="inline-block text-sm font-black text-clay" href="/about">More about my background →</Link>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-clay">Writing</p>
          <h2 className="text-4xl font-black leading-tight">Thinking through technology.</h2>
        </div>
        <div className="space-y-4">
          <p className="text-base leading-8 text-ink/65 dark:text-white/65">I use writing to think through software, electronics and industrial systems: what I’ve tried, what I’m investigating and what I still need to understand. You can find my notes here and on Programmable.</p>
          <div className="flex flex-wrap gap-6 text-sm font-black text-clay">
            <a href="https://programmablelog.substack.com/">Read Programmable →</a>
            <Link href="/posts">Browse the writing archive →</Link>
          </div>
        </div>
      </section>

      <section className="grid items-center gap-6 rounded-lg bg-ink p-8 text-white md:grid-cols-[1fr_auto]">
        <div>
          <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-clay">Get in touch</p>
          <h2 className="text-3xl font-black">Have something interesting in mind?</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/70">If you’re building something with software or electronics, I’d love to hear what you’re working on.</p>
        </div>
        <a className="rounded-full bg-white px-5 py-3 text-sm font-black text-ink transition hover:bg-clay hover:text-white" href="https://www.linkedin.com/in/antonio-manuel-arjona/">Connect on LinkedIn</a>
      </section>
    </main>
  )
}
