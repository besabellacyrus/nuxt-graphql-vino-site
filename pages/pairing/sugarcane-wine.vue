<template>
  <div class="dynamic-bg-color">
    <HeroImageDynamic
      class="pt-32"
      :img-url="require('~/assets/img/pairing/sugar-cane/Sugarcane-Wine---Header-min.png')"
    ></HeroImageDynamic>
    <RightImageSectionDynamic
      subtitle="WHAT TO PAIR?"
      title="SUGARCANE WINE"
      message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolore quibusdam minus? Facere repudiandae error aspernatur natus. Aliquam, tenetur eum cupiditate quae impedit possimus repellendus accusamus incidunt deleniti dignissimos corrupti quasi, perferendis dolorum explicabo a? Ipsam dolor eveniet facilis molestiae cupiditate cum magni id unde?"
    >
      <img
        class="shadow-md right-img mx-auto"
        src="~/assets/img/pairing/sugar-cane/Sugarcane---Image-min.png"
        alt=""
      >
    </RightImageSectionDynamic>
    <div class="app-spacer">&nbsp;</div>
    <LeftImageSectionDynamic
      subtitle="WHAT TO PAIR?"
      title="PAIRING SUGGESTIONS"
      message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolore quibusdam minus? Facere repudiandae error aspernatur natus. Aliquam, tenetur eum cupiditate quae impedit possimus repellendus accusamus incidunt deleniti dignissimos corrupti quasi, perferendis dolorum explicabo a? Ipsam dolor eveniet facilis molestiae cupiditate cum magni id unde?"
    >
      <div class="">
        <img
          class="shadow-md md:absolute left-image-one md:left-0 z-10"
          src="~/assets/img/pairing/sugar-cane/Image---1-min.png"
          alt=""
        >
      </div>
      <div class="">
        <img
          class="shadow-md right-image-one z-0"
          src="~/assets/img/pairing/sugar-cane/Image-2-min.png"
          alt=""
        >
      </div>
    </LeftImageSectionDynamic>
    <div class="app-spacer">&nbsp;</div>
    <div class="container mx-auto">
      <div class="mb-6 text-center">
        <h3 class="text-2xl font-semibold">CHECK OUT PAIRINGS FOR OTHER FLAVORS</h3>
      </div>
      <div class="flex flex-wrap text-center lg:text-left pb-10">
        <div class="w-full md:w-1/2">
          <div class="md:mx-20">
            <div class="lg:float-left">
              <img
                class="mx-auto other-pair-thumb lg:mr-6"
                src="~/assets/img/pairing/mango/Image-5-min.png"
                alt=""
              >
            </div>
            <div class="mx-10 my-2">
              <h3 class="text-xl font-semibold">TROPICAL</h3>
              <h1>MANGO WINE</h1>
            </div>
          </div>
        </div>
        <div class="w-full mb-6 md:w-1/2">
          <div class="md:mx-20">
            <div class="lg:float-left">
              <img
                class="mx-auto other-pair-thumb lg:mr-6"
                src="~/assets/img/pairing/mango/Image-5-min.png"
                alt=""
              >
            </div>
            <div class="mx-10 my-2">
              <h3 class="text-xl font-semibold">TROPICAL</h3>
              <h1>SUGARCANE WINE</h1>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import HeroImageDynamic from "../../components/dynamic/HeroImageDynamic"
import RightImageSectionDynamic from "../../components/dynamic/RightImageSectionDynamic"
import LeftImageSectionDynamic from "../../components/dynamic/LeftImageSectionDynamic"

export default {
  components: {
    HeroImageDynamic,
    RightImageSectionDynamic,
    LeftImageSectionDynamic
  }
}
</script>

<style lang="scss" scoped>
.right-img {
  height: 15rem;
}
.left-image-one {
  height: 15rem;
}
.right-image-one {
  height: 15rem;
}
.other-pair-thumb {
  height: 10rem;
}
.dynamic-bg-color {
  background: rgba(242, 231, 225, 1);
  background: -moz-linear-gradient(
    top,
    rgba(242, 231, 225, 1) 0%,
    rgba(243, 187, 162, 1) 100%
  );
  background: -webkit-gradient(
    left top,
    left bottom,
    color-stop(0%, rgba(242, 231, 225, 1)),
    color-stop(100%, rgba(243, 187, 162, 1))
  );
  background: -webkit-linear-gradient(
    top,
    rgba(242, 231, 225, 1) 0%,
    rgba(243, 187, 162, 1) 100%
  );
  background: -o-linear-gradient(
    top,
    rgba(242, 231, 225, 1) 0%,
    rgba(243, 187, 162, 1) 100%
  );
  background: -ms-linear-gradient(
    top,
    rgba(242, 231, 225, 1) 0%,
    rgba(243, 187, 162, 1) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(242, 231, 225, 1) 0%,
    rgba(243, 187, 162, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f2e7e1', endColorstr='#f3bba2', GradientType=0 );
}
</style>