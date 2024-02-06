import { describe, expect, it } from 'vitest'
import { move } from '../game/player'

// left x - 1
// right x + 1
// up y - 1
// down y + 1
describe('test', () => {
  it('beside cargos move left', () => {
    const positionState = { x: 2, y: 1 }
    const cargosPosition = { x: 1, y: 1 }

    move(positionState, cargosPosition, 'left')
    expect(cargosPosition.x).toBe(0)
    expect(positionState.x).toBe(1)
  })
  it('beside cargos cannot move left', () => {
    const cargosPosition3 = { x: 2, y: 1 }
    const positionState3 = { x: 3, y: 1 }
    move(positionState3, cargosPosition3, 'left')
    expect(cargosPosition3.x).toBe(1)
    expect(positionState3.x).toBe(3)
  })
  it('move up', () => {
    const positionState = { x: 1, y: 2 }
    const cargosPosition = { x: 1, y: 1 }
    move(positionState, cargosPosition, 'up')
    expect(positionState.y).toBe(1)
    expect(cargosPosition.y).toBe(0)
  })

  it('can not have same position', () => {
    const positionState = { x: 1, y: 1 }
    const cargosPosition = { x: 1, y: 1 }
    move(positionState, cargosPosition, 'up')
    expect(positionState.y).toBe(1)
    expect(cargosPosition.y).toBe(1)
  })
})
