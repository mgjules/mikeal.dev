<template>
  <section :class="secondary ? 'bg-blue-900 bg-opacity-25' : ''">
    <div
      class="container"
      :class="jumbo ? 'pt-8 pb-16' : 'py-10'"
    >
      <h1 :id="title.toLowerCase().trim()" class="text-center md:text-left" v-if="title">{{ title }}</h1>
      <p v-if="description" class="text-gray-600 text-center md:text-left">{{ description }}</p>
      <div :class="title || description ? 'mt-6' : ''">
        <slot />
      </div>
      <div v-if="more" class="mt-12 flex justify-center">
        <BaseButton
          class="text-sm uppercase"
          @click.native="$router.push(more.path)"
          >{{ more.label }}</BaseButton
        >
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
  }
}
</script>
