<template>
  <div>
    <div v-if="vino_pageBy">
      <div v-for="(vino, index) in vino_pageBy.fc.homeFc" :key="index">
        <HeroImageDynamic
          v-if="vino.__typename === 'Vino_page_Fc_HomeFc_HeroImage'"
          class="pt-32"
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
          <div class="app-spacer">&nbsp;</div>
        </div>
        <div v-if="vino.orientation && vino.orientation === 'left'">
          <LeftImageSectionDynamic
            :title="vino.title"
            :subtitle="vino.subTitle"
            :content="vino.content"
            :images="vino.images"
            :buttons="vino.buttons"
          />
          <div class="app-spacer">&nbsp;</div>
        </div>
        <div v-if="vino.fieldGroupName === 'vino_page_Fc_HomeFc_CenterText'">
          <CenterSectionDynamic
            :title="vino.title"
            :subtitle="vino.subTitle"
            :content="vino.content"
            :imageButtons="vino.imageButtons"
            :buttons="vino.buttons"
          />
          <div class="app-spacer">&nbsp;</div>
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
          <div class="app-spacer">&nbsp;</div>
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
    ShowcaseSectionDynamic
  },
  data () {
    return {
      slug: null
    }
  },
  created () {
    console.log({ ssslug: this.$route })
  },
  watch: {
    vino_pageBy(val) {
      console.log({ pageByyy: val, slslsls: this.$route })
    }
  },
  apollo: {
    vino_pageBy: {
      query: pageGql,
      variables () {
        return {
          slug: this.$route.path === '/' ? 'home' : this.$route.params.slug
        }
      }
    },
  },
  methods: {
    renderImage(images) {
      if (images) {
        return images.image.sourceUrl
      }
      return ""
    }
  },
  head () {
    return {
      title: `Vino | ${this.$route.params.slug || 'Home'}`,
    }
  }
}
</script>

<style>

</style>