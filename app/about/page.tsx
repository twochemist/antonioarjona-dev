import Link from 'next/link'
import { SectionHeader } from '@/ui/SectionHeader'

export const metadata = {
  title: 'About',
  description: 'From chemistry and automotive manufacturing to electronics, web applications and industrial design studies. Meet Antonio Arjona.',
}

export default function AboutPage() {
  return (
    <main className="space-y-10">
      <SectionHeader eyebrow="About" title="An engineering career, with software as another tool." description="I’m Antonio Arjona, an industrial technology professional based in Germany." />
      <div className="grid gap-10 lg:grid-cols-[1fr_18rem]">
        <div className="markdown">
          <h2>My route into software</h2>
          <p>My background isn’t the typical route into software development. I’ve spent more than 20 years in the automotive industry, working with manufacturing processes, components and the problems that come with bringing products into production.</p>
          <p>I studied chemistry at the University of Granada, spent an academic year at Friedrich Schiller University Jena and later pursued postgraduate studies in polymer science and technology at UNED. My professional path has taken me through analytical instruments, automotive manufacturing, exterior lighting development and supplier qualification.</p>
          <p>What I enjoy most is understanding how things work, finding what doesn’t and figuring out how to make it better. Software gives me another way to do that: bringing scattered information together, making a workflow easier to follow or helping someone see what needs attention.</p>
          <h2>What I’m building towards</h2>
          <p>I am developing my Full-Stack and DevOps skills. My portfolio brings that work into an industrial context, with web applications for operational information and design studies for electronics and automation.</p>
          <p>I use the portfolio to work through questions from manufacturing and supplier operations. Some projects are working applications with simulated data; others are design studies where I’m still exploring the architecture and how I would test it.</p>
          <h2>Beyond the code</h2>
          <p>I enjoy electronics, craftsmanship and creative technology, as well as running, cycling and swimming. Building something physical and writing a small piece of software both appeal to the same curiosity: understanding how the parts fit together.</p>
        </div>
        <aside className="space-y-5">
          <img className="aspect-[4/5] w-full rounded-lg object-cover" src="/profil.jpg" alt="Antonio Arjona" />
          <Link className="block rounded-full bg-ink px-5 py-3 text-center text-sm font-black text-white dark:bg-white dark:text-ink" href="/cv">View experience & education</Link>
          <a className="block text-center text-sm font-black text-clay" href="https://www.linkedin.com/in/antonio-manuel-arjona/">Connect on LinkedIn →</a>
        </aside>
      </div>
    </main>
  )
}
