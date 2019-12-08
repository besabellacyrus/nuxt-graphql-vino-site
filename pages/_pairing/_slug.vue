<template>
  <div
    class="dynamic-bg-color"
    :style="cssVars"
  >
    <HeroImageDynamic
      v-if="pairingBy.pairings_gql.heroImage"
      class="pt-32"
      :img-url="pairingBy.pairings_gql.heroImage.sourceUrl"
    ></HeroImageDynamic>

    <div v-if="pairingBy">
      <RightImageSectionDynamic
        :title="pairingBy.title"
        :subtitle="pairingBy.pairings_gql.subTitle"
        :content="pairingBy.pairings_gql.content"
        :images="pairingBy.pairings_gql.images || []"
        :buttons="pairingBy.pairings_gql.buttons"
      />
      <div class="container mx-auto mt-6">
        <hr>
      </div>
      <div class="container mx-auto pairing-suggestion">
        <div class="md:flex md:flex-wrap">
          <div class="w-full md:w-1/2 text-center mt-6 mb-6 md:text-left">
            <h3 class="app-subtitle">WHAT TO PAIR?</h3>
            <div class="px-0 md:px-3">
              <h1 class="app-title">PAIRING SUGGESTIONS</h1>
            </div>
          </div>
        </div>
        <div
          class="mt-4"
          v-if="pairingBy.pairings_gql.items"
        >
          <ul>
            <li
              class="mb-8"
              v-for="(item, index) in pairingBy.pairings_gql.items"
              :key="index"
            >
              <div class="flex flex-wrap">
                <div
                  class="img-box w-full content-around pr-0 md:w-1/5 md:pr-4"
                  v-for="(img, index) in item.images"
                  :key="index"
                >
                  <img
                    class="mb-3"
                    :src="img.image.sourceUrl"
                    alt=""
                  >
                </div>
                <div class="w-full text-center pairing-items lg:w-3/5 lg:text-justify">
                  <h2 class="app-title">{{item.title}}</h2>
                  <p class="mt-4">{{item.content}}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="app-spacer">&nbsp;</div>
      </div>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag"
import HeroImageDynamic from "~/components/dynamic/HeroImageDynamic"
import RightImageSectionDynamic from "~/components/dynamic/RightImageSectionDynamic"
import pairingGql from "~/apollo/queries/pairings"

export default {
  components: {
    HeroImageDynamic,
    RightImageSectionDynamic
  },
  data () {
    return {
      slug: null,
      bgColor: ""
    }
  },

  mounted () {
    this.slug = this.$route.params.slug;
    this.bgColor = this.pairingBy.pairings_gql.backgroundColor
    console.log({ pairingBy: this.pairingBy.pairings_gql })
  },
  computed: {
    cssVars () {
      return {
        '--bg-color': this.bgColor,
      }
    }
  },
  apollo: {
    pairingBy: {
      query: pairingGql,
      variables () {
        return {
          slug: this.$route.params.slug
        }
      }
    },
  },

}
</script>

<style lang="scss" scoped>
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
.dynamic-bg-color {
  background: rgba(244, 242, 229, 1);
  background: -moz-linear-gradient(
    top,
    rgba(244, 242, 229, 1) 0%,
    var(--bg-color) 100%
  );
  background: -webkit-gradient(
    left top,
    left bottom,
    color-stop(0%, rgba(244, 242, 229, 1)),
    color-stop(100%, var(--bg-color))
  );
  background: -webkit-linear-gradient(
    top,
    rgba(244, 242, 229, 1) 0%,
    var(--bg-color) 100%
  );
  background: -o-linear-gradient(
    top,
    rgba(244, 242, 229, 1) 0%,
    var(--bg-color) 100%
  );
  background: -ms-linear-gradient(
    top,
    rgba(244, 242, 229, 1) 0%,
    var(--bg-color) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(244, 242, 229, 1) 0%,
    var(--bg-color) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f4f2e5', endColorstr='#f6dd9a', GradientType=0 );
}
</style>