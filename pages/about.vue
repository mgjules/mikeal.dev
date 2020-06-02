<template>
  <div class="w-full">
    <BaseSection
      v-for="(section, index) in sections"
      :key="section.title"
      :jumbo="section.position == 0"
      :secondary="(index % 2 != 0)"
      :title="section.position != 0 ? section.title : ''"
      :description="section.position != 0 ? section.description : ''"
    >
      <nuxt-content :document="section" />
    </BaseSection>
    <BaseSection>
      <BaseButton class="text-sm uppercase"
        >Print As Curriculum Vitae</BaseButton
      >
    </BaseSection>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    return {
      sections: await $content('about')
        .sortBy('position', 'asc')
        .fetch()
    }
  },
  head() {
    return {
      title: this.sections[0].title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.sections[0].description
        },
        // Open Graph
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.sections[0].title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.sections[0].description
        },
        // Twitter Card
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.sections[0].title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.sections[0].description
        }
      ]
    }
  }
}
</script>
