<script setup lang='ts'>
import { move, player } from '~/game/player'

// 键盘事件
function keydown(e: KeyboardEvent) {
  switch (e.code) {
    case 'ArrowUp':
      move(player.value, 'up')
      break
    case 'ArrowDown':
      move(player.value, 'down')
      break
    case 'ArrowLeft':
      move(player.value, 'left')
      break
    case 'ArrowRight':
      move(player.value, 'right')
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
