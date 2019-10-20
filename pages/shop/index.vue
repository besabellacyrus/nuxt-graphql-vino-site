<template>
  <div>
    <HeroImageDynamic
      class="pt-32"
      :img-url="require('~/assets/img/shop/Shop---Header-min.png')"
    ></HeroImageDynamic>
    <CenterSectionDynamic
      class="mb-10"
      subtitle="SHOP"
      title="VINO ISLA WINES"
    >
      <p class="my-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, soluta asperiores delectus sunt inventore rerum assumenda repellat dolor provident expedita magnam, dolorem odit?</p>
    </CenterSectionDynamic>
    <div class="container mx-auto text-center">
      <div class="flex flex-wrap -mx-4">
        <div class="w-full md:w-1/3 px-4 mb-6">
          <div class="item">
            <img
              src="~/assets/img/shop/Item-1-min.png"
              alt=""
            >
            <h3 class="mt-6 font-semibold">TROPICAL</h3>
            <h1>COCONUT WINE</h1>
          </div>
        </div>
        <div class="w-full md:w-1/3 px-4 mb-6">
          <div class="item">
            <img
              src="~/assets/img/shop/Item-2-min.png"
              alt=""
            >
            <h3 class="mt-6 font-semibold">TROPICAL</h3>
            <h1>MANGO WINE</h1>
          </div>
        </div>
        <div class="w-full md:w-1/3 px-4 mb-6">
          <div class="item">
            <img
              src="~/assets/img/shop/Item-3-min.png"
              alt=""
            >
            <h3 class="mt-6 font-semibold">TROPICAL</h3>
            <h1>SUGARCANE WINE</h1>
          </div>
        </div>
        <div class="w-full md:w-1/3 px-4 mb-6">
          <div class="item">
            <img
              src="~/assets/img/shop/Item-4-min.png"
              alt=""
            >
            <h3 class="mt-6 font-semibold">TROPICAL</h3>
            <h1>COLLECTION #1</h1>
          </div>
        </div>
        <div class="w-full md:w-1/3 px-4 mb-6">
          <div class="item">
            <img
              src="~/assets/img/shop/Item-5-min.png"
              alt=""
            >
            <h3 class="mt-6 font-semibold">TROPICAL</h3>
            <h1>COLLECTION #2</h1>
          </div>
        </div>
        <div class="w-full md:w-1/3 px-4 mb-6">
          <div class="item">
            <img
              src="~/assets/img/shop/Item-6-min.png"
              alt=""
            >
            <h3 class="mt-6 font-semibold">TROPICAL</h3>
            <h1>COLLECTION #3</h1>
          </div>
        </div>
      </div>
    </div>
    <TextAndImageSection
      class="mb-10"
      subtitle="PREFER TO VISIT A STORE?"
      title="STORE LOCATOR"
    >
      <img
        src="~/assets/img/shop/Store-Locator---image-min.png"
        alt=""
      >
    </TextAndImageSection>
  </div>
</template>

<script>
import HeroImageDynamic from "../../components/dynamic/HeroImageDynamic"
import CenterSectionDynamic from "../../components/dynamic/CenterSectionDynamic"
import TextAndImageSection from "../../components/dynamic/TextAndImageSection"

export default {
  components: {
    HeroImageDynamic,
    CenterSectionDynamic,
    TextAndImageSection
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
</style>