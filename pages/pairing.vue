<template>
  <div class="pairing-wrapper">
    <div v-if="vino_pageBy && vino_pageBy.fc">
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
      </div>
      <div class="pairing-items">
        <div v-for="(pair, index) in vino_pageBy.fc.homeFc[1].imageButtons" :key="index">
          <a :href="pair.routePath">
            <img :src="pair.image.sourceUrl" alt />
          </a>
          <div class="mt-5">
            <h3>{{ pair.subTitle }}</h3>
            <h1 class>{{ pair.title }}</h1>
            <div v-html="pair.content"></div>
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
      slug: null
    };
  },
  apollo: {
    vino_pageBy: {
      query: pageGql,
      variables() {
        return {
          slug: "pairing"
        };
      }
    }
  },
  head() {
    return {
      title: `Vino | ${this.$options.filters.capitalize(
        this.$route.params.page
      ) || "Home"}`,
      meta:
        this.vino_pageBy && this.vino_pageBy.metas
          ? this.vino_pageBy.metas.metatags.concat(
              this.vino_pageBy.og_tags.ogTags
                ? this.vino_pageBy.og_tags.ogTags
                : []
            )
          : []
    };
  }
};
</script>

<style lang="scss" scoped>
.pairing-wrapper {
  margin-bottom: 10rem;
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