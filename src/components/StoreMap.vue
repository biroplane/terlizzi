<template>
  <div id="map">
    <v-text-field class="onMap">Search</v-text-field>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import L from "leaflet";
import "leaflet.markercluster/dist/leaflet.markercluster";
import { OpenStreetMapProvider } from "leaflet-geosearch";

export default {
  data() {
    return {
      osm: null,
      url:
        "https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", //"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      zoom: 14,
      center: [41.129959, 16.542761],
      bounds: [],
      markers: [],
      stores: [],
      provider: new OpenStreetMapProvider()
    };
  },
  async beforeMount() {
    //console.log("Ecco gli stores", stores.data);
  },
  mounted() {
    this.createMap();
  },
  methods: {
    createMap() {
      this.osm = L.map("map", { zoomControl: false }).setView(
        this.center,
        this.zoom
      );
      L.tileLayer(this.url, {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
        maxZoom: 17,
        minZoom: 2,
        tileSize: 512,
        zoomOffset: -1
      }).addTo(this.osm);
    }
  }
};
</script>

<style lang="scss">
#map {
  width: 100% !important;
  height: 100% !important;
  //min-height: 78vh !important;
  z-index: 0;
  .OnMap {
    top: 120px;
    z-index: 999;
  }
}
</style>
