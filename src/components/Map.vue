<script setup lang="tsx">
import wallImg from '../assets/wall.png'
import floorImg from '../assets/floor.png'
import { getMap, isWall, setMap } from '~/game/map'

const newMap = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 2, 2, 2, 2, 2, 1],
  [1, 2, 2, 2, 2, 2, 1],
  [1, 2, 2, 2, 2, 2, 1],
  [1, 2, 2, 2, 2, 2, 1],
  [1, 2, 2, 2, 2, 2, 1],
  [1, 2, 2, 2, 2, 2, 1],
  [1, 1, 1, 1, 1, 1, 1],
]
setMap(newMap)
const map = getMap()
function MapComp() {
  return (
    <div>
      {map.map((row, i) => (
        <div key={i} className="flex">
          {row.map((cell, j) => (
            <div key={`${i}-${j}`}>
              <img src={isWall(cell) ? wallImg : floorImg} alt="" />
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
</script>

<template>
  <MapComp />
</template>
