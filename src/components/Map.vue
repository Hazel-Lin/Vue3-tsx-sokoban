<script setup lang="ts">
import { getMap, setMap } from '~/game/map'

const newMap = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 2, 2, 2, 2, 2, 1],
  [1, 2, 2, 2, 2, 2, 1],
  [1, 2, 2, 2, 2, 2, 1],
  [1, 2, 2, 2, 2, 2, 1],
  [1, 2, 2, 2, 2, 2, 1],
  [1, 2, 2, 2, 2, 2, 1],
  [1, 1, 1, 1, 1, 1, 1],
]
setMap(newMap)
const map = getMap()
</script>

<template>
  <div>
    <div v-for="(_, i) in map" :key="i" class="flex">
      <div v-for="(__, j) in map[i]" :key="j">
        <img v-if="map[i][j] === 2" src="../assets/floor.png" alt="">
        <img v-else src="../assets/wall.png" alt="">
      </div>
    </div>
  </div>
</template>
