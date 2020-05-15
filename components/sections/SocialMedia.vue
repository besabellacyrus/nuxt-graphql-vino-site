<template>
  <ul>
    <li>
      <a href="">
        <img src="~assets/img/fb-icon.svg" alt="">
      </a>
    </li>
    <li>
      <a href="">
        <img src="~assets/img/twitter-icon.svg" alt="">
      </a>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    li {
      height: 4rem;
      img {
        height: 100%;
      }
    }
  }
</style>