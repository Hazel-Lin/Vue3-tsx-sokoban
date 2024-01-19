<script setup lang="ts">
import { useCargo } from '../../composables/mapEdit/cargo'
import CargoComp from './Cargo.vue'

const { cargos } = useCargo()
</script>

<template>
  <CargoComp v-for="item in cargos" :key="item.id" :data="item" />
</template>

<style scoped></style>
