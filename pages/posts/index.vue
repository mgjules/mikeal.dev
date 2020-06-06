<template>
  <div class="w-full">
    <BaseSection title="Posts" description="Thoughts of my mind" jumbo>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <article v-for="post in posts" :key="post.id">
          <div v-lazy-container="{ selector: 'img' }" class="relative pb-2/3">
            <img
              class="absolute h-full w-full object-cover rounded-lg"
              :data-src="require(`~/assets/img/posts/${post.img}`)"
              :data-loading="require(`~/assets/img/posts/${post.img}?lqip`)"
              :alt="post.title"
            />
          </div>
          <h2 class="font-semibold mt-2 truncate" :title="post.title">
            <nuxt-link :to="`/posts/${post.slug}`">{{ post.title }}</nuxt-link>
          </h2>
          <p class="text-sm text-gray-500 uppercase">
            {{ $dateFns.format(post.createdAt, 'dd MMM yyyy') }}
          </p>
          <p
            class="mt-3 truncate-3-lines"
          >
            {{ post.description }}
          </p>
          <div class="-mr-2 -mt-1 md:-md-2 flex flex-wrap">
            <BaseChip
              v-for="tag in post.tags"
              :key="tag"
              class="mr-2 mt-3 text-xs tracking-wider uppercase truncate"
              :title="tag"
              >{{ tag }}</BaseChip
            >
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
      posts: await $content('posts')
        .sortBy('createdAt', 'desc')
        .sortBy('position', 'asc')
        .fetch()
    }
  }
}
</script>
