<script setup lang="ts">
import { usePlacePoint } from '../../composables/mapEdit/placePoint'
import PlacePointComp from './PlacePoint.vue'

const { placePoints } = usePlacePoint()
</script>

<template>
  <PlacePointComp
    v-for="item in placePoints"
    :key="item.id"
    :data="item"
  />
</template>

<style scoped></style>
