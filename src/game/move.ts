import { cargosPosition, map } from './map'
import { getPlayer } from './player'

export enum Direction {
  LEFT = 'left',
  RIGHT = 'right',
  UP = 'up',
  DOWN = 'down',
}
interface Position {
  x: number
  y: number
}
export function canMovePlayer(playerPosition: Position) {
  const x = playerPosition.x
  const y = playerPosition.y
  if (map[y][x] === 2)
    return true

  return false
}
export function calcPositionLeft(positionObj: Position) {
  return {
    x: positionObj.x - 1,
    y: positionObj.y,
  }
}
export function calcPositionUp(positionObj: Position) {
  return {
    x: positionObj.x,
    y: positionObj.y - 1,
  }
}
// 玩家推箱子
// 只有当玩家和箱子相邻时，玩家才能推动箱子
function canMove(player: Position, cargos: Position, direction: string) {
  return {
    left: (cargos.x - player.x === -1 && cargos.y === player.y),
    right: (cargos.x - player.x === 1 && cargos.y === player.y),
    up: (cargos.y - player.y === -1 && cargos.x === player.x),
    down: (cargos.y - player.y === 1 && cargos.x === player.x),
  }[direction]
}
export function move(direction: string) {
  const playerPosition = getPlayer()
  if (direction === Direction.LEFT) {
    if (!canMovePlayer(calcPositionLeft(playerPosition)))
      return
    if (canMove(playerPosition, cargosPosition.value, direction)) {
      if (!canMovePlayer(calcPositionLeft(cargosPosition.value)))
        return
      cargosPosition.value.x -= 1
    }
    playerPosition.x -= 1
  }
  if (direction === Direction.UP) {
    if (!canMovePlayer(calcPositionUp(playerPosition)))
      return
    if (canMove(playerPosition, cargosPosition.value, direction)) {
      if (!canMovePlayer(calcPositionUp(cargosPosition.value)))
        return
      cargosPosition.value.y -= 1
    }
    playerPosition.y -= 1
  }
}
