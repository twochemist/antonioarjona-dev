<template>
  <header role="banner">
    <h1>
      <nuxt-link to="/">{{ globals.title }}</nuxt-link>
    </h1>
    <nav role="navigation">
      <ul>
        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li><nuxt-link to="/projects">Projects</nuxt-link></li>
        <li><nuxt-link to="/lists">Uses</nuxt-link></li>
        <li><nuxt-link to="/posts">Blog</nuxt-link></li>
        <li><nuxt-link to="/cv">CV</nuxt-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'TheLayoutHeader',
}
</script>

<style lang="sass" scoped>
header
  width: 100%
  display: flex
  flex-direction: row
  flex-wrap: nowrap
  justify-content: space-between
  align-content: center
  align-items: center
  background: rgba($color-light, .82)
  border: 1px solid rgba($color-primary, .08)
  border-radius: 999px
  box-shadow: 0 .7rem 2rem rgba($color-primary, .05)
  padding: .75rem .9rem .75rem 1.25rem
  position: sticky
  top: 1rem
  z-index: 10
  @supports (backdrop-filter: blur(1rem))
    backdrop-filter: blur(1rem)
  @media (prefers-color-scheme: dark)
    background: rgba($color-dark, .82)
    border-color: rgba($color-light, .1)
  @media screen and (max-width: $breakpoint-mobile)
    border-radius: 18px
    flex-direction: column
    justify-content: center
    padding: 1rem
h1
  font-size: 1.15rem
  line-height: 1
  @media screen and (max-width: $breakpoint-mobile)
    margin: 0 0 1rem 0
  a
    color: $color-primary
    text-decoration: none
    border-bottom: 0
    font-weight: 700
    transition: $animation
    line-height: 1
    &:hover
      color: $color-accent
    @media (prefers-color-scheme: dark)
      color: $color-light
      &:hover
        color: $color-accent
nav
  ul
    display: flex
    flex-direction: row
    flex-wrap: wrap
    justify-content: flex-start
    align-content: flex-start
    align-items: flex-start
    gap: .25rem
    li
      a
        color: $color-primary
        text-decoration: none
        border-bottom: 0
        border-radius: 999px
        display: block
        font-size: .95rem
        font-weight: 700
        line-height: 1
        padding: .65rem .8rem
        transition: $animation
        &.nuxt-link-exact-active
          background: $color-primary
          color: $color-light
          &:hover
            background: $color-accent
            color: $color-light
        &:hover
          color: $color-accent
        @media (prefers-color-scheme: dark)
          color: $color-light
          &.nuxt-link-exact-active
            background: $color-light
            color: $color-primary
            &:hover
              background: $color-accent
              color: $color-light
          &:hover
            color: $color-accent
</style>
