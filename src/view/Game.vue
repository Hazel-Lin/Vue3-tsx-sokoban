<script setup lang="ts">
const game = ref(createGame({ level: 1 }))
setupGame(game.value)

onMounted(() => {
  startGame()
})

function handleNextCheckpoint() {
  startNextLevel()
}
</script>

<template>
  <div class="relative">
    <Map />
    <PlacePoints />
    <Player />
    <Cargos />
    <div v-show="game.isWin">
      <button class="bg-red-500" @click="handleNextCheckpoint">
        下一关
      </button>
    </div>
  </div>
</template>

<style lang="less" scoped>

</style>
