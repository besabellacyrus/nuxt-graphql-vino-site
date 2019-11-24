<template>
  <div>
    <HeroImageDynamic
      class="pt-32"
      :img-url="require('~/assets/img/events/events-header-min.png')"
    ></HeroImageDynamic>
    <EventBlogContainer></EventBlogContainer>
  </div>
</template>

<script>

import CenterSectionDynamic from "~/components/dynamic/CenterSectionDynamic"
import HeroImageDynamic from "~/components/dynamic/HeroImageDynamic"
import EventBlogContainer from "~/components/sections/EventBlogContainer"

export default {
  components: {
    HeroImageDynamic,
    CenterSectionDynamic,
    EventBlogContainer,
  },
  data () {
    return {
    }
  }
}
</script>

<style>
</style>