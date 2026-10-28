import Link from 'next/link'
import { SectionHeader } from '@/ui/SectionHeader'

export const metadata = {
  title: 'About',
  description: 'From chemistry and automotive manufacturing to electronics, web applications and industrial design studies. Meet Antonio Arjona.',
}

export default function AboutPage() {
  return (
    <main className="space-y-10">
      <SectionHeader eyebrow="About" title="Industry, software and a hands-on curiosity." description="I’m Antonio Arjona, an industrial technology professional based in Germany." />
      <div className="grid gap-10 lg:grid-cols-[1fr_18rem]">
        <div className="markdown">
          <h2>My background</h2>
          <p>I studied chemistry at the University of Granada, spent an academic year at Friedrich Schiller University Jena and later pursued postgraduate studies in polymer science and technology at UNED. My professional path has taken me through analytical instruments, automotive manufacturing, exterior lighting development and supplier qualification.</p>
          <p>Working with physical products has made me interested in the whole system: components, processes, information and the people who use it. Those connections now guide the software projects I choose.</p>
          <h2>What I’m building towards</h2>
          <p>I am developing my frontend and DevOps skills through Lemoncode’s Máster Front End and Bootcamp Devops. My portfolio brings that work into an industrial context, with web applications for operational information and design studies for electronics and automation.</p>
          <p>Each project states what exists today and what is proposed. Working software includes source links where available. Concept designs describe requirements, architecture and a validation plan for a future build.</p>
          <h2>Beyond the screen</h2>
          <p>I enjoy electronics, craftsmanship and creative technology, as well as running, cycling and swimming. Building something physical and writing a small piece of software both appeal to the same curiosity: understanding how the parts fit together.</p>
          <h2>Writing in English</h2>
          <p>I use writing to examine ideas and practise communicating them clearly in English. On <a href="https://programmablelog.substack.com/">Programmable</a>, I explore software and industrial technology. My <Link href="/posts">earlier technical notes</Link> are also available here.</p>
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
