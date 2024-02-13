import { getMap, isWall } from './map'
import { getPlayer } from './player'
import type { Position } from '~/types'
import { cargosPosition } from '~/game/cargo'

export enum Direction {
  LEFT = 'left',
  RIGHT = 'right',
  UP = 'up',
  DOWN = 'down',
}

export function canMovePlayer(playerPosition: Position) {
  const map = getMap()
  const x = playerPosition.x
  const y = playerPosition.y
  if (!isWall(map[y][x]))
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
export function calcPositionRight(positionObj: Position) {
  return {
    x: positionObj.x + 1,
    y: positionObj.y,
  }
}
export function calcPositionDown(positionObj: Position) {
  return {
    x: positionObj.x,
    y: positionObj.y + 1,
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
  const playerPosition = ref(getPlayer())
  if (direction === Direction.LEFT) {
    if (!canMovePlayer(calcPositionLeft(playerPosition.value)))
      return
    if (canMove(playerPosition.value, cargosPosition.value, direction)) {
      if (!canMovePlayer(calcPositionLeft(cargosPosition.value)))
        return
      cargosPosition.value.x -= 1
    }
    playerPosition.value.x -= 1
  }
  if (direction === Direction.UP) {
    if (!canMovePlayer(calcPositionUp(playerPosition.value)))
      return
    if (canMove(playerPosition.value, cargosPosition.value, direction)) {
      if (!canMovePlayer(calcPositionUp(cargosPosition.value)))
        return
      cargosPosition.value.y -= 1
    }
    playerPosition.value.y -= 1
  }
  if (direction === Direction.RIGHT) {
    if (!canMovePlayer(calcPositionRight(playerPosition.value)))
      return
    if (canMove(playerPosition.value, cargosPosition.value, direction)) {
      if (!canMovePlayer(calcPositionRight(cargosPosition.value)))
        return
      cargosPosition.value.x += 1
    }
    playerPosition.value.x += 1
  }
  if (direction === Direction.DOWN) {
    if (!canMovePlayer(calcPositionDown(playerPosition.value)))
      return
    if (canMove(playerPosition.value, cargosPosition.value, direction)) {
      if (!canMovePlayer(calcPositionDown(cargosPosition.value)))
        return
      cargosPosition.value.y += 1
    }
    playerPosition.value.y += 1
  }
}
