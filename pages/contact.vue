<template>
  <div class="main-wrapper">
    <div class="bg-pattern-one"></div>
    <div class="bg-pattern-two"></div>
    <div class="bg-pattern-three"></div>
    <div class="content-wrapper" v-if="vino_pageBy && vino_pageBy.fc">
      <div v-for="(vino, index) in vino_pageBy.fc.homeFc" :key="index">
        <HeroImageDynamic
          v-if="vino.__typename === 'Vino_page_Fc_HomeFc_HeroImage'"
          :img-url="vino.image.sourceUrl"
        ></HeroImageDynamic>
        <div
          v-if="vino.__typename === 'Vino_page_Fc_HomeFc_ContactUs'"
          class="container mx-auto text-center"
        >
          <div class="wow fadeInDown">
            <div class="subtitle">WANNA TALK TO US?</div>
            <div class="title">CONTACT US</div>
          </div>
          <div class="contact-us-wrapper">
            <div class="contact-us-forms">
              <div class="subtitle">WE'D LOVE TO HEAR FROM YOU!</div>
              <p>Feel free to send us your questions, comments, or suggestions.</p>
              <form class="mt-10" @submit="checkForm">
                <div class="contact-forms">
                  <div class="name">
                    <label for>NAME</label>
                    <br />
                    <input v-model="name" type="text" required />
                  </div>
                  <div class="email">
                    <label for>EMAIL</label>
                    <br />
                    <input v-model="email" type="text" required />
                  </div>
                  <div class="subject">
                    <label for>SUBJECT</label>
                    <br />
                    <input v-model="subject" type="text" />
                  </div>
                  <div class="message">
                    <label for>MESSAGE</label>
                    <br />
                    <textarea v-model="message" cols="30" rows="10"></textarea>
                    <div class="app-buttons contact-submit-btn">
                      <!-- <vue-recaptcha
                        sitekey="6LcN4fwUAAAAAICH00LD3A1nx3Rxqcl9lqq4U7XQ"
                      >
                      </vue-recaptcha>-->
                      <button>SUBMIT</button>
                    </div>
                  </div>
                </div>
              </form>
              <div v-html="errors" v-if="errors.length > 0"></div>
              <div v-html="mailInfo" v-if="mailInfo"></div>
            </div>
            <div>
              <div v-html="vino.address"></div>
              <br />
              <br />
              <div>
                <b>Call us at</b>
                <br />
                <div v-html="vino.phoneNumber"></div>
              </div>
              <br />
              <br />
              <div>
                <b>Email us at</b>
                <br />
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
import HeroImageDynamic from "~/components/dynamic/HeroImageDynamic";
import pageGql from "~/apollo/queries/page";
import LoadingComponent from "~/components/LoadingComponent";

export default {
  components: {
    HeroImageDynamic,
    LoadingComponent
  },
  data() {
    return {
      errors: [],
      name: null,
      email: null,
      subject: null,
      message: null,
      mailInfo: null
    };
  },
  apollo: {
    vino_pageBy: {
      query: pageGql,
      variables() {
        return {
          slug: "contact"
        };
      }
    }
  },
  head: {
    title: `Vino 🍷 Contact`,
    script: [
      {
        src:
          "https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit"
      }
    ]
  },
  methods: {
    async checkForm(e) {
      e.preventDefault();

      let formData = new FormData();
      if (!this.name) {
        this.errors.push("Name required.");
      }
      if (!this.email) {
        this.errors.push("Email required.");
      }

      if (this.name && this.email) {
        formData.append("your_name", this.name);
        formData.append("your_email", this.email);
        formData.append("your_subject", this.subject);
        formData.append("your_message", this.message);
        await this.$axios
          .$post(
            "http://vinoislatropicalwines.com/wp-api/wp-json/contact-form-7/v1/contact-forms/339/feedback",
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data"
              }
            }
          )
          .then(e => {
            console.log("SUCCESS!!", { e, formData });
            this.errors = [];
            if (e.status === "mail_sent") {
              this.mailInfo = `<p>${e.message}</p>`;
              this.name = null;
              this.email = null;
              this.subject = null;
              this.message = null;
            } else {
              this.mailInfo = `<p>${e.message}</p>`;
            }
          })
          .catch(function() {
            console.log("FAILURE!!");
            this.errors = [];
          });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.content-wrapper {
  z-index: 9;
  position: relative;
}
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
