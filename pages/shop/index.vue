<template>
  <div class="container mx-auto mt-20">
    <div class="product-wrapper">
      <div class="product-container">
        <div class="flex flex-wrap md:-mx-10">
          <div
            class="w-full product-lists lg:w-1/3"
            v-for="(item, index) in items"
            :key="index"
          >
            <div class="image-wrapper px-5 lg:px-10">
              <img
                :src="item.node.shop_gql.thumbnail.sourceUrl"
                alt=""
              >
            </div>
            <div class="item-detail text-center">
              <span class="app-subtitle">{{ item.node.shop_gql.subTitle }}</span>
              <h1 class="app-title">{{ item.node.title }}</h1>
              <div class="mt-6">
                <a href="">
                  <button class="app-btn mr-3">BUY NOW</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import shopItemsGql from "~/apollo/queries/shopItems"

export default {
  mounted () {
    console.log({ items: this.shop_items })
  },
  computed: {
    items () {
      return this.shop_items.edges
    }
  },
  apollo: {
    shop_items: {
      query: shopItemsGql,
      variables () {
        return {
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.product-container {
  min-height: 75rem;
}
.product-lists {
  @media screen and (max-width: 425px) {
    padding: 3rem;
  }
}
.item-detail {
  margin-top: 3rem;
  h1 {
    margin-top: 0;
    font-size: 3rem;
  }
  .app-btn {
    padding: 0.7rem 3rem;
  }
}
.image-wrapper {
  height: 357px;
  margin-bottom: 1rem;
  @media screen and (max-width: 320px) {
    height: 250px;
  }
  img {
    width: 100%;
    height: 100%;
  }
}
</style>