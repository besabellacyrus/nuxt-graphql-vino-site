<template>
  <div class="main-wrapper">
    <HeroImageDynamic img-url="/img/events-header-min.png"></HeroImageDynamic>
    <div class="container mx-auto text-center">
      <div class="wow fadeInDown">
        <div class="subtitle"> WANNA TALK TO US? </div>
        <div class="title">CONTACT US</div>
      </div>
      <div class="contact-us-wrapper">
        <div class="contact-us-forms">
          <div class="subtitle"> WE'D LOVE TO HEAR FROM YOU! </div>
          <p>Feel free to send us your questions, comments, or suggestions.</p>
          <form class="mt-10">
            <div class="contact-forms">
              <div class="name">
                <label for="">NAME</label><br>
                <input type="text">
              </div>
              <div class="email">
                <label for="">EMAIL</label><br>
                <input type="text">
              </div>
              <div class="subject">
                <label for="">SUBJECT</label><br>
                <input type="text">
              </div>
              <div class="message">
                <label for="">MESSAGE</label><br>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
                <div class="app-buttons contact-submit-btn">
                  <button>SUBMIT</button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div>
          <p>
            U2518 Corporate Ave. Corner Parkway Place, Filinvest City,
            Alabng, Muntipula, Metro Manila
          </p>
          <br>
          <br>
          <p>
            <b>Call Us at</b> Tel. No. (02) 556 9788
          </p>
          <br>
          <br>
          <p>
            <b>Email Us at</b><br>
            vinoislawines@gmail.com
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeroImageDynamic from "~/components/dynamic/HeroImageDynamic"
export default {
  components: {
    HeroImageDynamic
  },
  head () {
    return {
      title: `Vino 🍷 Contact`,
    }
  }
}
</script>

<style lang="scss" scoped>
.contact-submit-btn {
  color: #fff;
  float: right;
  padding-top: 1rem;
  button {
    background-color: $app-brown;
  }
}
.contact-us-wrapper {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 4rem;
  text-align: initial;
  margin-top: 5rem;
  min-height: 50rem;
  padding-left: 3rem;
  padding-right: 3rem;
  @media screen and (max-width: 615px) {
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  }
  @media screen and (max-width: 425px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  input,
  textarea {
    width: 100%;
    padding: 1rem;
  }
  input {
    height: 3rem;
  }

  .contact-forms {
    display: grid;
    grid-template-rows: auto;
    grid-template-areas:
      "a b"
      "c c"
      "d d";
    grid-gap: 1rem;
    label {
      font-weight: bold;
    }
  }
  .name {
    grid-area: a;
  }
  .email {
    grid-area: b;
  }
  .subject {
    grid-area: c;
  }
  .message {
    grid-area: d;
  }
}
</style>