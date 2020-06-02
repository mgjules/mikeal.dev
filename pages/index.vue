<template>
  <div class="w-full">
    <section
      class="container pt-10 pb-20 px-5 md:px-0 mx-auto flex flex-col items-center md:flex-row space-x-0 md:space-x-10 space-y-4 md:space-y-0"
    >
      <img
        src="~/assets/img/avatar.png"
        class="object-contain object-center rounded-full"
      />
      <div class="flex flex-col items-center md:items-start">
        <h1>{{ jumbo.title }}</h1>
        <span :title="jumbo.job_simplified" class="mt-1 px-2 py-1 bg-gray-800 rounded">{{
          jumbo.job
        }}</span>
        <nuxt-content class="mt-3 text-center md:text-left" :document="jumbo" />
      </div>
    </section>
    <section class="bg-blue-900 bg-darken-4 bg-opacity-25">
      <div class="container py-10 px-5 md:px-0 mx-auto">
        <h1>Projects</h1>
      </div>
    </section>
    <section class="container mx-auto py-10 px-5 md:px-0">
      <h1>Recent posts</h1>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    return {
      jumbo: await $content('index/jumbo').fetch()
    }
  }
}
</script>
