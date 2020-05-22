<template>
  <ul>
    <li>
      <a href="https://fb.com/vinoislatropicalwines" target="_blank">
        <img src="~assets/img/fb-icon.svg" alt="">
      </a>
    </li>
    <li>
      <a href="https://www.instagram.com/p/B9dvP3uA1CU/" target="_blank">
        <img src="~assets/img/Instagram.svg" alt="">
      </a>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
  ul {
    /* display: grid; */
    /* grid-template-columns: 1fr 1fr;  */
    padding: 0;
    padding-left: 0 !important;
    @media screen and (max-width: 375px) {
      width: 10rem;
      margin: 0 auto;
    }
    li {
      float: left;
      padding-right: 1rem;
    height: 4rem;

      img {
        height: 100%;
      }
    }
  }
</style>