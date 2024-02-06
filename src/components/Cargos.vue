<script setup lang='ts'>
const position = ref([2, 1])
const limitP = [[1, 1], [1, 2], [1, 3], [2, 1], [2, 2], [2, 3], [3, 1], [3, 2], [3, 3]]
// 移动的位置限制
function limit(val: number, max: number, min: number) {
  if (val < min)
    return min
  else if (val > max)
    return max
  else
    return val
}
// 移动
function move(x: number, y: number) {
  position.value[0] += x
  position.value[1] += y
  const Xmax = limitP.map(item => item[0]).sort((a, b) => b - a)[0]
  const Ymax = limitP.map(item => item[1]).sort((a, b) => b - a)[0]
  const Xmin = limitP.map(item => item[0]).sort((a, b) => a - b)[0]
  const Ymin = limitP.map(item => item[1]).sort((a, b) => a - b)[0]
  position.value[0] = limit(position.value[0], Xmax, Xmin)
  position.value[1] = limit(position.value[1], Ymax, Ymin)
}
function keydown(e: KeyboardEvent) {
  switch (e.code) {
    case 'ArrowUp':
      move(0, -1)
      break
    case 'ArrowDown':
      move(0, 1)
      break
    case 'ArrowLeft':
      move(-1, 0)
      break
    case 'ArrowRight':
      move(1, 0)
      break
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
  <div class="absolute" :style="{ left: `${position[0] * 32}px`, top: `${position[1] * 32}px` }">
    <img src="../assets/cargo.png" alt="">
  </div>
</template>

<style lang="less" scoped>

</style>
