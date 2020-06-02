<template>
  <section :class="secondary ? 'bg-blue-900 bg-darken-4 bg-opacity-25' : ''">
    <div
      class="container mx-auto px-5 md:px-0"
      :class="jumbo ? 'pt-8 pb-16' : 'py-10'"
    >
      <h1 v-if="title">{{ title }}</h1>
      <span v-if="description" class="text-gray-600">{{ description }}</span>
      <div :class="title || description ? 'mt-10' : ''">
        <slot />
      </div>
      <div v-if="more" class="mt-12 flex justify-center">
        <BaseButton class="text-sm uppercase" @click.native="navigate(more.path)">{{
          more.label
        }}</BaseButton>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    description: {
      type: String
    },
    jumbo: {
      type: Boolean,
      default: false
    },
    secondary: {
      type: Boolean,
      default: false
    },
    more: {
      type: Object,
      default: () => {},
      validator: function(obj) {
        return obj.hasOwnProperty('label') && obj.hasOwnProperty('path')
      }
    }
  },
  methods: {
    navigate(path) {
      this.$router.push({
        path: path
      })
    }
  }
}
</script>
