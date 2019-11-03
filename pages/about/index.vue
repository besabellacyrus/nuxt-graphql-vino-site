<template>
  <div>
    <HeroImageDynamic
      class="pt-32"
      :img-url="require('~/assets/img/our_story/Our Story-Header-min.png')"
    ></HeroImageDynamic>
    <RightImageSectionDynamic
      subtitle="ABOUT VINO ISLA"
      title="A NOTE FROM THE FOUNDER"
      message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolore quibusdam minus? Facere repudiandae error aspernatur natus. Aliquam, tenetur eum cupiditate quae impedit possimus repellendus accusamus incidunt deleniti dignissimos corrupti quasi, perferendis dolorum explicabo a? Ipsam dolor eveniet facilis molestiae cupiditate cum magni id unde?"
    >
      <img
        class="shadow-md image-right mx-auto"
        src="~/assets/img/about/About Image-min.png"
        alt=""
      >
    </RightImageSectionDynamic>
    <a href="our-story/">
      <TextAndImageSection
        class="mb-10"
        subtitle="WHERE IT ALL STARTED"
        title="OUR ORCHARD"
      >
        <img
          src="~/assets/img/about/Our-Orchard Gradient-min.png"
          alt=""
        >
      </TextAndImageSection>
    </a>
    <a href="our-story/">
      <TextAndImageSection
        class="mb-10"
        subtitle="VINO ISLA"
        title="OUR STORY"
      >
        <img
          src="~/assets/img/about/Our-Story Gradient-min.png"
          alt=""
        >
      </TextAndImageSection>

    </a>
  </div>
</template>

<script>
import HeroImageDynamic from "../../components/dynamic/HeroImageDynamic"
import RightImageSectionDynamic from "../../components/dynamic/RightImageSectionDynamic"
import LeftImageSectionDynamic from "../../components/dynamic/LeftImageSectionDynamic"
import TextAndImageSection from "../../components/dynamic/TextAndImageSection"

export default {
  components: {
    HeroImageDynamic,
    RightImageSectionDynamic,
    LeftImageSectionDynamic,
    TextAndImageSection
  },
  data () {
    return {
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