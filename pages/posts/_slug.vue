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
    <div
      class="post-nav container my-10 flex flex-col sm:flex-row items-center sm:justify-between space-y-3 md:space-y-0"
    >
      <div>
        <nuxt-link
          class="text-xl flex items-center"
          :to="`/posts/${prev.slug}`"
          v-if="prev"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            class="fill-current h-8 w-8"
            x="0px"
            y="0px"
            viewBox="0 0 20 20"
            enable-background="new 0 0 20 20"
            xml:space="preserve"
          >
            <path
              d="M12.141,13.418c0.268,0.271,0.268,0.709,0,0.978c-0.268,0.27-0.701,0.272-0.969,0l-3.83-3.908  c-0.268-0.27-0.268-0.707,0-0.979l3.83-3.908c0.267-0.27,0.701-0.27,0.969,0c0.268,0.271,0.268,0.709,0,0.978L9,10L12.141,13.418z"
            />
          </svg>
          <div class="break-words">{{ prev.title }}</div></nuxt-link
        >
      </div>
      <div class="hidden sm:block flex-1" v-if="!prev || !next"></div>
      <div>
        <nuxt-link
          class="text-xl flex items-center"
          :to="`/posts/${next.slug}`"
          v-if="next"
          ><div class="break-words">{{ next.title }}</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            class="fill-current h-8 w-8"
            x="0px"
            y="0px"
            viewBox="0 0 20 20"
            enable-background="new 0 0 20 20"
            xml:space="preserve"
          >
            <path
              d="M11,10L7.859,6.58c-0.268-0.27-0.268-0.707,0-0.978c0.268-0.27,0.701-0.27,0.969,0l3.83,3.908  c0.268,0.271,0.268,0.709,0,0.979l-3.83,3.908c-0.267,0.272-0.701,0.27-0.969,0c-0.268-0.269-0.268-0.707,0-0.978L11,10z"
            /></svg
        ></nuxt-link>
      </div>
    </div>
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

<style lang="scss">
.post-nav {
  a {
    &:hover {
      @apply border-0;
    }
  }
}
</style>
