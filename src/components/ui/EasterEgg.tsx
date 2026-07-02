import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a']

export function EasterEgg() {
  const [keys, setKeys] = useState<string[]>([])
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      setKeys((prev) => {
        const next = [...prev, e.key].slice(-KONAMI.length)
        if (next.join(',') === KONAMI.join(',')) {
          setShow(true)
          setTimeout(() => setShow(false), 4000)
        }
        return next
      })
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 50 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[9998] glass rounded-2xl px-8 py-5 text-center"
          style={{
            border: '1px solid rgba(0,212,255,0.4)',
            boxShadow: '0 0 40px rgba(0,212,255,0.3)',
            background: 'rgba(0,0,0,0.9)',
          }}
        >
          <p className="text-2xl mb-2">🎉 You found it!</p>
          <p className="text-sm text-cyan-400 font-mono">Konami code unlocked</p>
          <p className="text-xs text-gray-400 mt-1">You have excellent taste in easter eggs ✨</p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
