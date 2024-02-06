<script setup lang="ts">
const map
= [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 2, 2, 2, 2, 2, 1],
  [1, 2, 2, 2, 2, 2, 1],
  [1, 2, 2, 2, 2, 2, 1],
  [1, 2, 2, 2, 2, 2, 1],
  [1, 2, 2, 2, 2, 2, 1],
  [1, 2, 2, 2, 2, 2, 1],
  [1, 1, 1, 1, 1, 1, 1],
]
</script>

<template>
  <div>
    <div v-for="(row, i) in map" :key="i" class="flex">
      <div v-for="(col, j) in map[i]" :key="j">
        <img v-if="map[i][j] === 2" src="../assets/floor.png" alt="">
        <img v-else src="../assets/wall.png" alt="">
      </div>
    </div>
  </div>
</template>
