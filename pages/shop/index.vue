<template>
  <div class="shop-wrapper">
    <div class="bg-pattern-one"></div>
    <div class="bg-pattern-two"></div>
    <div class="bg-pattern-three"></div>

    <div class="content-wrapper" v-if="vino_pageBy && vino_pageBy.fc">
      <div v-for="(vino, index) in vino_pageBy.fc.homeFc" :key="index">
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
      <div class="container mx-auto">
        <div class="shop-items">
          <div v-for="(item, index) in items" :key="index">
            <div class="shop-item">
              <div class="item-thumbnail">
                <img :src="item.node.shop_gql.thumbnail.sourceUrl" alt />
              </div>
              <div class="item-info text-center mt-10">
                <h4 class="subtitle">{{ item.node.shop_gql.subTitle }}</h4>
                <h2 class="title">{{ item.node.title }}</h2>
                <div class="mt-2" v-html="item.node.shop_gql.description"></div>
                <div class="app-buttons">
                  <a :href="`shop/${item.node.slug}`">
                    <button>BUY NOW</button>
                  </a>
                </div>
              </div>
            </div>
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
import shopItemsGql from "~/apollo/queries/shopItems";
import pageGql from "~/apollo/queries/page";
import HeroImageDynamic from "~/components/dynamic/HeroImageDynamic";
import CenterSectionDynamic from "~/components/dynamic/CenterSectionDynamic";
import LoadingComponent from "~/components/LoadingComponent";

export default {
  components: {
    HeroImageDynamic,
    CenterSectionDynamic,
    LoadingComponent
  },
  mounted() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  },
  computed: {
    items() {
      if (this.shop_items && this.shop_items.edges) {
        return this.shop_items.edges;
      }
    }
  },
  apollo: {
    shop_items: {
      query: shopItemsGql,
      variables() {
        return {};
      }
    },
    vino_pageBy: {
      query: pageGql,
      variables() {
        return {
          slug: "shop"
        };
      }
    }
  },
  head() {
    return {
      title: `Vino 🍷 Shop`,
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
.content-wrapper {
  position: relative;
  z-index: 9;
}
.shop-wrapper {
  margin-bottom: 10rem;
  .shop-items {
    margin-top: 4rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(34rem, 1fr));
    grid-gap: 3rem;
    margin-bottom: 22rem;
    .shop-item {
      position: relative;
      margin-bottom: 4rem;
      .item-thumbnail {
        img {
          height: 100%;
          width: 100%;
        }
      }
      .item-info {
        .app-buttons {
          position: relative;
          top: 3rem;
        }
        .subtitle {
          font-size: 1.3rem;
        }
        .title {
          font-size: 3rem;
        }
      }
    }
  }
}
</style>
