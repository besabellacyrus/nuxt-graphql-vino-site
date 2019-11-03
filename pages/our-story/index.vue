<template>
  <div>
    <HeroImageDynamic
      class="pt-32"
      :img-url="require('~/assets/img/our_story/Our Story-Header-min.png')"
    ></HeroImageDynamic>
    <RightImageSectionDynamic
      subtitle="VINO ISLA"
      title="OUR STORY"
      message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolore quibusdam minus? Facere repudiandae error aspernatur natus. Aliquam, tenetur eum cupiditate quae impedit possimus repellendus accusamus incidunt deleniti dignissimos corrupti quasi, perferendis dolorum explicabo a? Ipsam dolor eveniet facilis molestiae cupiditate cum magni id unde?"
    >
      <img
        class="shadow-md image-right mx-auto"
        src="~/assets/img/our_story/Untitled-1-min.png"
        alt=""
      >
    </RightImageSectionDynamic>
    <div class="app-spacer">&nbsp;</div>
    <LeftImageSectionDynamic
      subtitle="WHO WE ARE"
      title="OUR TEAM"
      message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolore quibusdam minus? Facere repudiandae error aspernatur natus. Aliquam, tenetur eum cupiditate quae impedit possimus repellendus accusamus incidunt deleniti dignissimos corrupti quasi, perferendis dolorum explicabo a? Ipsam dolor eveniet facilis molestiae cupiditate cum magni id unde?"
    >
      <div class="">
        <img
          class="shadow-md md:absolute left-image-one md:left-0 z-10"
          :src="ourHistoryOne"
          alt=""
        >
      </div>
      <div class="">
        <img
          class="shadow-md right-image-one z-0"
          :src="ourHistoryTwo"
          alt=""
        >
      </div>
    </LeftImageSectionDynamic>
    <div class="app-spacer">&nbsp;</div>
    <CenterSectionDynamic
      class="mb-10"
      subtitle="WHERE IT ALL STARTED"
      title="OUR ORCHARD"
    >
      <img
        :src="ourOrchard"
        alt=""
      >
    </CenterSectionDynamic>
  </div>
</template>

<script>
const ourHistoryOne = require('~/assets/img/our_story/Untitled-2-min.png')
const ourHistoryTwo = require('~/assets/img/our_story/Untitled-3-min.png')
const ourOrchard = require('~/assets/img/our_story/our-orchard.png')

import HeroImageDynamic from "../../components/dynamic/HeroImageDynamic"
import RightImageSectionDynamic from "../../components/dynamic/RightImageSectionDynamic"
import LeftImageSectionDynamic from "../../components/dynamic/LeftImageSectionDynamic"
import CenterSectionDynamic from "../../components/dynamic/CenterSectionDynamic"

export default {
  components: {
    HeroImageDynamic,
    RightImageSectionDynamic,
    LeftImageSectionDynamic,
    CenterSectionDynamic
  },
  data () {
    return {
      ourHistoryOne,
      ourHistoryTwo,
      ourOrchard
    }
  }
}
</script>

<style lang="scss" scoped>
.image-right {
  height: 18rem;
  @media screen and (max-width: 768px) {
    height: 10rem;
  }
}
</style>