<template>
  <MainComponent />
</template>

<script>
import MainComponent from "~/components/MainComponent";

export default {
  components: {
    MainComponent
  },
  head() {
    return {
      title: `Vino | ${this.$options.filters.capitalize(
        this.$route.params.page
      ) || "Homess"}`,
      meta:
        this.vino_pageBy && this.vino_pageBy.metas
          ? this.vino_pageBy.metas.metatags
          : []
    };
  }
};
</script>

<style>
</style>