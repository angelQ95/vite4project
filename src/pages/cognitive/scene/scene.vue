<template>
    <div id="map">
        dadadadwadaw
    </div>
</template>

<script setup lang="ts">
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { onMounted } from 'vue';
onMounted(() => {
    new Map({
        target: 'map',
        layers: [
            new TileLayer({
                source: new OSM(),
            })
        ],
        view: new View({
            center: [0, 0],
            zoom: 2
        })
    });
})

</script>

<style scoped>
#map {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
}
</style>