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
  x: 1,
  y: 1,
})
export function move(positionObj: Position, direction: string) {
  if (direction === 'left')
    positionObj.x -= 1

  if (direction === 'right')
    positionObj.x += 1

  if (direction === 'up')
    positionObj.y -= 1

  if (direction === 'down')
    positionObj.y += 1
}
