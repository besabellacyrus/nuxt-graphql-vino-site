<template>
  <div class="main-wrapper">
  <div v-if="vino_pageBy && vino_pageBy.fc">
    <HeroImageDynamic :img-url="vino_pageBy.fc.homeFc[0].image.sourceUrl"></HeroImageDynamic>
    <div
        v-for="(vino, index) in vino_pageBy.fc.homeFc"
        :key="index"
      >
      
      <div v-if="vino.__typename === 'Vino_page_Fc_HomeFc_ContactUs'" class="container mx-auto text-center">
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
            <div v-html="vino.address"> 
            </div>
            <br>
            <br>
            <div>
              <b>Call us at</b> <br> 
              <div v-html="vino.phoneNumber"></div>
            </div>
            <br>
            <br>
            <div>
              <b>Email us at</b><br>
              <div v-html="vino.email"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
      <LoadingComponent />
    </div>
  </div>
</template>

<script>
import HeroImageDynamic from "~/components/dynamic/HeroImageDynamic"
import pageGql from "~/apollo/queries/page"
import LoadingComponent from "~/components/LoadingComponent"

export default {
  components: {
    HeroImageDynamic,
    LoadingComponent
  },
  mounted () {
    console.log({ vino_pageBy: this.vino_pageBy})
  },
  apollo: {
    vino_pageBy: {
      query: pageGql,
      variables () {
        return {
          slug: 'contact'
        }
      }
    }
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