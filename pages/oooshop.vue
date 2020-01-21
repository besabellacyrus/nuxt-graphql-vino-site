<template>
  <div>
    <div v-if="vino_pageBy">
      <div
        v-for="(vino, index) in vino_pageBy.fc.homeFc"
        :key="index"
      >
        <HeroImageDynamic
          v-if="vino.__typename === 'Vino_page_Fc_HomeFc_HeroImage'"
          :img-url="vino.image.sourceUrl"
        ></HeroImageDynamic>
        <div v-if="vino.fieldGroupName === 'vino_page_Fc_HomeFc_CenterText'">
          <CenterSectionDynamic
            :title="vino.title"
            :subtitle="vino.subTitle"
            :content="vino.content"
            :imageButtons="vino.imageButtons"
            :buttons="vino.buttons"
          />
        </div>
      </div>
    </div>
    <div v-else>
      Sorry No content.
    </div>
    <nuxt-child />
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
  apollo: {
    vino_pageBy: {
      query: pageGql,
      variables () {
        return {
          slug: 'shop'
        }
      }
    },
  },
  head () {
    return {
      title: `Vino 🍷 Shop`,
    }
  }
}
</script>

<style>
</style>