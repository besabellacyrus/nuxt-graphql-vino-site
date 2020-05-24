<template>
  <div>
    <footer>
      <div class="footer-wrapper">
        <div>
          <img class="h-20 mx-auto" src="~/assets/img/logo-footer.svg" alt />
          <h2 class="mt-3">
            <b>HERITAGE LIQUORS</b>
          </h2>
        </div>
        <div class="explores">
          <h1>EXPLORE</h1>
          <ul>
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/about">OUR STORY</a>
            </li>
            <li>
              <a href="/wines">WINES</a>
            </li>
            <li>
              <a href="/pairing">PAIRING</a>
            </li>
            <li>
              <a href="/visit">VISIT</a>
            </li>
            <li>
              <a href="/shop">SHOP</a>
            </li>
            <li>
              <a href="our-orchard">OUR ORCHARD</a>
            </li>
            <li>
              <a href="/store-locator">STORE LOCATOR</a>
            </li>
          </ul>
        </div>
        <div class="resources">
          <h1>RESOURCES</h1>
          <ul v-if="resource_pages && resource_pages.nodes">
            <li
              v-for="resource in resource_pages.nodes"
              :key="resource.title"
              @click="popUp(resource)"
            >{{ resource.title }}</li>
            <!-- <li>SUSTAINABILITY</li> -->
          </ul>
        </div>
        <div class="contact">
          <h1>CONTACT US</h1>
          <p
            class="px-5 text-center md:text-left"
          >U2518 Corporate Ave. Corner Parkway Place, Filinvest City , Alabang, Muntinlupa, Metro Manila</p>
          <div class="get-connected">
            <h1>GET CONNECTED</h1>
            <SocialMedia />
          </div>
        </div>
      </div>
    </footer>
    <div id="myModal" class="modal">
      <div class="modal-content" v-if="modal_content">
        <span class="close" @click="closeModal()">&times;</span>
        <h1>{{ modal_content.title }}</h1>
        <div v-html="modal_content.resource.content"></div>
      </div>
    </div>
  </div>
</template>

<script>
import SocialMedia from "../sections/SocialMedia";
import resourcesGql from "~/apollo/queries/resources";

export default {
  data() {
    return {
      modal_content: null
    };
  },
  components: {
    SocialMedia
  },
  created() {
    console.log({ resources: this.resource_pages });
  },
  mounted() {
    const modal = document.getElementById("myModal");
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  },
  apollo: {
    resource_pages: {
      query: resourcesGql
    }
  },
  methods: {
    popUp({ resource, title }) {
      const modal = document.getElementById("myModal");
      this.modal_content = { resource, title };
      console.log({ resource, title, modal });
      modal.style.display = "block";
    },
    closeModal() {
      const modal = document.getElementById("myModal");
      modal.style.display = "none";
    }
  }
};
</script>

<style lang="scss">
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  z-index: 999999;
}

#myModal {
  h2 {
    font-size: 2rem !important;
    font-weight: bold !important;
    padding: 1rem 0;
  }
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
  outline: 8px solid rgba(175, 141, 113, 0.7);
}

/* The Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.resources {
  ul {
    li {
      cursor: pointer;
    }
  }
}

footer {
  /* margin-top: 10rem; */
  z-index: 3;
  position: relative;
  background-color: $app-main-dark;
  padding: 2rem;
  p {
    font-family: "Montserrat", sans-serif;
    font-size: 1.4rem;
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
}
</style>