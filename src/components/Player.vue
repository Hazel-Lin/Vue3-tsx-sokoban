<script setup lang='ts'>
import { move, player } from '~/game/player'
import { cargosPosition } from '~/game/cargos'

// 键盘事件
function keydown(e: KeyboardEvent) {
  switch (e.code) {
    case 'ArrowUp':
      move(player.value, cargosPosition.value, 'up')
      break
    case 'ArrowDown':
      move(player.value, cargosPosition.value, 'down')
      break
    case 'ArrowLeft':
      move(player.value, cargosPosition.value, 'left')
      break
    case 'ArrowRight':
      move(player.value, cargosPosition.value, 'right')
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
