<template>
  <div class="w-full">
    <BaseSection jumbo>
      <div
        class="flex flex-col items-center md:flex-row space-x-0 md:space-x-10 space-y-4 md:space-y-0"
      >
        <img
          src="~/assets/img/avatar.png"
          class="flex-shrink-0 h-32 md:h-48 object-cover rounded-full"
        />
        <div class="flex flex-col items-center md:items-start">
          <h1 class="text-center md:text-left">{{ jumbo.title }}</h1>
          <BaseChip class="mt-1 text-sm" :title="jumbo.job_simplified">{{
            jumbo.job
          }}</BaseChip>
          <nuxt-content
            class="mt-3 text-center md:text-left"
            :document="jumbo"
          />
          <BaseButton
            class="mt-3 text-sm uppercase"
            @click.native="$router.push('/about')"
            >Learn more about me</BaseButton
          >
        </div>
      </div>
    </BaseSection>
    <BaseSection
      secondary
      title="Projects"
      :more="{ label: 'View All Projects', path: '/projects' }"
    >
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10"
      >
        <div v-for="project in projects" :key="project.title">
          <div class="relative pb-64">
            <img
              class="absolute h-full w-full object-top object-cover rounded"
              :src="require(`~/assets/img/projects/${project.title}.png`)"
              :alt="project.title"
            />
          </div>
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
      <div class="flex flex-col space-y-10">
        <article
          v-for="post in posts"
          :key="post.title"
          class="flex flex-col justify-center md:justify-start md:flex-row space-y-3 md:space-y-0 md:space-x-10"
        >
          <div class="relative pb-56 sm:pb-64 md:pr-48 md:pb-32 lg:pr-56 lg:pb-40">
            <img
              class="absolute h-full w-full object-top object-cover rounded"
              :src="require(`~/assets/img/posts/${post.img}`)"
              :alt="post.title"
            />
          </div>
          <div>
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
          </div>
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
