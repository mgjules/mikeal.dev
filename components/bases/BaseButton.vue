<template>
  <button
    class="font-semibold px-3 py-2 rounded focus:outline-none"
    :class="type"
    :disabled="type == 'disabled'"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'primary'
    }
  }
}
</script>

<style lang="scss">
button {
  &.primary {
    @apply text-gray-900 bg-blue-400;

    &:hover {
      @apply text-gray-300 bg-blue-500;
    }
  }


  &.secondary {
    @apply text-gray-900 bg-teal-400;

    &:hover {
      @apply text-gray-300 bg-teal-500;
    }
  }

  &.disabled {
    @apply text-gray-500 bg-gray-700 cursor-not-allowed;
  }
}
</style>
