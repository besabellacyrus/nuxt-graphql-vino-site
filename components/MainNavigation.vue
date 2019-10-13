<template>
  <div class="app-main-nav container mx-auto mb-6">
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
</template>

<script>
export default {

}
</script>

<style lang="scss">
$app-main-dark: rgb(35, 30, 27);
$app-main-light: rgb(68, 60, 57);
$app-gray: rgb(115, 111, 108);
$app-brown: rgb(175, 141, 114);
$app-main-bg: rgb(228, 237, 236);
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