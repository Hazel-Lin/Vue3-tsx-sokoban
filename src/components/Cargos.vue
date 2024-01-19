<script setup lang="ts">
import { reactive } from 'vue'
import { type Cargo, setupCargos } from '../game'
import CargoComp from './Cargo.vue'

const cargos = reactive([] as Cargo[])
setupCargos(cargos)
</script>

<template>
  <CargoComp v-for="item in cargos" :key="item.id" :data="item" />
</template>

<style scoped></style>
