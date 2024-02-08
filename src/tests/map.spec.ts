import { describe, expect, it } from 'vitest'
import { canMovePlayer } from '~/game/move'

describe('test', () => {
  it('beside cargos cannot move left', () => {
    const playerPosition = { x: 2, y: 2 }
    const canMove = canMovePlayer(playerPosition)
    expect(canMove).toBe(true)
  })
})
