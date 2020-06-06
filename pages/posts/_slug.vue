<template>
  <div class="w-full">
    <article class="mt-8">
      <div class="container px-5 md:px-0">
        <h1 class="font-semibold" :title="post.title">
          {{ post.title }}
        </h1>
        <p class="text-sm text-gray-500 uppercase">
          {{ $dateFns.format(post.createdAt, 'dd MMM yyyy') }}
        </p>
        <div class="-mr-2 -mt-1 md:-md-2 flex flex-wrap">
          <BaseChip
            v-for="tag in post.tags"
            :key="tag"
            class="mr-2 mt-4 text-xs tracking-wider uppercase truncate"
            :title="tag"
            >{{ tag }}</BaseChip
          >
        </div>
      </div>
      <div
        v-lazy-container="{ selector: 'img' }"
        class="mt-8 mx-auto lg:w-1/2 relative pb-2/3 md:1/2 lg:pb-1/3"
      >
        <img
          class="absolute h-full w-full object-center object-cover lg:rounded-lg"
          :data-src="require(`~/assets/img/posts/${post.img}`)"
          :data-loading="require(`~/assets/img/posts/${post.img}?lqip`)"
          :alt="post.title"
        />
      </div>
      <nuxt-content class="mt-8" :document="post" />
    </article>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, store, app, params, error }) {
    const slug = params.slug

    let post
    try {
      post = await $content('posts', slug).fetch()
    } catch (e) {
      return error({ statusCode: 404, message: 'Page not found' })
    }

    const [prev, next] = await $content('posts')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'desc')
      .sortBy('position', 'asc')
      .surround(slug, { before: 1, after: 1 })
      .fetch()

    return {
      post,
      prev,
      next
    }
  },
  head() {
    return {
      title: this.post.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.description
        },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: this.post.title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.post.description
        },
        // Twitter Card
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.post.title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.post.description
        }
      ]
    }
  }
}
</script>
