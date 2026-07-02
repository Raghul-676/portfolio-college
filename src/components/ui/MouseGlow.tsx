import { useMousePosition } from '../../hooks/useMousePosition'

export function MouseGlow() {
  const { x, y } = useMousePosition()

  return (
    <div
      className="mouse-glow hidden md:block"
      style={{ left: x, top: y }}
    />
  )
}
