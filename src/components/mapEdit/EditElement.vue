<script setup lang="ts">
import {
  type EditElement,
  setCurrentSelectedElement,
} from '../../composables/mapEdit/editElement'

const props = defineProps<{
  editElement: EditElement
}>()

function handleClick() {
  setCurrentSelectedElement(props.editElement)
}
</script>

<template>
  <div class="m-2" @click="handleClick">
    <img class="block cursor-pointer" :src="editElement.imgSrc">
    <h2>{{ editElement.title }}</h2>
  </div>
</template>

<style scoped></style>
