<template>
  <div class="dynamic-bg-color">
    <HeroImageDynamic
      class="pt-32"
      :img-url="pairingBy.pairings.heroImage.sourceUrl"
    ></HeroImageDynamic>
    <RightImageSectionDynamic
      :subtitle="pairingBy.pairings.subTitle"
      :title="pairingBy.title"
      :message="pairingBy.pairings.content"
      :imageOne="pairingBy.pairings.image.sourceUrl"
      imageTwo="#"
    />
    <div class="app-spacer">&nbsp;</div>
    <LeftImageSectionDynamic
      subtitle="WHAT TO PAIR?"
      title="PAIRING SUGGESTIONS"
      message=""
      imageOne="#"
      imageTwo="#"
     />
    <div class="app-spacer">&nbsp;</div>
  </div>
</template>

<script>
import HeroImageDynamic from "~/components/dynamic/HeroImageDynamic"
import RightImageSectionDynamic from "~/components/dynamic/RightImageSectionDynamic"
import LeftImageSectionDynamic from "~/components/dynamic/LeftImageSectionDynamic"
import gql from "graphql-tag"

const getPairing = gql`
query GET_CUSTOM_POST($slug: String!) {
   pairingBy(slug: $slug) {
    id
    pairings {
      backgroundColor
      content
      fieldGroupName
      heroImage {
        sourceUrl
        title
      }
      image {
        sourceUrl
        title
      }
      subTitle
    }
    title
    slug
  }
}
  `

export default {
  components: {
    HeroImageDynamic,
    RightImageSectionDynamic,
    LeftImageSectionDynamic
  },
  data () {
    return {
      pairingBy: null,
      slug: null
    }
  },
  mounted () {
    console.log('weeeeeee', this.pairingBy )
    this.slug = this.$route.params.slug;
  },
  apollo: {
    pairingBy: {
      query: getPairing,
      variables () {
        return {
          slug: this.slug
        }
      }
    },
  },
  computed: {
    pairings () {
      return this.pairingBy;
    }
  }
}
</script>

<style lang="scss" scoped>
// .right-img {
//   height: 15rem;
// }
// .left-image-one {
//   height: 15rem;
// }
// .right-image-one {
//   height: 15rem;
// }
.other-pair-thumb {
  height: 10rem;
}
.dynamic-bg-color {
  background: rgba(244, 242, 229, 1);
  background: -moz-linear-gradient(
    top,
    rgba(244, 242, 229, 1) 0%,
    rgba(246, 221, 154, 1) 100%
  );
  background: -webkit-gradient(
    left top,
    left bottom,
    color-stop(0%, rgba(244, 242, 229, 1)),
    color-stop(100%, rgba(246, 221, 154, 1))
  );
  background: -webkit-linear-gradient(
    top,
    rgba(244, 242, 229, 1) 0%,
    rgba(246, 221, 154, 1) 100%
  );
  background: -o-linear-gradient(
    top,
    rgba(244, 242, 229, 1) 0%,
    rgba(246, 221, 154, 1) 100%
  );
  background: -ms-linear-gradient(
    top,
    rgba(244, 242, 229, 1) 0%,
    rgba(246, 221, 154, 1) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(244, 242, 229, 1) 0%,
    rgba(246, 221, 154, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f4f2e5', endColorstr='#f6dd9a', GradientType=0 );
}
</style>