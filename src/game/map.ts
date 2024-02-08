type MapType = number[][]
let map: MapType
function createInitMap(): MapType {
  return [
    [1, 1, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 1, 1],
  ]
}
createInitMap()
export function setMap(newMap: MapType) {
  map = newMap
}
export function getMap() {
  return map
}
