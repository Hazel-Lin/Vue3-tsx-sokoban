import type { Position } from '~/types'

const STEP = 32

export function usePosition(pos: Position) {
  const left = computed(() => `${pos.x * STEP}px`)
  const top = computed(() => `${pos.y * STEP}px`)

  const posStyle = computed(() => ({
    left: left.value,
    top: top.value,
  }))
  return {
    posStyle,
  }
}
