<template>
  <div
    class="container mx-auto flex flex-col justify-center items-center flex-grow"
  >
    <img
      src="~/assets/img/error.jpg"
      alt="wtf?"
      class="h-40 w-40 object-cover rounded-full"
    />
    <h1 class="uppercase font-light text-4xl mt-2">UH OH!</h1>
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
