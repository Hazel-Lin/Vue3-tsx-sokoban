<script setup lang='ts'>
import cargoTargetImg from '../assets/cargo_on_target.png'
import cargoImg from '../assets/cargo.png'
import { cargosPosition } from '~/game/cargo'
import { isWin } from '~/game/index'

const { posStyle } = usePosition(cargosPosition.value)
</script>

<template>
  <div class="absolute" :style="posStyle">
    <img :src="isWin ? cargoTargetImg : cargoImg" alt="">
  </div>
</template>
