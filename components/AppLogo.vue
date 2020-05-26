<template>
  <div class="app-logo flex justify-center my-0 h-0 invisible md:h-12 md:my-5 md:visible">
    <img class="pl-1" :src="imageUrl" alt />
  </div>
</template>

<script>
export default {
  props: ["imageUrl"]
};
</script>

<style lang="scss">
.app-logo {
  margin-bottom: 2rem;
  height: 5.3rem;

  img {
    margin-bottom: 2rem;
    height: 100%;
  }
}
</style>