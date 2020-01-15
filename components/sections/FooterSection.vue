<template>
  <footer>
    <div>
      <img
        class="h-20 mx-auto"
        src="~/assets/img/logo-footer.svg"
        alt=""
      >
      <h2 class="mt-3"><b>HERITAGE LIQOURS</b></h2>
    </div>
    <div class="explores">
      <h1>EXPLORES</h1>
      <ul>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>WINES</li>
        <li>PAIRING</li>
        <li>VISIT</li>
        <li>SHOP</li>
        <li>EVENTS</li>
        <li>STORE LOCATOR</li>
      </ul>
    </div>
    <div class="resources">
      <h1>RESOURCES</h1>
      <ul>
        <li>SHIPPING</li>
        <li>PRIVACY POLICY</li>
        <li>SUSTAINABILITY</li>
        <li>PARTNERSHIPS</li>
      </ul>
    </div>
    <div>
      <h1>CONTACT US</h1>
      <p class="px-5 text-center md:text-left">
        3800 Kinney Street, Springfield
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, eaque?
      </p>
      <h1>GET CONNECTED</h1>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
h1 {
  font-size: 1.7rem;
  font-weight: bold;
  letter-spacing: 1.2px;
  color: rgb(128, 126, 127);
}
li {
  color: $app-gray;
  padding-bottom: 1rem;
  font-size: 1.5rem;
  text-align: left;
  font-weight: bold;
  @media screen and (max-width: 475px) {
    text-align: center;
  }
}
footer {
  background-color: $app-main-dark;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  text-align: center;
  padding: 2rem;
}
.reso {
  @media screen and (min-width: 768px) {
    margin-left: 4rem;
  }
}
.explores {
  padding: 0 12rem;
}
.resources {
  padding: 0 12rem;
}
</style>