import { cargosPosition } from './cargo'
import { getTarget } from './target'

export const isWin = computed(() => {
  const target = getTarget()
  return cargosPosition.value.x === target.x && cargosPosition.value.y === target.y
})
