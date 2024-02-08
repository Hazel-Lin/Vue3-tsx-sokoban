<script setup lang='ts'>
import { getTarget, setupTarget } from '~/game/target'

setupTarget({ x: 1, y: 3 })
const t = getTarget()

function createTargetStyle() {
  return {
    left: `${t.x * 32}px`,
    top: `${t.y * 32}px`,
  }
}
</script>

<template>
  <div class="absolute" :style="createTargetStyle()">
    <img src="../assets/target.png" alt="">
  </div>
</template>
