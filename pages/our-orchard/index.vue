<template>
  <div>
    <HeroImageDynamic
      class="pt-32"
      :img-url="heroImage"
    ></HeroImageDynamic>
    <LeftImageSectionDynamic
      subtitle="WHERE IT ALL STARTED"
      title="OUR ORCHARD"
      message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolore quibusdam minus? Facere repudiandae error aspernatur natus. Aliquam, tenetur eum cupiditate quae impedit possimus repellendus accusamus incidunt deleniti dignissimos corrupti quasi, perferendis dolorum explicabo a? Ipsam dolor eveniet facilis molestiae cupiditate cum magni id unde?"
    >
      <div class="">
        <img
          class="shadow-md md:absolute left-image-one md:left-0 z-10"
          :src="ourOrchard"
          alt=""
        >
      </div>
    </LeftImageSectionDynamic>
    <div class="app-spacer">&nbsp;</div>
    <RightImageSectionDynamic
      subtitle=""
      title=""
      message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolore quibusdam minus? Facere repudiandae error aspernatur natus. Aliquam, tenetur eum cupiditate quae impedit possimus repellendus accusamus incidunt deleniti dignissimos corrupti quasi, perferendis dolorum explicabo a? Ipsam dolor eveniet facilis molestiae cupiditate cum magni id unde?"
    >
      <div class="flex justify-center md:flex-none md:relative">
        <div class="">
          <img
            class="shadow-md orchard-image z-10 md:absolute md:left-0 md:-mt-10 md:ml-10"
            src="~/assets/img/Untitled-1-min.png"
            alt=""
          >
        </div>
        <div class="">
          <img
            class="shadow-md z-0 orchard-image md:absolute md:right-0 md:mr-10"
            src="~/assets/img/Untitled-2-min.png"
            alt=""
          >
        </div>
      </div>
    </RightImageSectionDynamic>
    <div class="app-spacer">&nbsp;</div>
    <LeftImageSectionDynamic
      subtitle=""
      title=""
      message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolore quibusdam minus? Facere repudiandae error aspernatur natus. Aliquam, tenetur eum cupiditate quae impedit possimus repellendus accusamus incidunt deleniti dignissimos corrupti quasi, perferendis dolorum explicabo a? Ipsam dolor eveniet facilis molestiae cupiditate cum magni id unde?"
    >
      <div class="flex justify-center md:flex-none md:relative">
        <div class="">
          <img
            class="shadow-md orchard-image z-10 md:absolute md:left-0 md:-mt-10 md:mr-10"
            src="~/assets/img/Untitled-3-min.png"
            alt=""
          >
        </div>
        <div class="">
          <img
            class="shadow-md z-0 orchard-image md:absolute md:right-0 md:mr-10"
            src="~/assets/img/Untitled-4-min.png"
            alt=""
          >
        </div>
      </div>
    </LeftImageSectionDynamic>
    <div class="app-spacer">&nbsp;</div>
    <RightImageSectionDynamic
      subtitle=""
      title=""
      message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolore quibusdam minus? Facere repudiandae error aspernatur natus. Aliquam, tenetur eum cupiditate quae impedit possimus repellendus accusamus incidunt deleniti dignissimos corrupti quasi, perferendis dolorum explicabo a? Ipsam dolor eveniet facilis molestiae cupiditate cum magni id unde?"
    >
      <div class="flex justify-center md:flex-none md:relative">
        <div class="">
          <img
            class="shadow-md orchard-image z-10 md:absolute md:left-0 md:-mt-10 md:ml-10"
            src="~/assets/img/Untitled-5-min.png"
            alt=""
          >
        </div>
        <div class="">
          <img
            class="shadow-md z-0 orchard-image md:absolute md:right-0 md:mr-10"
            src="~/assets/img/Untitled-6-min.png"
            alt=""
          >
        </div>
      </div>
    </RightImageSectionDynamic>
    <div class="app-spacer">&nbsp;</div>

  </div>
</template>

<script>
import HeroImageDynamic from "../../components/dynamic/HeroImageDynamic"
import LeftImageSectionDynamic from "../../components/dynamic/LeftImageSectionDynamic"
import RightImageSectionDynamic from "../../components/dynamic/RightImageSectionDynamic";

const heroImage = require('~/assets/img/our-orchard-header-min.png');
const ourOrchard = require('~/assets/img/Our Orchard - Image-min.png');

export default {
  components: {
    HeroImageDynamic,
    LeftImageSectionDynamic,
    RightImageSectionDynamic
  },
  data () {
    return {
      heroImage,
      ourOrchard
    }
  }
}
</script>

<style lang="scss" scoped>
.orchard-image {
  height: 20rem;
}
</style>