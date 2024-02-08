<script setup lang='ts'>
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
function createPlayerStyle() {
  return {
    left: `${player.value.x * 32}px`,
    top: `${player.value.y * 32}px`,
  }
}
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
  <div class="absolute" :style="createPlayerStyle()">
    <img src="../assets/keeper.png" alt="">
  </div>
</template>
