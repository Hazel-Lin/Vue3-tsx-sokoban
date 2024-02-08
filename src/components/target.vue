<script setup lang='ts'>
import { getTarget, setupTarget } from '~/game/target'

setupTarget({ x: 1, y: 3 })
const t = getTarget()
const { posStyle } = usePosition(t)
</script>

<template>
  <div class="absolute" :style="posStyle">
    <img src="../assets/target.png" alt="">
  </div>
</template>
