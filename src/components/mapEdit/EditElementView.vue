<script setup lang="ts">
import { computed } from 'vue'
import { keeperEditElement } from '../../composables/mapEdit/keeper'
import { cargoEditElement } from '../../composables/mapEdit/cargo'
import { placePointEditElement } from '../../composables/mapEdit/placePoint'
import { tileEditElements } from '../../composables/mapEdit/tile'
import { currentSelectedEditElement } from '../../composables/mapEdit/editElement'
import EditElement from './EditElement.vue'

const selectedEditElement = computed(() => {
  if (!currentSelectedEditElement.value)
    return '没有选中'

  return currentSelectedEditElement.value.title
})

const editElements = {
  tiles: tileEditElements,
  other: [keeperEditElement, cargoEditElement, placePointEditElement],
}
</script>

<template>
  <div>
    <div class="flex">
      <template v-for="editElement in editElements.tiles" :key="editElement">
        <EditElement :edit-element="editElement" />
      </template>
    </div>
    <div class="flex">
      <template v-for="editElement in editElements.other" :key="editElement">
        <EditElement :edit-element="editElement" />
      </template>
    </div>

    <div>currentEditElement: {{ selectedEditElement }}</div>
  </div>
</template>

<style scoped></style>
