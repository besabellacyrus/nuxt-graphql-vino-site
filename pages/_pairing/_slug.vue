<template>
  <div v-if="pairings && pairings.pairings_gql">
    <HeroImageDynamic
      v-if="pairings.pairings_gql.heroImage"
      :img-url="pairings.pairings_gql.heroImage.sourceUrl"
    ></HeroImageDynamic>

    <div v-if="pairings">
      <div class="app-section-container">
        <div class="app-content-wrapper">
          <div>
            <h4>{{ pairings.pairings_gql.subTitle }}</h4>
            <h1>{{ pairings.title }}</h1>
            <p>{{ pairings.pairings_gql.content }}</p>
          </div>
          <div class="image-container">
            <img :src="pairings.pairings_gql.images[0].image.sourceUrl" alt />
          </div>
        </div>
      </div>
      <div class="app-section-container">
        <hr class="my-10" />
      </div>
      <div class="app-section-container">
        <div class="app-content-wrapper">
          <div class="center-section">
            <h4>WHAT TO PAIR?</h4>
            <h1>PAIRING SUGGESTIONS</h1>
          </div>
        </div>
      </div>
      <div v-for="(item, index) in pairings.pairings_gql.items" :key="index">
        <div class="app-section-container">
          <div class="app-content-wrapper" :class="{ 'display-reverse': isOdd(index) }">
            <div>
              <img :src="item.images[0].image.sourceUrl" alt />
            </div>
            <div>
              <img class="horizontal-wine-img" :src="item.images[1].image.sourceUrl" alt />
              <div class="wine-label-wrapper">
                <h1>{{ item.title }}</h1>
                <p>{{ item.content }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="app-section-container">
          <hr class="my-10" />
        </div>
      </div>
      <!-- End of Pairing Suggestions -->
      <div v-if="pairings && pairings.chef" class="app-section-container">
        <div class="chef-wrapper">
          <div>
            <h4>EXQUISITELY PUT TOGETHER BY</h4>
            <h1>{{ pairings.chef.name }}</h1>
            <div v-html="pairings.chef.bio"></div>
          </div>
          <div>
            <img :src="pairings.chef.photo.sourceUrl" alt />
          </div>
        </div>
      </div>
      <div class="app-section-container">
        <!-- <hr class="my-10" /> -->
      </div>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
import HeroImageDynamic from "~/components/dynamic/HeroImageDynamic";
import RightImageSectionDynamic from "~/components/dynamic/RightImageSectionDynamic";
import pairingGql from "~/apollo/queries/pairings";

export default {
  components: {
    HeroImageDynamic,
    RightImageSectionDynamic,
  },
  data() {
    return {
      slug: null,
      bgColor: "",
      pairings: null,
    };
  },
  mounted() {
    this.slug = this.$route.params.slug;
    console.log({ sssl: this.$route.params.slug });
    // this.bgColor =
    //   this.pairingBy && this.pairingBy.pairings_gql
    //     ? this.pairingBy.pairings_gql.backgroundColor
    //     : null;

    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  },
  apollo: {
    pairingBy: {
      query: pairingGql,
      manual: true,
      variables() {
        return {
          slug: this.slug,
        };
      },
      result({ data, loading }) {
        console.log({ data, loading });
        if (!loading) {
          this.pairings = data.pairingBy;
          this.processBg();
        }
      },
    },
  },
  head: {
    bodyAttrs: {
      class: "dynamic-bg-color",
    },
  },
  methods: {
    isOdd(n) {
      return Math.abs(n % 2) == 1;
    },
    processBg() {
      if (process.client) {
        let root = document.documentElement;
        this.bgColor = this.pairings.pairings_gql.backgroundColor;
        root.style.setProperty("--bg-color", this.bgColor);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.app-section-container {
  max-width: 103rem;
  margin: 0 auto;
  display: grid;
  align-items: center;
  min-height: 12rem;
  padding: 0 3rem;
  p {
    text-align: left;
    @media screen and (min-width: 426px) {
      margin: 0;
    }
  }
  .horizontal-wine-img {
    width: 150rem;
  }
  .chef-wrapper {
    display: grid;
    @media screen and (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
      grid-gap: 12rem;
    }
    @media screen and (max-width: 425px) {
      img {
        margin: 4rem 0;
      }
    }
  }
  @media screen and (max-width: 768px) {
    min-height: 7rem;
  }
  @media screen and (max-width: 425px) {
    p {
      text-align: center;
    }
  }
  .center-section {
    width: 100%;
    text-align: center;
    margin: 0 auto;
  }
  .wine-label-wrapper {
    h1 {
      margin-top: 4rem;
      margin-bottom: 0rem;
    }
  }
  .display-reverse {
    flex-direction: row-reverse;
  }
  img {
    width: 100%;
  }
  h1 {
    margin-top: 0;
  }
  h4 {
    color: #af8d72;
  }
  h1,
  h4 {
    font-weight: bold;
    letter-spacing: 2px;
  }
  .image-container {
    @media screen and (max-width: 425px) {
      margin-top: 3rem;
    }
  }
  .app-content-wrapper {
    display: flex;
    grid-gap: 2rem;
    @media screen and (max-width: 425px) {
      flex-direction: column;
      text-align: center;
    }
  }
}
.pairing-suggestion {
  h1 {
    font-size: 3rem;
  }
}
.pairing-items {
  h2 {
    font-size: 3rem;
  }
}
.img-box {
  height: 200px;
  width: 200px;
  margin-bottom: 1rem;
  margin: 0 auto;
}
.other-pair-thumb {
  height: 10rem;
}
</style>
