<script setup lang="ts">
import { type Component, reactive } from 'vue'
import { type Element, type Map, setupMap } from '../game'
import Wall from './Wall.vue'
import Floor from './Floor.vue'
import Empty from './Empty.vue'

const map = reactive({} as Map)
setupMap(map)

const mapElement: Record<string, Component> = {
  Wall,
  Floor,
  Empty,
}

function getElementComponent(element: Element) {
  return mapElement[element.name]
}
</script>

<template>
  <div class="map">
    <div v-for="row in map.data" :key="row" class="row">
      <div v-for="j in row" :key="j" class="col">
        <component :is="getElementComponent(j)" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.row {
  display: flex;
}

.col img {
  display: block;
}
</style>
