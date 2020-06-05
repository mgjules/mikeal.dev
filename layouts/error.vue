<template>
  <div
    class="container mx-auto flex flex-col justify-center items-center flex-grow"
  >
    <div v-lazy-container="{ selector: 'img' }">
      <img
        class="h-40 w-40 object-cover rounded-full"
        :data-src="require(`~/assets/img/error.jpg`)"
        :data-loading="require(`~/assets/img/error.jpg?lqip`)"
        alt="wtf?"
      />
    </div>
    <h1 class="uppercase font-bold text-4xl mt-2">UH OH!</h1>
    <h2 class="uppercase font-light text-2xl mt-1">
      {{ errorMsg }}
    </h2>
    <BaseButton class="mt-6 text-sm uppercase" @click.native="$router.push('/')"
      >Back to safety</BaseButton
    >
  </div>
</template>

<script>
export default {
  props: ['error'],
  computed: {
    errorMsg() {
      return this.error.statusCode === 404
        ? 'Page not found'
        : 'Something bad happened'
    }
  }
}
</script>
