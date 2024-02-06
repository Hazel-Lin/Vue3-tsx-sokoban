<script setup lang='ts'>
import { cargosPosition } from '~/game/cargos'

function createCargosStyle() {
  return {
    left: `${cargosPosition.value.x * 32}px`,
    top: `${cargosPosition.value.y * 32}px`,
  }
}
</script>

<template>
  <div class="absolute" :style="createCargosStyle()">
    <img src="../assets/cargo.png" alt="">
  </div>
</template>
