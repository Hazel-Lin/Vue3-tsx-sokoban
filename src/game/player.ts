interface PlayerPosition {
  x: number
  y: number
}
let playerPosition: PlayerPosition
// 创建玩家
export function createPlayer({ x, y }: { x: number, y: number }) {
  return {
    x,
    y,
  }
}
export function setupPlayer(play: PlayerPosition) {
  playerPosition = play
}

export function getPlayer() {
  return playerPosition
}
