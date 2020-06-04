<template>
  <div
    v-if="loading"
    class="z-10 fixed w-full h-full flex flex-col text-blue-400 items-center justify-center top-0 left-0 bg-gray-900 bg-darken-4 backdrop-blur bg-opacity-75"
  >
    <svg
      version="1.1"
      id="L4"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      class="w-20 md:w-32 text-center fill-current"
      viewBox="0 0 52 12"
      xml:space="preserve"
    >
      <circle stroke="none" cx="6" cy="6" r="6">
        <animate
          attributeName="opacity"
          dur="1s"
          values="0;1;0"
          repeatCount="indefinite"
          begin="0.1"
        />
      </circle>
      <circle stroke="none" cx="26" cy="6" r="6">
        <animate
          attributeName="opacity"
          dur="1s"
          values="0;1;0"
          repeatCount="indefinite"
          begin="0.2"
        />
      </circle>
      <circle stroke="none" cx="46" cy="6" r="6">
        <animate
          attributeName="opacity"
          dur="1s"
          values="0;1;0"
          repeatCount="indefinite"
          begin="0.3"
        />
      </circle>
    </svg>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start() {
      setTimeout(() => {
        this.loading = true
      }, 200)
    },
    finish() {
      setTimeout(() => {
        this.loading = false
      }, 200)
    }
  }
}
</script>
