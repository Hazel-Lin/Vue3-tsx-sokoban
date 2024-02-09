<script setup lang='tsx'>
import { getTarget, setupTarget } from '~/game/target'
import targetImg from '~/assets/target.png'

setupTarget({ x: 1, y: 3 })
const t = getTarget()
const { posStyle } = usePosition(t)
function TargetComp() {
  return (
    <div className="absolute" style={posStyle.value}>
      <img src={targetImg} alt="" />
    </div>
  )
}
</script>

<template>
  <TargetComp />
</template>
