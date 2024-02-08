import type { Position } from '~/types'

let _target: Position

export function setupTarget(target: Position) {
  _target = target
}

export function getTarget() {
  return _target
}
