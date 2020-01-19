<template>
  <div class="main-wrapper">
    <div class="bg-pattern-one"></div>
    <div class="bg-pattern-two"></div>
    <div class="bg-pattern-three"></div>
    <div class="bg-pattern-four"></div>
    <div class="bg-pattern-five"></div>
    <div class="bg-pattern-six"></div>
    <div class="bg-pattern-seven"></div>
    <div
      class="content-wrapper mx-auto"
      v-if="vino_pageBy"
    >
      <div
        v-for="(vino, index) in vino_pageBy.fc.homeFc"
        :key="index"
      >
        <HeroImageDynamic
          v-if="vino.__typename === 'Vino_page_Fc_HomeFc_HeroImage'"
          :img-url="vino.image.sourceUrl"
        ></HeroImageDynamic>
        <div v-if="vino.orientation && vino.orientation === 'right'">
          <RightImageSectionDynamic
            :title="vino.title"
            :subtitle="vino.subTitle"
            :content="vino.content"
            :images="vino.images"
            :buttons="vino.buttons"
          />
        </div>
        <div v-if="vino.orientation && vino.orientation === 'left'">
          <LeftImageSectionDynamic
            :title="vino.title"
            :subtitle="vino.subTitle"
            :content="vino.content"
            :images="vino.images"
            :buttons="vino.buttons"
          />
        </div>
        <div v-if="vino.fieldGroupName === 'vino_page_Fc_HomeFc_CenterText'">
          <CenterSectionDynamic
            :title="vino.title"
            :subtitle="vino.subTitle"
            :content="vino.content"
            :imageButtons="vino.imageButtons"
            :buttons="vino.buttons"
          />
        </div>
        <div v-if="vino.fieldGroupName === 'vino_page_Fc_HomeFc_Showcase'">
          <ShowcaseSectionDynamic
            :title="vino.title"
            :subtitle="vino.subTitle"
            :content="vino.content"
            :imageButtons="vino.imageButtons"
            :buttons="vino.buttons"
            :items="vino.items"
          />
        </div>
        <div v-if="vino.fieldGroupName === 'vino_page_Fc_HomeFc_Spacer'">
          <div class="app-spacer">&nbsp;</div>
        </div>
        <div v-if="vino.fieldGroupName === 'vino_page_Fc_HomeFc_TextArea'">
          <TextAreaComponent :content="vino.content" />
        </div>
        <div v-if="vino.fieldGroupName === 'vino_page_Fc_HomeFc_Image'">
          <ImageComponent :imageUrl="vino.image.sourceUrl" />
        </div>
      </div>
    </div>
    <div v-else>
      Sorry No content.
    </div>
  </div>
</template>

<script>
import pageGql from "~/apollo/queries/page"
import HeroImageDynamic from "~/components/dynamic/HeroImageDynamic"
import TextAreaComponent from "~/components/dynamic/TextAreaComponent"
import ImageComponent from "~/components/dynamic/ImageComponent"
import RightImageSectionDynamic from "~/components/dynamic/RightImageSectionDynamic"
import LeftImageSectionDynamic from "~/components/dynamic/LeftImageSectionDynamic"
import CenterSectionDynamic from "~/components/dynamic/CenterSectionDynamic"
import ShowcaseSectionDynamic from "~/components/dynamic/ShowcaseSectionDynamic"
if (process.browser) {
  var { WOW } = require('wowjs')
}
export default {
  components: {
    HeroImageDynamic,
    CenterSectionDynamic,
    LeftImageSectionDynamic,
    RightImageSectionDynamic,
    ShowcaseSectionDynamic,
    ImageComponent,
    TextAreaComponent
  },
  data () {
    return {
      slug: null
    }
  },
  mounted () {
    console.log({ vino: this.vino_pageBy })
    if (process.browser) {
      new WOW({
        live: false,
        offset: 0
      }).init();
    }
  },
  apollo: {
    vino_pageBy: {
      query: pageGql,
      variables () {
        return {
          slug: this.$route.path === '/' ? 'home' : this.$route.params.page
        }
      }
    },
  },
  methods: {
    renderImage (images) {
      if (images) {
        return images.image.sourceUrl
      }
      return ""
    }
  },
  head () {
    return {
      title: `Vino 🍷 ${this.$options.filters.capitalize(this.$route.params.page) || 'Home'}`,
    }
  }
}
</script>

<style lang="scss">
</style>
