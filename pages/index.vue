<template>
  <section class="home-page">
    <div class="hero">
      <div class="hero__content">
        <p class="eyebrow">Software developer / Industrial systems / Germany</p>
        <h1>Building industrial software for manufacturing excellence.</h1>
        <p class="lede">
          I am Antonio Arjona, a software developer turnning operational data into practical tools,
          automation, embedded systems and visual projects. Skilled in electronics, manufacturing, and craftsmanship techniques.
        </p>
        <div class="hero__actions" aria-label="Primary links">
          <nuxt-link class="button button--primary" to="/projects">
            View projects
          </nuxt-link>
          <nuxt-link class="button button--secondary" to="/cv">
            See profile
          </nuxt-link>
        </div>
      </div>
      <figure class="hero__media">
        <img src="/profil.jpg" alt="Antonio Arjona" />
        <figcaption>Developer and automotive enthusiast.</figcaption>
      </figure>
    </div>

    <ul class="stats" aria-label="Professional focus">
      <li>
        <strong>Frontend</strong>
        <span>Vue, Nuxt, React, design systems</span>
      </li>
      <li>
        <strong>Backend</strong>
        <span>Node.js, Python, APIs, databases</span>
      </li>
      <li>
        <strong>Systems</strong>
        <span>Automation, embedded C, maker tools</span>
      </li>
    </ul>

    <section class="section">
      <div class="section__intro">
        <p class="eyebrow">What I do</p>
        <h2>Clean implementation for ideas that need to become real.</h2>
      </div>
      <div class="cards">
        <article class="card">
          <span>01</span>
          <h3>Product websites and web apps</h3>
          <p>
            Fast, maintainable interfaces with Nuxt, Vue, React, APIs and
            deployment workflows that stay understandable after launch.
          </p>
        </article>
        <article class="card">
          <span>02</span>
          <h3>Automation and data tooling</h3>
          <p>
            Scripts, dashboards, integrations, and backend services that remove
            repetitive work and make information easier to act on.
          </p>
        </article>
        <article class="card">
          <span>03</span>
          <h3>Creative technology</h3>
          <p>
            Software, electronics, and visual experimentation for personal
            projects and hands-on prototypes.
          </p>
        </article>
      </div>
    </section>

    <section class="split-section">
      <div>
        <p class="eyebrow">Current stack</p>
        <h2>Pragmatic tools, modern delivery.</h2>
      </div>
      <ul class="stack-list">
        <li>JavaScript / TypeScript</li>
        <li>Vue</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Python</li>
        <li>Django</li>
        <li>MySQL / MongoDB</li>
        <li>C / embedded systems</li>
      </ul>
    </section>

    <section class="closing">
      <div>
        <p class="eyebrow">Collaborations</p>
        <h2>Have a project, prototype, or artwork idea?</h2>
        <p>
          I like projects where technology has a clear purpose: a sharper
          website, a useful internal tool, a reliable integration, or a custom
          creative piece with a personal story behind it.
        </p>
      </div>
      <a class="button button--primary" :href="globals.mailto">Start a conversation</a>
    </section>
  </section>
</template>

<script>
import getSiteMeta from '@/assets/js/getMeta'

export default {
  name: 'HomePage',
  computed: {
    meta() {
      const metaData = {
        title: this.globals.title,
        description:
          'Antonio Arjona is a software developer building web apps, automation, embedded systems and creative technology projects.',
        url: '/',
        img: '/profil.jpg',
        imgAlt: 'Antonio Arjona',
      }
      return getSiteMeta(metaData)
    },
  },
  head() {
    return {
      title: this.meta.title,
      meta: [...this.meta],
    }
  },
}
</script>

<style lang="sass" scoped>
.home-page
  display: flex
  flex-direction: column
  gap: 5rem

.hero
  display: grid
  grid-template-columns: minmax(0, 1.1fr) minmax(18rem, .9fr)
  gap: 4rem
  align-items: center
  min-height: 68vh
  @media screen and (max-width: $breakpoint-tablet)
    grid-template-columns: minmax(0, 1fr)
    gap: 2.5rem
    min-height: auto

.hero__content
  display: flex
  flex-direction: column
  align-items: flex-start

.eyebrow
  color: $color-accent
  font-size: .82rem
  font-weight: 700
  letter-spacing: .08em
  margin: 0 0 1rem 0
  text-transform: uppercase

h1
  font-size: clamp(2.8rem, 6vw, 5.5rem)
  letter-spacing: 0
  line-height: .98
  margin: 0
  max-width: 12ch

.lede
  color: $color-muted
  font-size: 1.2rem
  line-height: 1.8
  margin: 1.5rem 0 0 0
  max-width: 42rem
  @media (prefers-color-scheme: dark)
    color: $color-muted-dark

.hero__actions
  display: flex
  flex-wrap: wrap
  gap: .8rem
  margin: 2rem 0 0 0

.button
  align-items: center
  border-radius: 999px
  display: inline-flex
  font-size: 1rem
  font-weight: 700
  justify-content: center
  line-height: 1
  min-height: 3rem
  padding: 0 1.3rem
  text-decoration: none
  transition: $animation

.button--primary
  background: $color-primary
  color: $color-light
  &:hover
    background: $color-accent
    color: $color-light
  @media (prefers-color-scheme: dark)
    background: $color-light
    color: $color-primary
    &:hover
      background: $color-accent
      color: $color-light

.button--secondary
  border: 1px solid rgba($color-primary, .18)
  color: $color-primary
  &:hover
    border-color: $color-accent
    color: $color-accent
  @media (prefers-color-scheme: dark)
    border-color: rgba($color-light, .18)
    color: $color-light
    &:hover
      border-color: $color-accent
      color: $color-accent

.hero__media
  background: $color-surface
  border: 1px solid rgba($color-primary, .08)
  border-radius: 8px
  padding: .8rem
  transform: rotate(1.5deg)
  @media (prefers-color-scheme: dark)
    background: $color-surface-dark
    border-color: rgba($color-light, .1)
  img
    aspect-ratio: 4 / 5
    border-radius: 6px
    display: block
    object-fit: cover
    width: 100%
  figcaption
    color: $color-muted
    font-size: .9rem
    line-height: 1.5
    padding: .8rem .2rem .1rem
    @media (prefers-color-scheme: dark)
      color: $color-muted-dark

.stats
  border-bottom: 1px solid rgba($color-primary, .1)
  border-top: 1px solid rgba($color-primary, .1)
  display: grid
  grid-template-columns: repeat(3, minmax(0, 1fr))
  @media (prefers-color-scheme: dark)
    border-color: rgba($color-light, .12)
  @media screen and (max-width: $breakpoint-tablet)
    grid-template-columns: minmax(0, 1fr)
  li
    padding: 1.5rem
    &:not(:last-child)
      border-right: 1px solid rgba($color-primary, .1)
      @media (prefers-color-scheme: dark)
        border-color: rgba($color-light, .12)
      @media screen and (max-width: $breakpoint-tablet)
        border-bottom: 1px solid rgba($color-primary, .1)
        border-right: 0
    strong
      display: block
      font-size: 1.1rem
      margin: 0 0 .25rem 0
    span
      color: $color-muted
      font-size: .95rem
      @media (prefers-color-scheme: dark)
        color: $color-muted-dark

.section
  display: flex
  flex-direction: column
  gap: 2rem

.section__intro
  max-width: 46rem
  h2
    font-size: clamp(2rem, 4vw, 3.6rem)
    line-height: 1.05

.cards
  display: grid
  grid-template-columns: repeat(3, minmax(0, 1fr))
  gap: 1rem
  @media screen and (max-width: $breakpoint-tablet)
    grid-template-columns: minmax(0, 1fr)

.card
  background: $color-surface
  border: 1px solid rgba($color-primary, .08)
  border-radius: 8px
  padding: 1.4rem
  @media (prefers-color-scheme: dark)
    background: $color-surface-dark
    border-color: rgba($color-light, .1)
  span
    color: $color-accent
    display: block
    font-family: 'JetBrains Mono', monospace
    font-size: .85rem
    margin: 0 0 1rem 0
  h3
    font-size: 1.35rem
    line-height: 1.2
    margin: 0 0 .8rem 0
  p
    color: $color-muted
    font-size: 1rem
    line-height: 1.7
    @media (prefers-color-scheme: dark)
      color: $color-muted-dark

.split-section
  display: grid
  grid-template-columns: minmax(0, .8fr) minmax(0, 1.2fr)
  gap: 3rem
  align-items: start
  @media screen and (max-width: $breakpoint-tablet)
    grid-template-columns: minmax(0, 1fr)
  h2
    font-size: clamp(2rem, 4vw, 3.2rem)
    line-height: 1.08

.stack-list
  display: flex
  flex-wrap: wrap
  gap: .7rem
  li
    background: $color-surface
    border: 1px solid rgba($color-primary, .08)
    border-radius: 999px
    color: $color-primary
    font-size: 1rem
    font-weight: 700
    padding: .65rem 1rem
    @media (prefers-color-scheme: dark)
      background: $color-surface-dark
      border-color: rgba($color-light, .1)
      color: $color-light

.closing
  align-items: center
  background: $color-primary
  border-radius: 8px
  color: $color-light
  display: grid
  grid-template-columns: minmax(0, 1fr) auto
  gap: 2rem
  padding: 2rem
  @media screen and (max-width: $breakpoint-tablet)
    align-items: start
    grid-template-columns: minmax(0, 1fr)
  h2
    font-size: clamp(1.8rem, 4vw, 3rem)
    line-height: 1.08
    margin: 0 0 1rem 0
  p
    color: rgba($color-light, .72)
    font-size: 1rem
    line-height: 1.7
    max-width: 44rem
  .button--primary
    background: $color-light
    color: $color-primary
    white-space: nowrap
    &:hover
      background: $color-accent
      color: $color-light
</style>
