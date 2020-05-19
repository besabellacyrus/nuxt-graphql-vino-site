<template>
  <div class="store-locator-container">
    <div class="container mx-auto">
      <img
        class="app-hero-img"
        src="~/assets/img/events/events-header-min.png"
        alt=""
      >
    </div>
    <div class="center-content-wrapper mb-10">
      <div class="subtitle">FIND US</div>
      <div class="title">VINO ISLA STORES</div>
      <b class="app-top-line-center"></b>
    </div>
    <div class="container mx-auto">
      <div class="store-locator-wrapper">
        <div class="search">
          <div class="search-wrapper">
            <h1>SEARCH LOCATION</h1>
            <input
              type="text"
              v-model="query"
            >
          </div>
          <div class="query-results">
            <ul>
              <li
                v-for="store in filteredStores"
                :key="store.store_locations.lat"
              >
                <h2>{{ store.store_locations.locationName }}</h2>
                <p>{{ store.store_locations.address  }}</p>
                <span
                  class="show-in-map"
                  @click="showInMap(store.store_locations.lng, store.store_locations.lat)"
                >SHOW IN MAP</span>
              </li>
            </ul>
          </div>
        </div>
        <div id="map-wrap">
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import storesGql from "~/apollo/queries/storeLocations"

export default {
  data () {
    return {
      query: "",
      lng: 0,
      lat: 0,
      stores: [
        // {
        //   location_name: "Alabang One",
        //   address: "Blk Lot Street Alabang",
        //   lng: 14.4168789,
        //   lat: 120.9927919
        // },
        // {
        //   location_name: "Alabang Two",
        //   address: "Blk Lot Street Alabang",
        //   lng: 14.4201542,
        //   lat: 121.0403922
        // },
        // {
        //   location_name: "Alabang Three",
        //   address: "Blk Lot Street Alabang",
        //   lng: 14.4136807,
        //   lat: 121.0353925
        // }
      ],
      mymap: null
    }
  },
  asyncDate () {
    return {
      stores: []
    }
  },
  computed: { 
    filteredStores () {
      console.log({ filter: this.store })
      if (this.query === '') {
        return this.stores;
      }
      return this.stores.filter(
        store => {
          console.log({ store })
          return store.store_locations.locationName.toLowerCase().indexOf(this.query.toLowerCase()) !== -1
          || store.store_locations.address.toLowerCase().indexOf(this.query.toLowerCase()) !== -1
        }
      );
    },
  },
  mounted () {
    const { nodes } = this.store_locations;
    this.stores = nodes;
    console.log({ nnnn: this.stores })
    this.mymap = L.map('map-wrap', {
      attributionControl: false,
      zoomControl: false
    }).setView(L.latLng(14.4166681, 121.0336598), 15);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      detectRetina: true,
      maxNativeZoom: 17,
      accessToken: 'pk.eyJ1Ijoic2FpcGhwIiwiYSI6ImNrNTg2NTdrczBqdXMzbHF4ZXRuNHp2ZjMifQ.TCM8c-eog1TKlX9gLbRjhw'
    }).addTo(this.mymap);
  },
  apollo: {
    store_locations: {
      query: storesGql,
    }
  },
  methods: {
    applyMarker (mymap) {
      var pruneCluster = new this.PruneClusterForLeaflet();
      var marker = new this.PruneCluster.Marker(this.lng, this.lat);
      pruneCluster.RegisterMarker(marker);
      mymap.addLayer(pruneCluster);
      mymap.setView(L.latLng(this.lng, this.lat), 15);
    },
    showInMap (lng, lat) {
      this.lng = lng;
      this.lat = lat;
      this.applyMarker(this.mymap);
    }
  },
  head () {
    return {
      title: `Vino 🍷 Store Locator`,
    }
  }
}
</script>

<style lang="scss" scoped>
.show-in-map {
  cursor: pointer;
  font-weight: bold;
}
.store-locator-container {
  min-height: 1200px;
}
.query-results {
  margin-top: 2rem;
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
</style>