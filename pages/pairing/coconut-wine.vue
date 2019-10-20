<template>
  <div>
    <HeroImageDynamic
      class="pt-32"
      :img-url="require('~/assets/img/pairing/mango/Untitled-1-min.png')"
    ></HeroImageDynamic>
    <RightImageSectionDynamic
      subtitle="ABOUT VINO ISLA"
      title="A NOTE FROM THE FOUNDER"
      message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolore quibusdam minus? Facere repudiandae error aspernatur natus. Aliquam, tenetur eum cupiditate quae impedit possimus repellendus accusamus incidunt deleniti dignissimos corrupti quasi, perferendis dolorum explicabo a? Ipsam dolor eveniet facilis molestiae cupiditate cum magni id unde?"
    >
      <h1>ee</h1>
    </RightImageSectionDynamic>
  </div>
</template>

<script>
import HeroImageDynamic from "../../components/dynamic/HeroImageDynamic"
import RightImageSectionDynamic from "../../components/dynamic/RightImageSectionDynamic"

export default {
  components: {
    HeroImageDynamic,
    RightImageSectionDynamic
  }
}
</script>

<style>
</style>