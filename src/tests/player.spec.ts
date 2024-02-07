import { describe, expect, it } from 'vitest'
import { createPlayer, getPlayer, setupPlayer } from '../game/player'
import { move } from '../game/move'

// left x - 1
// right x + 1
// up y - 1
// down y + 1
describe('test', () => {
  it('player move to left', () => {
    setupPlayer(createPlayer({ x: 3, y: 2 }))
    move('left')
    expect(getPlayer().x).toBe(2)
  })
  it('move up', () => {
    setupPlayer(createPlayer({ x: 3, y: 2 }))
    move('up')
    expect(getPlayer().y).toBe(1)
  })
})
