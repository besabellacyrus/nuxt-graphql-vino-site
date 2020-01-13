<template>
  <div class="container mx-auto">
    <div class="app-wrapper-image-right">
      <div class="content">
        <h3 class="subtitle">ABOUT</h3>
        <h1 class="title">VINO ISLA</h1>
        <p class="app-top-line">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nisi reiciendis accusantium illo ab,
          dolore iste incidunt. Ullam minus eum sint iure, ut aut voluptatem, deleniti totam nesciunt reiciendis
          facere ipsa accusantium molestias sunt quas cupiditate tempora voluptatum repudiandae, harum architecto vel.
          Quasi mollitia nesciunt cumque cum. Nisi, autem ab? Facere vitae quod necessitatibus rerum commodi.</p>
        <div class="app-button-wrapper">
          <button>OUR STORY</button>
          <button>ORCHARD</button>
        </div>
      </div>
      <div class="images-wrapper">
        <img
          src="~assets/img/about-2.png"
          alt=""
        >
        <img
          src="~assets/img/about-one.png"
          alt=""
        >
      </div>
    </div>
    <div class="app-spacer">&nbsp;</div>
    <div class="app-wrapper-image-left">
      <div class="images-wrapper">
        <img
          src="~assets/img/about-2.png"
          alt=""
        >
        <img
          src="~assets/img/about-one.png"
          alt=""
        >
      </div>
      <div class="content">
        <h3 class="subtitle">ABOUT</h3>
        <h1 class="title">VINO ISLA</h1>
        <p class="app-top-line-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nisi reiciendis accusantium illo ab,
          dolore iste incidunt. Ullam minus eum sint iure, ut aut voluptatem, deleniti totam nesciunt reiciendis
          facere ipsa accusantium molestias sunt quas cupiditate tempora voluptatum repudiandae, harum architecto vel.
          Quasi mollitia nesciunt cumque cum. Nisi, autem ab? Facere vitae quod necessitatibus rerum commodi.</p>
        <div class="app-button-wrapper">
          <button>OUR STORY</button>
          <button>ORCHARD</button>
        </div>
      </div>
    </div>
    <div class="app-spacer">&nbsp;</div>
    <div class="center-content-wrapper">
      <div class="subtitle">WHAT TO PAIR?</div>
      <div class="title">FOOD & VINO ISLA</div>
      <p class="app-top-line-center">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi officiis aliquam, esse saepe, atque itaque libero dolorum minima a, quod quam temporibus accusantium possimus? Necessitatibus nobis ab veniam quos reprehenderit expedita repellendus numquam soluta.
      </p>
      <div class="app-button-wrapper">
        <button>EXPLORE</button>
      </div>
      <div class="center-images">
        <div class="image-btn">
          <img
            src="~assets/img/Pairings 1-min.png"
            alt=""
          >
        </div>
        <div class="image-btn">
          <img
            src="~assets/img/Pairings 2-min.png"
            alt=""
          >
        </div>
        <div class="image-btn">
          <img
            src="~assets/img/Pairings 3-min.png"
            alt=""
          >
        </div>
      </div>
    </div>
    <div class="app-spacer">&nbsp;</div>
    <div class="center-content-wrapper">
      <div class="subtitle">JOIN US?</div>
      <div class="title">OUR EVENTS</div>
      <b class="app-top-line-center"></b>
      <div class="events-list-wrapper">
        <div class="event-item-card">
          <div>
            <img
              src="~assets/img/Event 2-min.png"
              alt=""
            >
          </div>
          <div>
            <h1>EVENT NAME</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, iste?</p>
          </div>
        </div>
        <div class="event-item-card">
          <div>
            <img
              src="~assets/img/Event 2-min.png"
              alt=""
            >
          </div>
          <div>
            <h1>EVENT NAME</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, iste?</p>
          </div>
        </div>
        <div class="event-item-card">
          <div>
            <img
              src="~assets/img/Event 2-min.png"
              alt=""
            >
          </div>
          <div>
            <h1>EVENT NAME</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, iste?</p>
          </div>
        </div>
        <div class="event-item-card">
          <div>
            <img
              src="~assets/img/Event 2-min.png"
              alt=""
            >
          </div>
          <div>
            <h1>EVENT NAME</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, iste?</p>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.app-wrapper-image-right,
.app-wrapper-image-left {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(37rem, 1fr));
  grid-gap: 2.5rem;
  margin: 0 2rem;
  .content {
    display: grid;
    grid-template-rows: auto;
  }

  @media screen and (width: 375px) {
    // grid-template-columns: 0fr;
    grid-template-rows: 1fr 1fr;
  }

  @media screen and (max-width: 375px) {
    grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));
  }
  .images-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media screen and (width: 375px) {
      grid-template-columns: auto;
    }
    @media screen and (min-width: 769px) {
      img:nth-child(1) {
        position: relative;
        top: 13rem;
        right: -8rem;
      }
      img:nth-child(2) {
        position: relative;
      }
    }
    @media screen and (max-width: 768px) {
      padding-top: 4rem;
      max-width: 80%;
      margin: 0 auto;
      img {
        // height: 100%;
        margin-bottom: 0.5rem;
      }
    }
  }
}

// Buttons
.app-button-wrapper {
  width: 22rem;
  margin: 3rem auto;
  button {
    font-size: 1.4rem;
    font-weight: bold;
    padding: 1rem;
    border: 0.2rem solid $app-brown;
    border-bottom-left-radius: 1rem;
    border-top-right-radius: 1rem;
  }
}
.app-wrapper-image-left {
  text-align: right;
}
.center-content-wrapper {
  display: grid;
  text-align: center;
  @media screen and (min-width: 1024px) {
    & > p {
      margin: 0 23rem;
    }
  }
}

// 3 images
.center-images {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
  grid-gap: 2rem;
  @media screen and (min-width: 1024px) {
    grid-gap: 0rem;
    max-width: 76rem;
    margin: 0 auto;
  }
  .image-btn {
    img {
      height: 22rem;
      margin: 0 auto;
    }
  }
}
.events-list-wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  margin-top: 3rem;
  .event-item-card {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 2rem;
    text-align: left;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
    h1 {
      font-size: 1.7rem;
    }
  }
}
</style>