<template>
  <div class="main-wrapper">
    <div class="bg-pattern-one"></div>
    <div class="bg-pattern-two"></div>
    <div class="bg-pattern-three"></div>
    <div class="bg-pattern-four"></div>
    <div class="bg-pattern-five"></div>
    <!-- v-if="vino_pageBy && vino_pageBy.fc" -->
    <div
      class="content-wrapper mx-auto"
      v-if="vino_pageBy && vino_pageBy.fc"
    >
      <div
        v-for="(vino, index) in vino_pageBy.fc.homeFc"
        :key="index"
      >
        <HeroImageDynamic
          v-if="vino.__typename === 'Vino_page_Fc_HomeFc_HeroImage'"
          :img-url="vino.image.sourceUrl"
        ></HeroImageDynamic>
        <div data-aos="fade-right" v-if="vino.orientation && vino.orientation === 'right'">
          <RightImageSectionDynamic
            :title="vino.title"
            :subtitle="vino.subTitle"
            :content="vino.content"
            :images="vino.images"
            :buttons="vino.buttons"
          />
        </div>
        <div data-aos="fade-left" v-if="vino.orientation && vino.orientation === 'left'">
          <LeftImageSectionDynamic
            :title="vino.title"
            :subtitle="vino.subTitle"
            :content="vino.content"
            :images="vino.images"
            :buttons="vino.buttons"
          />
        </div>
        <div data-aos="fade-down" v-if="vino.fieldGroupName === 'vino_page_Fc_HomeFc_CenterText'">
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
      <LoadingComponent />
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
import LoadingComponent from "~/components/LoadingComponent"

export default {
  components: {
    HeroImageDynamic,
    CenterSectionDynamic,
    LeftImageSectionDynamic,
    RightImageSectionDynamic,
    ShowcaseSectionDynamic,
    ImageComponent,
    TextAreaComponent,
    LoadingComponent
  },
  data () {
    return {
      slug: null
    }
  },
  mounted () {
    console.log({ vino: this.vino_pageBy })
    console.log('index')
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
      title: `Vino | ${this.$options.filters.capitalize(this.$route.params.page) || 'Home'}`,
    }
  }
}
</script>

<style lang="scss" scoped>
.main-wrapper {
  overflow: hidden;
  .content-wrapper {
    z-index: 9;
    position: relative;
  }
}
.bg-pattern-one {
  background-image: url("~assets/img/bg/bg_01.svg");
  background-size: cover;
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
  background-size: cover;
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
  background-size: cover;
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
  background-size: cover;
  background-repeat: no-repeat;
  height: 60rem;
  width: 37%;
  left: 0;
  position: absolute;
  top: 200rem;
  z-index: 1;
}
</style>