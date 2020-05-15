<template>
  <div class="showcase-wrapper">
    <div class="wow fadeInDown text-center">
      <div class="subtitle">{{ subtitle }}</div>
      <div class="title">{{ title }}</div>
    </div>
    <p class="bar-top-line-center wow fadeInUp">
    </p>
    <div class="events-wrapper container mx-auto">
      <div class="event-item">
        <img
          src="~assets/img/Event 2-min.png"
          alt=""
        >
        <div>
          <h1>EVENT NAME</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti aut porro autem, quibusdam voluptas repudiandae labore nisi iusto, exercitationem molestias vero sed perspiciatis.</p>
          <div class="app-buttons">
            <a href="">
              <button>LEARN MORE</button>
            </a>
          </div>
        </div>
      </div>
      <div class="event-item">
        <img
          src="~assets/img/Event 2-min.png"
          alt=""
        >
        <div>
          <h1>EVENT NAME</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti aut porro autem, quibusdam voluptas repudiandae labore nisi iusto, exercitationem molestias vero sed perspiciatis.</p>
          <div class="app-buttons">
            <a href="">
              <button>LEARN MORE</button>
            </a>
          </div>
        </div>
      </div>
      <div class="event-item">
        <img
          src="~assets/img/Event 2-min.png"
          alt=""
        >
        <div>
          <h1>EVENT NAME</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti aut porro autem, quibusdam voluptas repudiandae labore nisi iusto, exercitationem molestias vero sed perspiciatis.</p>
          <div class="app-buttons">
            <a href="">
              <button>LEARN MORE</button>
            </a>
          </div>
        </div>
      </div>
      <div class="event-item">
        <img
          src="~assets/img/Event 2-min.png"
          alt=""
        >
        <div>
          <h1>EVENT NAME</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti aut porro autem, quibusdam voluptas repudiandae labore nisi iusto, exercitationem molestias vero sed perspiciatis.</p>
          <div class="app-buttons">
            <a href="">
              <button>LEARN MORE</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageButtons: { default: null },
    subtitle: String,
    title: String,
    content: String,
    buttons: Array,
    items: Array
  }

}
</script>

<style lang="scss" scoped>
.events-wrapper {
  display: grid;
  margin-top: 10rem;
  grid-template-columns: repeat(2, minmax(30rem, 1fr));
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  }
  grid-gap: 3rem;
  .event-item {
    display: grid;
    grid-template-columns: auto 1fr;
    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
    }
    grid-gap: 2rem;
    margin-bottom: 6rem;
    border-bottom: 1px solid $app-brown;
    padding-bottom: 2rem;
    p {
      margin-bottom: 3rem;
    }
    .app-buttons {
      @media screen and (min-width: 769px) {
        float: right;
      }
      @media screen and (max-width: 768px) {
        margin: 0 auto;
        float: initial;
      }
      button {
        background-color: $app-brown;
        color: #fff;
      }
    }
    h1 {
      margin: 0;
      font-size: 2rem;
      font-weight: bold;
    }
    img {
      height: 18rem;
      width: 18rem;
    }
    @media screen and (max-width: 786px) {
      text-align: center;
      img {
        margin: 0 auto;
      }
    }
  }
}
</style>