<template>
  <div>
    <div class="pt-32">
      <HeroImage></HeroImage>
    </div>
    <div class="app-spacer">&nbsp;</div>
    <RightImageSection></RightImageSection>
    <div class="app-spacer">&nbsp;</div>
    <WhatToPairSection></WhatToPairSection>
    <div class="app-spacer">&nbsp;</div>
    <LeftImageSection></LeftImageSection>
    <div class="app-spacer">&nbsp;</div>
    <WhereToPurchase></WhereToPurchase>
    <div class="app-spacer">&nbsp;</div>
    <OurEventsSection></OurEventsSection>
  </div>
</template>

<script>
import HeroImage from "../components/HeroImage"
import RightImageSection from "../components/sections/RightImageSection"
import WhatToPairSection from "../components/sections/WhatToPairSection"
import LeftImageSection from "../components/sections/LeftImageSection"
import WhereToPurchase from "../components/sections/WhereToPurchase"
import OurEventsSection from "../components/sections/OurEventsSection"

export default {
  components: {
    HeroImage,
    RightImageSection,
    WhatToPairSection,
    LeftImageSection,
    WhereToPurchase,
    OurEventsSection
  },
  data () {
    return {}
  },
  head () {
    return {
      title: 'Vino |',
    }
  }
}
</script>

<style lang="scss">
</style>
