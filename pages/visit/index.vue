<template>
  <div>
    <HeroImageDynamic
      class="pt-32"
      :img-url="require('~/assets/img/visit/visit-header-min.png')"
    ></HeroImageDynamic>
    <RightImageSectionDynamic
      subtitle="CARE FOR A VISIT?"
      title="TASTE OUR WINES"
      message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolore quibusdam minus? Facere repudiandae error aspernatur natus. Aliquam, tenetur eum cupiditate quae impedit possimus repellendus accusamus incidunt deleniti dignissimos corrupti quasi, perferendis dolorum explicabo a? Ipsam dolor eveniet facilis molestiae cupiditate cum magni id unde?
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et est blanditiis consequatur asperiores magni voluptatem a vero cupiditate fugiat tempora tenetur sequi omnis ipsa eligendi nostrum error officia aspernatur optio dolor, adipisci doloribus magnam?
      "
    >
      <h1>Hello</h1>

    </RightImageSectionDynamic>
    <ReservationComponent></ReservationComponent>
  </div>

</template>

<script>
import HeroImageDynamic from "../../components/dynamic/HeroImageDynamic"
import RightImageSectionDynamic from "../../components/dynamic/RightImageSectionDynamic"
import ReservationComponent from "../../components/sections/ReservationComponent"

export default {
  components: {
    HeroImageDynamic,
    RightImageSectionDynamic,
    ReservationComponent
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