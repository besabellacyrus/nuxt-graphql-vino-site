<template>
<nav class="fixed w-full z-30 top-0 text-white">
  <AppLogo></AppLogo>
  <div class="app-main-nav container mx-auto mb-6 invisible sm:visible">
    <ul class="flex justify-center font-semibold tracking-wide">
      <li class="mr-6">
        <a href="/">HOME</a>
      </li>
      <li class="mr-6">
        <a href="/about">ABOUT</a>
      </li>
      <li class="mr-6">
        <a href="/pairing">PAIRING</a>
      </li>
      <li class="mr-6">
        <a href="/visit">VISIT</a>
      </li>
      <li class="mr-6">
        <a href="/shop">SHOP</a>
      </li>
      <li class="mr-6">
        <a href="/events">EVENTS</a>
      </li>
      <li class="mr-6">
        <a href="/contact">CONTACT</a>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
import AppLogo from "../components/AppLogo"

export default {
  components: {
    AppLogo
  }

}
</script>

<style lang="scss">
.app-main-nav {
  font-size: 13px;
  a {
    color: $app-main-dark;
    &:hover {
      color: $app-main-light;
    }
  }
}

</style>