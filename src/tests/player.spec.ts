import { describe, expect, it } from 'vitest'
import { move } from '../game/player'

// left x - 1
// right x + 1
// up y - 1
// down y + 1
describe('test', () => {
  it('move left', () => {
    const positionState = { x: 1, y: 1 }
    move(positionState, 'left')
    expect(positionState.x).toBe(0)
  })
  it('move right', () => {
    const positionState = { x: 1, y: 1 }
    move(positionState, 'right')
    expect(positionState.x).toBe(2)
  })
  it('move up', () => {
    const positionState = { x: 1, y: 1 }
    move(positionState, 'up')
    expect(positionState.y).toBe(0)
  })
  it('move down', () => {
    const positionState = { x: 1, y: 1 }
    move(positionState, 'down')
    expect(positionState.y).toBe(2)
  })
})
