<template>
  <footer>
    <div class="flex flex-wrap text-center mx-auto ">
      <div class="w-full mb-6 md:w-1/3">
        <div class="mt-6 w-full">
          <img
            class="h-20 mx-auto"
            src="~/assets/img/logo-footer.svg"
            alt=""
          >
          <h2>LOGO MOTTO HERE</h2>
        </div>
      </div>
      <div class="w-full mt-20 md:mt-10 md:w-1/3">
        <h4 class="mb-6 mt-6 text-center md:text-left reso">RESOURCES</h4>
        <ul class="flex flex-wrap">
          <div class="w-full md:w-1/2">
            <li>
              STORE LOCATOR
            </li>
            <li>
              SHIPPING
            </li>
            <li>
              PRIVACY POLICY
            </li>
          </div>
          <div class="w-full md:w-1/2">
            <li>
              SUSTAINABILITY
            </li>
            <li>
              PARTNERSHIPS
            </li>
          </div>
        </ul>
      </div>
      <div class="w-full mt-10 md:w-1/3">
        <h4 class="mb-6 mt-6 text-center px-5 md:text-left">CONTACT US</h4>
        <p class="px-5 text-center md:text-left">
          3800 Kinney Street, Springfield
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, eaque?
        </p>
        <h4 class="mb-6 mt-6">GET CONNECTED</h4>
      </div>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
h4 {
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 1.2px;
}
li {
  color: $app-gray;
  font-size: 0.9rem;
  padding-bottom: 1rem;
}
footer {
  background-color: $app-main-dark;
}
.reso {
  @media screen and (min-width: 768px) {
    margin-left: 4rem;
  }
}
</style>