<template>
  <div id="store-locator" class="store-locator-container">
    <div class="bg-pattern-one"></div>
    <div class="bg-pattern-two"></div>
    <div class="content-wrapper" v-if="vino_pageBy && vino_pageBy.fc">
      <div v-for="(vino, index) in vino_pageBy.fc.homeFc" :key="index">
        <HeroImageDynamic
          v-if="vino.__typename === 'Vino_page_Fc_HomeFc_HeroImage'"
          :img-url="vino.image.sourceUrl"
        ></HeroImageDynamic>
        <div data-aos="fade-down" v-if="vino.fieldGroupName === 'vino_page_Fc_HomeFc_CenterText'">
          <div class="center-content-wrapper mb-10">
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
    </div>
    <div class="content-wrapper container mx-auto">
      <div class="store-locator-wrapper">
        <div class="search">
          <div class="search-wrapper">
            <h1>SEARCH LOCATION</h1>
            <input type="text" v-model="query" />
          </div>
          <div class="query-results">
            <ul>
              <li v-for="store in filteredStores" :key="store.store_locations.lat">
                <h2>{{ store.store_locations.locationName }}</h2>
                <p>{{ store.store_locations.address }}</p>
                <span
                  class="show-in-map"
                  @click="
                    showInMap(
                      store.store_locations.lng,
                      store.store_locations.lat
                    )
                  "
                >SHOW IN MAP</span>
              </li>
            </ul>
          </div>
        </div>
        <div id="map-wrap"></div>
        <div></div>
      </div>
      <div class="text-center mt-10">
        <p>
          Cannot find us in your preferred store?
          <a
            href="mailto: vinoislaheritage@gmail.com"
          >Let us know.</a>
        </p>
      </div>
    </div>
    <div>
      <div class="app-spacer">&nbsp;</div>
    </div>
  </div>
</template>

<script>
import storesGql from "~/apollo/queries/storeLocations";
import pageGql from "~/apollo/queries/page";
import HeroImageDynamic from "~/components/dynamic/HeroImageDynamic";
import CenterSectionDynamic from "~/components/dynamic/CenterSectionDynamic";

export default {
  components: {
    HeroImageDynamic,
    CenterSectionDynamic
  },
  data() {
    return {
      query: "",
      lng: 0,
      lat: 0,
      stores: [],
      mymap: null
    };
  },
  computed: {
    filteredStores() {
      console.log({ stores: this.store_locations });
      if (this.store_locations) {
        if (this.query === "") {
          return this.store_locations.nodes;
        }
        return this.store_locations.nodes.filter(store => {
          return (
            store.store_locations.locationName
              .toLowerCase()
              .indexOf(this.query.toLowerCase()) !== -1 ||
            store.store_locations.address
              .toLowerCase()
              .indexOf(this.query.toLowerCase()) !== -1
          );
        });
      }
    }
  },
  mounted() {
    if (this.store_locations && this.store_locations.nodes) {
      this.stores = this.store_locations.nodes;
    }
    this.mymap = L.map("map-wrap", {
      attributionControl: false,
      zoomControl: false
    }).setView(L.latLng(14.4166681, 121.0336598), 15);
    L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
      detectRetina: true,
      maxNativeZoom: 17,
      accessToken:
        "pk.eyJ1Ijoic2FpcGhwIiwiYSI6ImNrNTg2NTdrczBqdXMzbHF4ZXRuNHp2ZjMifQ.TCM8c-eog1TKlX9gLbRjhw"
    }).addTo(this.mymap);
  },
  apollo: {
    store_locations: {
      query: storesGql
    },
    vino_pageBy: {
      query: pageGql,
      variables() {
        return {
          slug: "store-locator"
        };
      }
    }
  },
  methods: {
    applyMarker(mymap) {
      var pruneCluster = new this.PruneClusterForLeaflet();
      var marker = new this.PruneCluster.Marker(this.lng, this.lat);
      pruneCluster.RegisterMarker(marker);
      mymap.addLayer(pruneCluster);
      mymap.setView(L.latLng(this.lng, this.lat), 15);
    },
    showInMap(lng, lat) {
      this.lng = lng;
      this.lat = lat;
      this.applyMarker(this.mymap);
    }
  },
  head() {
    return {
      title: `Vino 🍷 Store Locator`,
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

<style lang="scss">
.content-wrapper {
  position: relative;
  z-index: 9;
}
#store-locator {
  a {
    text-decoration: underline;
  }
  .app-top-line-center {
    p {
      max-width: 69rem !important;
      margin: 0 auto !important;
    }
  }
}
.show-in-map {
  cursor: pointer;
  font-weight: bold;
}
.store-locator-container {
  min-height: 1200px;
}
.query-results {
  margin-top: 2rem;
  ul {
    max-height: 40rem;
    overflow-y: scroll;
  }
  li {
    margin-bottom: 3rem;
  }
  h2 {
    font-weight: bold;
    text-transform: uppercase;
  }
}
.store-locator-wrapper {
  display: grid;
  grid-template-columns: 1fr 3fr;
  @media screen and (max-width: 768px) {
    text-align: center;
    grid-template-columns: repeat(auto-fit, minmax(37rem, 1fr));
  }
  grid-gap: 1rem;
  color: $app-brown;
  height: 50rem;
  .search {
    padding: 1rem;
    width: 100%;
  }
  .map {
    padding: 0.1rem;
  }
  .search,
  .map {
    background-color: rgb(239, 239, 239);
    border: 1px solid rgb(216, 214, 208);
    input {
      height: 3rem;
      width: 100%;
      border-radius: 6px;
      border: 1px solid;
      outline: none;
      padding-left: 1rem;
    }
    h1 {
      color: $app-brown;
      font-weight: bold;
      font-size: 1.5rem;
    }
  }
}
#map-wrap {
  @media screen and (max-width: 425px) {
    height: 22rem;
  }
}
</style>
