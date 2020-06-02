<template>
  <div class="w-full">
    <BaseSection jumbo>
      <div
        class="flex flex-col items-center md:flex-row space-x-0 md:space-x-10 space-y-4 md:space-y-0"
      >
        <img
          src="~/assets/img/avatar.png"
          class="object-contain object-center rounded-full"
        />
        <div class="flex flex-col items-center md:items-start">
          <h1>{{ jumbo.title }}</h1>
          <BaseChip class="mt-1" :title="jumbo.job_simplified">{{
            jumbo.job
          }}</BaseChip>
          <nuxt-content
            class="mt-3 text-center md:text-left"
            :document="jumbo"
          />
        </div>
      </div>
    </BaseSection>
    <BaseSection
      secondary
      title="Projects"
      :more="{ label: 'View All Projects', path: '/projects' }"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        <div v-for="project in projects" :key="project.title">
          <img
            class="object-center object-cover"
            :src="require(`~/assets/img/projects/${project.title}.png`)"
            :alt="project.title"
          />
          <h2 class="mt-2">
            <a :href="project.link" target="_blank">{{ project.title }}</a>
          </h2>
          <div class="-mr-2 -mt-1 flex flex-wrap">
            <BaseChip
              v-for="tech in project.techs"
              :key="tech"
              class="mr-2 mt-2 text-sm"
              :title="tech"
              >{{ tech }}</BaseChip
            >
          </div>
          <p class="mt-3">{{ project.description }}</p>
        </div>
      </div>
    </BaseSection>
    <BaseSection
      title="Recent posts"
      :more="{ label: 'View All Posts', path: '/posts' }"
    >
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
        <article v-for="post in posts" :key="post.title" class="">
          <img
            class="object-center object-cover"
            :src="require(`~/assets/img/posts/${post.img}`)"
            :alt="post.title"
          />
          <h2 class="mt-2">
            <a :href="post.link" target="_blank">{{ post.title }}</a>
          </h2>
          <div class="-mr-2 -mt-1 flex flex-wrap">
            <BaseChip
              v-for="tag in post.tags"
              :key="tag"
              class="mr-2 mt-2 text-sm"
              :title="tag"
              >{{ tag }}</BaseChip
            >
          </div>
          <p class="mt-3 truncate">{{ post.description }}</p>
        </article>
      </div>
    </BaseSection>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    return {
      jumbo: await $content('index/jumbo').fetch(),
      projects: await $content('projects')
        .sortBy('position', 'asc')
        .limit(5)
        .fetch(),
      posts: await $content('posts')
        .sortBy('createdAt', 'desc')
        .sortBy('position', 'asc')
        .limit(5)
        .fetch()
    }
  }
}
</script>
