<template>
  <div class="w-full">
    <section v-for="section in sections" :key="section.title" class="even:bg-blue-900 even:bg-darken-4 even:bg-opacity-25">
      <div :class="section.position == 0 ? 'pt-2 pb-12' : 'py-10'" class="container mx-auto px-5 md:px-0">
        <template v-if="section.position != 0">
          <h1>{{ section.title }}</h1>
          <span class="text-gray-600">{{ section.description }}</span>
        </template>
        <nuxt-content class="mt-8" :document="section" />
      </div>
    </section>
    <section class="container mx-auto flex justify-center md:justify-start py-10 px-5 md:px-0">
      <button class="btn uppercase">Print As Curriculum Vitae</button>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    return {
      sections: await $content('about').sortBy('position', 'asc').fetch()
    }
  },
  head () {
    return {
      title: this.sections[0].title,
      meta: [
        { hid: 'description', name: 'description', content: this.sections[0].description },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: this.sections[0].title },
        { hid: 'og:description', property: 'og:description', content: this.sections[0].description },
        // Twitter Card
        { hid: 'twitter:title', name: 'twitter:title', content: this.sections[0].title },
        { hid: 'twitter:description', name: 'twitter:description', content: this.sections[0].description }
      ]
    }
  }
}
</script>
