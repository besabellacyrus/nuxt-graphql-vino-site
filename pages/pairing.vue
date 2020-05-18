<template>
  <div class="pairing-wrapper">
    <div v-if="pairing">
      <HeroImageDynamic :img-url="pairing[0].image.sourceUrl"></HeroImageDynamic>
      <div class="container mx-auto text-center pairing-content">
        <div class="wow fadeInDown mx-10">
          <div class="subtitle">{{ pairing[1].subTitle}}</div>
          <div class="title">{{ pairing[1].title }}</div>
        </div>
        <p class="bar-top-line-center mt-10 wow fadeInUp">
          {{ pairing[1].content }}
        </p>
      </div>
      <div class="text-center header-title">
        <h1 class="subtitle">CHOOSE YOUR VINO</h1>
      </div>
      <div class="pairing-items">
        <div
          v-for="(pair, index) in pairing[1].imageButtons"
          :key="index"
        >
          <a :href="pair.routePath">
            <img
              :src="pair.image.sourceUrl"
              alt=""
            >
          </a>
          <div class="mt-5">
            <h3>{{ pair.subTitle }}</h3>
            <h1 class="">{{ pair.title }}</h1>
            <p>{{ pair.content }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      Sorry No content.
    </div>

  </div>
</template>

<script>
import HeroImageDynamic from "~/components/dynamic/HeroImageDynamic"
import pageGql from "~/apollo/queries/page"


export default {
  components: {
    HeroImageDynamic
  },
  data () {
    return {
      slug: null,
      pairing: null
    }
  },
  mounted () {
    if (this.vino_pageBy && this.vino_pageBy.fc) {
      const { fc: { homeFc } } = this.vino_pageBy;
      this.pairing = homeFc;
      console.log({ slug: this.pairing });
    }
  },
  apollo: {
    vino_pageBy: {
      query: pageGql,
      variables () {
        return {
          slug: 'pairing'
        }
      }
    },

  },
  head () {
    return {
      title: `Vino 🍷 Pairing`,
    }
  }
}
</script>

<style lang="scss" scoped>
.pairing-wrapper {
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
</style>