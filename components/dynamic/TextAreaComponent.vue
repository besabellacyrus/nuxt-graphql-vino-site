<template>
  <div
    class="text-area container mx-auto mt-3"
    v-html="content"
  >
  </div>
</template>

<script>
export default {
  props: {
    content: String
  }

}
</script>

<style lang="scss">
.text-area {
  p {
    @media screen and (max-width: 1024px) {
      padding: 1rem;
    }
  }
}
</style>