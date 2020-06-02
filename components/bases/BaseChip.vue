<template>
  <span :title="title" class="px-2 py-1 bg-gray-800 rounded"
    ><slot
  /></span>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    }
  }
}
</script>
