<script setup lang='ts'>
import keeperImg from '../assets/keeper.png'
import { move } from '~/game/move'
import { createPlayer, getPlayer, setupPlayer } from '~/game/player'

setupPlayer(createPlayer({ x: 3, y: 3 }))
const player = ref(getPlayer())

// 键盘事件
function keydown(e: KeyboardEvent) {
  switch (e.code) {
    case 'ArrowUp':
      move('up')
      break
    case 'ArrowDown':
      move('down')
      break
    case 'ArrowLeft':
      move('left')
      break
    case 'ArrowRight':
      move('right')
      break
  }
}
const { posStyle } = usePosition(player.value)

// 监听键盘事件
onMounted(() => {
  window.addEventListener('keydown', keydown)
})
// 移除监听
onUnmounted(() => {
  window.removeEventListener('keydown', keydown)
})
</script>

<template>
  <div class="absolute" :style="posStyle">
    <img :src="keeperImg" alt="">
  </div>
</template>
