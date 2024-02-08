<script setup lang='ts'>
import cargoTargetImg from '../assets/cargo_on_target.png'
import cargoImg from '../assets/cargo.png'
import { cargosPosition } from '~/game/cargo'
import { isWin } from '~/game/index'

function createCargosStyle() {
  return {
    left: `${cargosPosition.value.x * 32}px`,
    top: `${cargosPosition.value.y * 32}px`,
  }
}
</script>

<template>
  <div class="absolute" :style="createCargosStyle()">
    <img :src="isWin ? cargoTargetImg : cargoImg" alt="">
  </div>
</template>
