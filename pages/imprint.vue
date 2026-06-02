<template>
  <section class="nuxt-content">
    <h2>Imprint</h2>
    <h3>Legal Disclosure</h3>
    Information in accordance with Section 5 TMG
    <h3>Address</h3>
    <ul>
      <li>59555 Lippstadt</li>
      <li>Germany</li>
    </ul>
    <h3>Contact Information</h3>
    <ul>
      <li>Name: {{ globals.author }}</li>
      <li>
        E-Mail: <a :href="globals.mailto">{{ globals.email }}</a>
      </li>
    </ul>
    <h3>Graphics and Image Sources</h3>
    <ul>
      <li>{{ globals.author }}</li>
    </ul>
    <h3>Disclaimer</h3>
    <h4>Accountability for content</h4>
    <p>
      These pages describe personal hobby programming projects. They do not
      pursue commercial interests and are not affiliated with any commercial
      enterprise. I do not offer anything for sale, but am happy to help with
      advice if you want to build anything related to the related topics
    </p>
    <h4>Accountability for links</h4>
    <p>
      Responsibility for the content of external links (to web pages of third
      parties) lies solely with the operators of the linked pages. No violations
      were evident to us at the time of linking. Should any legal infringement
      become known to us, we will remove the respective link immediately.
    </p>
    <h4>Copyright</h4>
    <p>
      The use of the information material prov10 by Antonio Arjona. Use for
      commercial purposes requires my permission in writing. Use for
      non-commercial purposes is hereby granted free of charge, but I ask that
      you disclose the source and include this copyright notice and a link to
      this website. I would appreciate if you let me know when you re-use this
      stuff. Picture credits are usually mentioned directly at the image.
    </p>
  </section>
</template>

<script>
export default {
  name: 'Imprint',
}
</script>

<style scoped></style>
