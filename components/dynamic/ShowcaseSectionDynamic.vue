<template>
  <div class="center-content-wrapper wow fadeIn">
    <div class="subtitle">JOIN US?</div>
    <div class="title">OUR EVENTS</div>
    <p class="bar-top-line-center"></p>
    <div class="events-list-wrapper">
      <div class="event-item-card">
        <div>
          <img
            src="~assets/img/Event 2-min.png"
            alt=""
            v-lazy-load
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
            v-lazy-load
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
            v-lazy-load
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
            v-lazy-load
          >
        </div>
        <div>
          <h1>EVENT NAME</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, iste?</p>
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
.event-content {
  text-align: left;
  height: 8rem;
  h1 {
    font-size: 1rem;
    font-weight: bold;
  }
}
.event-image {
  height: 8rem;
}
</style>