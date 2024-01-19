<script setup lang="ts">
import { reactive } from 'vue'
import { type PlacePoint, setupPlacePoints } from '../game'
import PlacePointComp from './PlacePoint.vue'

const placePoints = reactive([] as PlacePoint[])

setupPlacePoints(placePoints)
</script>

<template>
  <PlacePointComp
    v-for="item in placePoints"
    :key="item.id"
    :data="item"
  />
</template>

<style scoped></style>
