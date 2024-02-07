import { ref } from 'vue'

interface PlayerPosition {
  x: number
  y: number
}
let playerPosition: PlayerPosition
// 创建玩家
export function createPlayer({ x, y }: { x: number; y: number }) {
  return {
    x,
    y,
  }
}
export function setupPlayer(play: PlayerPosition) {
  playerPosition = play
}
// 设置玩家初始位置
export const player = ref<PlayerPosition>({
  x: 1,
  y: 1,
})

export function getPlayer() {
  return playerPosition
}
