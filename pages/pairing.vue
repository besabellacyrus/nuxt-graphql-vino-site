<template>
  <div class="pairing-wrapper">
    <div class="bg-pattern-one"></div>
    <div class="bg-pattern-two"></div>
    <div class="content-wrapper" v-if="vino_pageBy && vino_pageBy.fc">
      <HeroImageDynamic :img-url="vino_pageBy.fc.homeFc[0].image.sourceUrl"></HeroImageDynamic>
      <div class="container mx-auto text-center pairing-content">
        <div class="wow fadeInDown mx-10">
          <div class="subtitle">{{ vino_pageBy.fc.homeFc[1].subTitle}}</div>
          <div class="title">{{ vino_pageBy.fc.homeFc[1].title }}</div>
        </div>
        <div
          v-html="vino_pageBy.fc.homeFc[1].content"
          class="bar-top-line-center mt-10 wow fadeInUp"
        ></div>
      </div>
      <div class="text-center header-title">
        <h1 class="subtitle">CHOOSE YOUR VINO</h1>
        <div class="img-separator">
          <img src="/pairing_separator.svg" alt />
        </div>
      </div>
      <div class="pairing-items-wrapper">
        <div>
          <a href="/pairing/coconut-wine">
            <img src="/pairing/coconut-image.jpg" alt="Coconut Wine" />
            <div class="pairing-item-label">
              <h4>TROPICAL</h4>
              <h1>COCONUT WINE</h1>
            </div>
          </a>
          <div class="btn-wrapper">
            <a href="/pairing/coconut-wine">
              <div class="app-btn">
                <button>SELECT</button>
              </div>
            </a>
          </div>
        </div>
        <div>
          <a href="/pairing/mango-wine">
            <img src="/pairing/mango-image.jpg" alt="Mango Wine" />
            <div class="pairing-item-label">
              <h4>TROPICAL</h4>
              <h1>MANGO WINE</h1>
            </div>
          </a>
          <div class="btn-wrapper">
            <a href="/pairing/mango-wine">
              <div class="app-btn">
                <button>SELECT</button>
              </div>
            </a>
          </div>
        </div>
        <div>
          <a href="/pairing/sugarcane-wine">
            <img src="/pairing/sugarcane-image.jpg" alt="Sugarcane Wine" />
            <div class="pairing-item-label">
              <h4>TROPICAL</h4>
              <h1>SUGARCANE WINE</h1>
            </div>
          </a>
          <div class="btn-wrapper">
            <a href="/pairing/sugarcane-wine">
              <div class="app-btn">
                <button>SELECT</button>
              </div>
            </a>
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
    LoadingComponent,
  },
  data() {
    return {
      slug: null,
    };
  },
  apollo: {
    vino_pageBy: {
      query: pageGql,
      variables() {
        return {
          slug: "pairing",
        };
      },
    },
  },
  head() {
    return {
      title: `Vino | ${
        this.$options.filters.capitalize(this.$route.params.page) || "Home"
      }`,
      meta:
        this.vino_pageBy && this.vino_pageBy.metas
          ? this.vino_pageBy.metas.metatags.concat(
              this.vino_pageBy.og_tags.ogTags
                ? this.vino_pageBy.og_tags.ogTags
                : []
            )
          : [],
    };
  },
};
</script>

<style lang="scss" scoped>
.img-separator {
  margin: 0 auto;
  text-align: center;
  width: 7rem;
  margin-bottom: 3rem;
}
.pairing-items-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 3rem;
  max-width: 97rem;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 2rem;
  .btn-wrapper {
    margin: 2rem 6rem;
    button {
      padding: 0.5rem;
      font-weight: bold;
    }
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: initial;
  }
  .pairing-item-label {
    margin-top: 2rem;
    h4 {
      color: #af8d72;
      font-weight: bold;
    }
    h1 {
      margin: 0;
      font-weight: bold;
    }
  }
}

.content-wrapper {
  z-index: 9;
  position: relative;
}
.pairing-wrapper {
  margin-bottom: 10rem;
  overflow: hidden;
  .pairing-content {
    padding: 0 26rem;
    @media screen and (max-width: 768px) {
      padding: 0 0rem;
    }
  }
  .pairing-items {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 1rem;
    padding-left: 6rem;
    padding-right: 6rem;
    text-align: center;
    margin-bottom: 5rem;
    h3 {
      font-weight: bold;
    }
    h1 {
      font-weight: bold;
    }
  }
  .header-title {
    margin-top: 8rem;
    h1 {
      font-size: 3rem;
      font-weight: 600;
    }
  }
  .bar-top-line-center {
    padding-top: 4rem;
    &:after {
      top: 0rem;
    }
  }
}
.pairing-wrapper {
  overflow: hidden;
  .pairing-content,
  .pairing-items {
    z-index: 9;
    /* position: relative; */
  }
}
.bg-pattern-one {
  background-image: url("~assets/img/bg/bg_01.svg");
  background-size: contain;
  background-repeat: no-repeat;
  height: 46rem;
  width: 37%;
  right: 0;
  position: absolute;
  top: 50%;
  z-index: 1;
}
.bg-pattern-two {
  background-image: url("~assets/img/bg/bg_02.svg");
  background-size: contain;
  background-repeat: no-repeat;
  height: 60rem;
  width: 37%;
  left: 0;
  position: absolute;
  top: 75rem;
  z-index: 1;
}
.bg-pattern-three {
  background-image: url("~assets/img/bg/bg_03.svg");
  background-size: contain;
  background-repeat: no-repeat;
  height: 60rem;
  width: 37%;
  right: 0;
  position: absolute;
  top: 150rem;
  z-index: 1;
}
.bg-pattern-four {
  background-image: url("~assets/img/bg/bg_04.svg");
  background-size: contain;
  background-repeat: no-repeat;
  height: 60rem;
  width: 37%;
  left: 0;
  position: absolute;
  top: 200rem;
  z-index: 1;
}
</style>