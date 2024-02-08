interface Position {
  x: number
  y: number
}

let _target: Position
// function createInitPosition(x: number, y: number): Position {
//   return {
//     x,
//     y,
//   }
// }

export function setupTarget(target: Position) {
  _target = target
}

export function getTarget() {
  return _target
}
