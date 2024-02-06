import { ref } from 'vue'

interface Position {
  x: number
  y: number
}
export enum Direction {
  LEFT = 'left',
  RIGHT = 'right',
  UP = 'up',
  DOWN = 'down',
}
// 设置初始位置
export const player = ref({
  x: 4,
  y: 2,
})
export function move(positionObj: Position, cargosPosition: Position, direction: string) {
  if (canMove(positionObj, cargosPosition) === 'no')
    return
  if (direction === 'left') {
    if (canMove(positionObj, cargosPosition) === direction)
      cargosPosition.x -= 1

    positionObj.x -= 1
  }

  if (direction === 'right') {
    if (canMove(positionObj, cargosPosition) === direction)
      cargosPosition.x += 1

    positionObj.x += 1
  }

  if (direction === 'up') {
    if (canMove(positionObj, cargosPosition) === direction)
      cargosPosition.y -= 1

    positionObj.y -= 1
  }
  if (direction === 'down') {
    if (canMove(positionObj, cargosPosition) === direction)
      cargosPosition.y += 1

    positionObj.y += 1
  }
}

// 玩家推箱子
// 只有当玩家和箱子相邻时，玩家才能推动箱子
function canMove(player: Position, cargos: Position) {
  // 位置不能相等
  if (player.x === cargos.x && player.y === cargos.y)
    return 'no'

  if (cargos.x - player.x === 1 && cargos.y === player.y)
    return 'right'

  if (cargos.x - player.x === -1 && cargos.y === player.y)
    return 'left'

  if (cargos.y - player.y === 1 && cargos.x === player.x)
    return 'down'

  if (cargos.y - player.y === -1 && cargos.x === player.x)
    return 'up'
}
