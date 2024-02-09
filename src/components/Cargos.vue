<script setup lang='tsx'>
import cargoTargetImg from '../assets/cargo_on_target.png'
import cargoImg from '../assets/cargo.png'
import { cargosPosition } from '~/game/cargo'
import { isWin } from '~/game/index'

const { posStyle } = usePosition(cargosPosition.value)
function CargoComp() {
  return (
    <div className="absolute" style={posStyle.value}>
      <img src={isWin.value ? cargoTargetImg : cargoImg} alt="" />
    </div>
  )
}
watch(() => isWin.value, (v) => {
  const { startConfetti } = useConfetti()
  v && startConfetti()
})
</script>

<template>
  <CargoComp />
</template>
