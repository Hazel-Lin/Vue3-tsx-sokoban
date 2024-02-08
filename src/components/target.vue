<script setup lang='ts'>
import { getTarget, setupTarget } from '~/game/target'
import targetImg from '~/assets/target.png'

setupTarget({ x: 1, y: 3 })
const t = getTarget()
const { posStyle } = usePosition(t)
</script>

<template>
  <div class="absolute" :style="posStyle">
    <img :src="targetImg" alt="">
  </div>
</template>
