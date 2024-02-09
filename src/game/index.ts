import { cargosPosition } from './cargo'
import { getTarget } from './target'

export const isWin = computed(() => {
  const target = ref(getTarget())
  return cargosPosition.value.x === target.value.x && cargosPosition.value.y === target.value.y
})
