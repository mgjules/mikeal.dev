<template>
  <div class="w-full">
    <BaseSection title="Projects" description="Projects I've worked on" jumbo>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div v-for="project in projects" :key="project.title">
          <div v-lazy-container="{ selector: 'img' }" class="relative pb-2/3">
            <img
              class="absolute h-full w-full object-top object-cover rounded-lg"
              :data-src="require(`~/assets/img/projects/${project.title}.png`)"
              :data-loading="
                require(`~/assets/img/projects/${project.title}.png?lqip`)
              "
              :alt="project.title"
            />
          </div>
          <h2 class="mt-2 font-semibold">
            <a :href="project.link" target="_blank">{{ project.title }}</a>
          </h2>
          <div class="-mr-2 -mt-1 flex flex-wrap">
            <BaseChip
              v-for="tech in project.techs"
              :key="tech"
              class="mr-2 mt-2 uppercase text-xs tracking-wider"
              :title="tech"
              >{{ tech }}</BaseChip
            >
          </div>
          <p class="mt-3">{{ project.description }}</p>
        </div>
      </div>
    </BaseSection>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    return {
      projects: await $content('projects')
        .sortBy('position', 'asc')
        .fetch()
    }
  }
}
</script>
