<template>
  <div class="container mx-auto flex flex-col justify-center items-center flex-grow">
    <h1 class="uppercase font-light text-4xl">UH OH!</h1>
    <h2 class="uppercase font-light text-2xl pt-2" v-if="error.statusCode === 404">
      Page not found
    </h2>
    <h2 class="uppercase font-light text-2xl" v-else>
      Something bad happened
    </h2>
    <nuxt-link to="/" class="pt-5">Back to safety</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>
