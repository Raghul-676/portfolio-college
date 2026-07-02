import { useEffect, useRef } from 'react'

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const pos = useRef({ x: 0, y: 0 })
  const dotPos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches
    if (isMobile) return

    const move = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX - 3 + 'px'
        dotRef.current.style.top = e.clientY - 3 + 'px'
      }
    }

    const animateCursor = () => {
      dotPos.current.x += (pos.current.x - dotPos.current.x) * 0.12
      dotPos.current.y += (pos.current.y - dotPos.current.y) * 0.12

      if (cursorRef.current) {
        cursorRef.current.style.left = dotPos.current.x - 10 + 'px'
        cursorRef.current.style.top = dotPos.current.y - 10 + 'px'
      }

      requestAnimationFrame(animateCursor)
    }

    const handleHover = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = 'scale(2)'
        cursorRef.current.style.borderColor = 'rgba(124, 58, 237, 0.8)'
      }
    }

    const handleLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = 'scale(1)'
        cursorRef.current.style.borderColor = 'rgba(0, 212, 255, 0.8)'
      }
    }

    document.querySelectorAll('a, button, [data-hover]').forEach((el) => {
      el.addEventListener('mouseenter', handleHover)
      el.addEventListener('mouseleave', handleLeave)
    })

    window.addEventListener('mousemove', move)
    animateCursor()

    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className="custom-cursor hidden md:block"
        style={{ transition: 'transform 0.2s ease, border-color 0.2s ease' }}
      />
      <div ref={dotRef} className="custom-cursor-dot hidden md:block" />
    </>
  )
}
