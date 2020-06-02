<template>
  <div class="container mx-auto flex flex-col justify-center items-center flex-grow">
    <img src="~/assets/img/error.jpg" alt="wtf?" class="h-40 w-40 object-cover rounded-full" />
    <h1 class="uppercase font-light text-4xl mt-2">UH OH!</h1>
    <h2 class="uppercase font-light text-2xl mt-1" v-if="error.statusCode === 404">
      Page not found
    </h2>
    <h2 class="uppercase font-light text-2xl mt-1" v-else>
      Something bad happened
    </h2>
    <nuxt-link to="/" class="mt-8">Back to safety</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>
