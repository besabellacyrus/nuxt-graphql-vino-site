<template>
  <div class="single-item-wrapper">
    <div v-if="vino_pageBy">
      <div v-for="(vino, index) in vino_pageBy.fc.homeFc" :key="index">
        <HeroImageDynamic
          v-if="vino.__typename === 'Vino_page_Fc_HomeFc_HeroImage'"
          :img-url="vino.image.sourceUrl"
        ></HeroImageDynamic>
      </div>
      <div v-if="shop_itemBy && shop_itemBy.shop_gql" class="container mx-auto">
        <div class="item-wrapper">
          <div class="item-info">
            <h3 class="subtitle">{{ shop_itemBy.shop_gql.subTitle }}</h3>
            <h1 class="title">{{ shop_itemBy.title }}</h1>
            <div>
              <h3 class="subtitle">Php {{ shop_itemBy.shop_gql.price }}</h3>
              <div v-html="shop_itemBy.shop_gql.details" class="bar-top-line-left item-text"></div>
              <div class="app-buttons">
                <a :href="shop_itemBy.shop_gql.buyNowUrl">
                  <button>PURCHASE</button>
                </a>
              </div>
            </div>
          </div>
          <div class="item-images">
            <div class="large-image" v-if="shop_itemBy.shop_gql.images">
              <img id="large-image-tag" :src="shop_itemBy.shop_gql.images[0].image.sourceUrl" alt />
            </div>
            <div class="small-images" v-if="shop_itemBy.shop_gql.images">
              <div v-for="(img, index) in shop_itemBy.shop_gql.images" :key="index">
                <img :src="img.image.sourceUrl" @click="showLarge(img.image.sourceUrl)" alt />
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
import shopItemGql from "~/apollo/queries/shopItem";
import HeroImageDynamic from "~/components/dynamic/HeroImageDynamic";
import LoadingComponent from "~/components/LoadingComponent";

export default {
  components: {
    HeroImageDynamic,
    LoadingComponent
  },
  data() {
    return {
      firstImage: null
    };
  },
  mounted() {
    this.getTheFirstimage;
  },
  methods: {
    getTheFirstimage() {
      if (this.shop_itemBy.shop_gql && this.shop_itemBy.shop_gql.images) {
        const shifted = this.shop_itemBy.shop_gql.images.shift();
        console.log({ shifted });
        this.firstImage = shifted;
      }
    },
    showLarge(img) {
      let largeImage = document.querySelector("#large-image-tag");
      largeImage.src = img;
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
    },
    shop_itemBy: {
      query: shopItemGql,
      variables() {
        return {
          slug: this.$route.params.wine
        };
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.single-item-wrapper {
  position: relative;
  margin-bottom: 10rem;
  .item-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(32rem, 1fr));
    grid-gap: 7rem;
    .item-text {
      padding-top: 4rem;
    }
    .item-info {
      position: relative;
      .app-buttons {
        float: right;
        color: #fff;
        margin-top: 1rem;
        @media screen and (max-width: 768px) {
          position: absolute;
          left: 50%;
          padding-top: 1rem;
          transform: translateX(-50%);
        }
        button {
          outline: none;
          background-color: $app-brown;
          transition: all 1s;
          &:hover {
            background-color: transparent;
            color: $app-brown;
          }
        }
      }
    }
  }
  .item-images {
    display: grid;
    grid-gap: 1rem;
    .large-image {
      img {
        width: 100%;
      }
    }
    .small-images {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-gap: 0.9rem;
    }
  }
}
</style>