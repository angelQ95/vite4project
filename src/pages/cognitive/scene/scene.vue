<template>
    <div id="map">

    </div>
</template>

<script setup lang="ts">
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';

new Map({
    target: 'map',
    layers: [
        new TileLayer({
            source: new XYZ({
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        })
    ],
    view: new View({
        center: [0, 0],
        zoom: 2
    })
});
</script>

<style scoped>
#map{
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
}
</style>