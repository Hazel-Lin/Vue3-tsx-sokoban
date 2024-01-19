<script setup lang="ts">
import placePointImg from '../../assets/target.png'
import { usePosition } from '../../composables/position'
import type { PlacePoint } from '../../composables/mapEdit/placePoint'
import {
  usePlacePoint,
} from '../../composables/mapEdit/placePoint'

interface Props {
  data: PlacePoint
}

const props = defineProps<Props>()
const { removePlacePoint } = usePlacePoint()

const { positionStyle } = usePosition(props.data)

function handleDblclick() {
  removePlacePoint(props.data)
}
</script>

<template>
  <div class="absolute" :style="positionStyle" @dblclick="handleDblclick">
    <img class="block cursor-pointer" :src="placePointImg">
  </div>
</template>

<style scoped></style>
