import confetti from 'canvas-confetti'

const duration = 8 * 1000
const end = Date.now() + duration

function fireworksEffect() {
  confetti({
    particleCount: 7,
    angle: 60,
    spread: 55,
    origin: { x: 0 },
  })
  confetti({
    particleCount: 7,
    angle: 120,
    spread: 55,
    origin: { x: 1 },
  })

  if (Date.now() < end)
    requestAnimationFrame(fireworksEffect)
}

export function useConfetti() {
  const startConfetti = () => {
    fireworksEffect()
  }

  return {
    startConfetti,
  }
}
