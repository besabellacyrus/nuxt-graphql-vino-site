import Vue from 'vue'
import * as Vue2Leaflet from 'vue2-leaflet'
import { PruneCluster, PruneClusterForLeaflet } from 'exports-loader?PruneCluster,PruneClusterForLeaflet!prunecluster/dist/PruneCluster.js'
var { LMap, LTileLayer, LMarker } = Vue2Leaflet;

const VueLeaflet = {

  install (Vue, options) {
    Vue.component('l-map', LMap)
    Vue.component('l-marker', LMarker)
    Vue.component('l-tile-layer', LTileLayer)
    Vue.prototype.PruneCluster = PruneCluster;
    Vue.prototype.PruneClusterForLeaflet = PruneClusterForLeaflet;
  }

};

Vue.use(VueLeaflet);

export default VueLeaflet;