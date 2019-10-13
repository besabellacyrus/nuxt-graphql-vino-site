<template>
  <div>
    <AppLogo></AppLogo>
    <MainNavigation></MainNavigation>
    <HeroImage></HeroImage>
    <RightImageSection></RightImageSection>
  </div>
</template>

<script>
import MainNavigation from "../components/MainNavigation"
import AppLogo from "../components/AppLogo"
import HeroImage from "../components/HeroImage"
import RightImageSection from "../components/sections/RightImageSection"
export default {
  components: {
    AppLogo,
    MainNavigation,
    HeroImage,
    RightImageSection
  }
}
</script>

<style lang="scss">

</style>
