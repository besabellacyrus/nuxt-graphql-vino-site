<template>
  <div>
    <HeroImageDynamic
      class="pt-32"
      :img-url="heroImage"
    ></HeroImageDynamic>
    <EventBlogContainer></EventBlogContainer>
  </div>
</template>

<script>
const heroImage = require('~/assets/img/events/events-header-min.png')

import CenterSectionDynamic from "../../components/dynamic/CenterSectionDynamic"
import HeroImageDynamic from "../../components/dynamic/HeroImageDynamic"
import EventBlogContainer from "../../components/sections/EventBlogContainer"

export default {
  components: {
    HeroImageDynamic,
    CenterSectionDynamic,
    EventBlogContainer,
  },
  data () {
    return {
      heroImage
    }
  }
}
</script>

<style>
</style>