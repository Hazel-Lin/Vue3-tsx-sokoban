<script setup lang="ts">
import wallImg from '../assets/wall.png'
import floorImg from '../assets/floor.png'
import { getMap, isWall, setMap } from '~/game/map'

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
        <img :src="isWall(map[i][j]) ? wallImg : floorImg" alt="">
      </div>
    </div>
  </div>
</template>
