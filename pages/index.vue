<template>
  <div class="w-full">
    <BaseSection jumbo>
      <div
        class="flex flex-col items-center md:flex-row space-x-0 md:space-x-10 space-y-4 md:space-y-0"
      >
        <div v-lazy-container="{ selector: 'img' }">
          <img
            :data-src="require('~/assets/img/avatar.png')"
            :data-loading="require('~/assets/img/avatar.png?lqip')"
            class="flex-shrink-0 h-32 md:h-48 object-cover rounded-full"
          />
        </div>
        <div class="flex flex-col items-center md:items-start">
          <h1 class="text-center md:text-left">{{ jumbo.title }}</h1>
          <BaseChip
            class="mt-1 text-sm tracking-wider"
            :title="jumbo.job_simplified"
            >{{ jumbo.job }}</BaseChip
          >
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
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div v-for="project in projects" :key="project.title">
          <div v-lazy-container="{ selector: 'img' }" class="relative pb-2/3">
            <img
              class="absolute h-full w-full object-top object-cover rounded-lg"
              :data-src="require(`~/assets/img/projects/${project.title}.png`)"
              :data-loading="require(`~/assets/img/projects/${project.title}.png?lqip`)"
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
    <BaseSection
      title="Recent posts"
      :more="{ label: 'View All Posts', path: '/posts' }"
    >
      <div class="flex flex-col space-y-10">
        <article
          v-for="post in posts"
          :key="post.id"
          class="flex flex-col justify-center md:justify-start md:flex-row space-y-3 md:space-y-0 md:space-x-10"
        >
          <div v-lazy-container="{ selector: 'img' }" class="md:w-1/3 xl:w-1/4 relative pb-2/3 md:pb-1/5 xl:pb-1/6">
            <img
              class="absolute h-full w-full object-cover rounded-lg"
              :data-src="require(`~/assets/img/posts/${post.img}`)"
              :data-loading="require(`~/assets/img/posts/${post.img}?lqip`)"
              :alt="post.title"
            />
          </div>
          <div
            class="md:w-2/3 xl:w-3/4 flex flex-col justify-start md:justify-center"
          >
            <h2 class="font-semibold">
              <nuxt-link :to="`/posts/${post.slug}`">{{
                post.title
              }}</nuxt-link>
            </h2>
            <p class="text-sm text-gray-500 uppercase">
              {{ $dateFns.format(post.createdAt, 'dd MMM yyyy') }}
            </p>
            <p
              class="mt-3 truncate-3-lines md:truncate-2-lines lg:truncate-3-lines"
            >
              {{ post.description }}
            </p>
            <div class="-mr-2 -mt-1 md:-md-2 flex flex-wrap">
              <BaseChip
                v-for="tag in post.tags"
                :key="tag"
                class="mr-2 mt-3 text-xs tracking-wider uppercase"
                :title="tag"
                >{{ tag }}</BaseChip
              >
            </div>
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
