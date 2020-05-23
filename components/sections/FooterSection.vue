<template>
  <footer>
    <div class="footer-wrapper">
      <div>
        <img
          class="h-20 mx-auto"
          src="~/assets/img/logo-footer.svg"
          alt=""
        >
        <h2 class="mt-3"><b>HERITAGE LIQUORS</b></h2>
      </div>
      <div class="explores">
        <h1>EXPLORE</h1>
        <ul>
          <li>
            <a href="/">
              HOME
            </a>
          </li>
          <li>
            <a href="/about">
              OUR STORY
            </a>
          </li>
          <li>
            <a href="/wines">
              WINES
            </a>
          </li>
          <li>
            <a href="/pairing">
              PAIRING
            </a>
          </li>
          <li>
            <a href="/visit">
              VISIT
            </a>
          </li>
          <li>
            <a href="/shop">
              SHOP
            </a>
          </li>
          <li>
            <a href="our-orchard">
              OUR ORCHARD
            </a>
          </li>
          <li>
            <a href="/store-locator">
              STORE LOCATOR
            </a>
          </li>
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
      <div class="contact">
        <h1>CONTACT US</h1>
        <p class="px-5 text-center md:text-left">
          U2518 Corporate Ave. Corner Parkway Place, Filinvest City , Alabang, Muntinlupa, Metro Manila
        </p>
        <div class="get-connected">
          <h1>GET CONNECTED</h1>
          <SocialMedia />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import SocialMedia from '../sections/SocialMedia';
export default {
  components: {
    SocialMedia
  }
}
</script>

<style lang="scss" scoped>
footer {
  /* margin-top: 10rem; */
  z-index: 3;
  position: relative;
  p {
    font-family: "Montserrat", sans-serif;
    font-size: 1.4rem;
  }
}
h1 {
  font-size: 1.7rem;
  font-weight: bold;
  letter-spacing: 1.2px;
  color: rgb(128, 126, 127);
  text-align: left;
  @media screen and (max-width: 375px) {
    text-align: center;
  }
}
ul {
  padding-left: 2rem;
  @media screen and (max-width: 768px) {
    padding-left: 0;
  }
}
li {
  color: #6b6764;
  padding-bottom: 1rem;
  font-size: 1.5rem;
  text-align: left;
  font-weight: bold;
  font-weight: 600;
  @media screen and (max-width: 475px) {
    text-align: center;
  }
}
footer {
  background-color: $app-main-dark;
  padding: 2rem;
}
.footer-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  text-align: center;
  max-width: 1440px;
  margin: 0 auto;
  /* padding: 2rem; */
  @media screen and (max-width: 425px) {
    h1 {
      text-align: center;
    }
  }
}
.explores {
  @media screen and (max-width: 425px) {
    margin-top: 4rem;
  }
}
.resources {
  @media screen and (max-width: 425px) {
    margin-top: 4rem;
  }
}
.contact {
  @media screen and (max-width: 425px) {
    margin-top: 4rem;
  }
}
.get-connected {
  @media screen and (max-width: 425px) {
    margin-top: 4rem;
    ul {
      display: flex;
      padding: 0;
      padding-left: 0 !important;
      justify-content: center;
    }
  }
}
</style>