import { motion } from 'framer-motion'

interface Props {
  onComplete: () => void
}

export function LoadingScreen({ onComplete }: Props) {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gray-950"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      onAnimationComplete={onComplete}
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* Logo animation */}
      <div className="relative mb-8">
        <motion.div
          className="relative w-24 h-24 flex items-center justify-center"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
        >
          {/* Outer ring */}
          <motion.div
            className="absolute inset-0 rounded-2xl border-2 border-cyan-400/30"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          />
          {/* Inner ring */}
          <motion.div
            className="absolute inset-2 rounded-xl border border-purple-500/50"
            animate={{ rotate: -360 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          />
          {/* Core */}
          <motion.div
            className="relative z-10 w-16 h-16 rounded-xl flex items-center justify-center text-3xl font-black gradient-text"
            style={{
              background: 'linear-gradient(135deg, rgba(0,212,255,0.1), rgba(124,58,237,0.1))',
              border: '1px solid rgba(0,212,255,0.3)',
            }}
            animate={{
              boxShadow: [
                '0 0 20px rgba(0,212,255,0.2)',
                '0 0 40px rgba(124,58,237,0.4)',
                '0 0 20px rgba(0,212,255,0.2)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            R
          </motion.div>
        </motion.div>

        {/* Orbiting dots */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-cyan-400"
            style={{ top: '50%', left: '50%' }}
            animate={{
              x: Math.cos((i * 2 * Math.PI) / 3) * 50 - 4,
              y: Math.sin((i * 2 * Math.PI) / 3) * 50 - 4,
              rotate: 360,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      {/* Name */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center mb-8"
      >
        <h1 className="text-3xl font-black gradient-text mb-1 tracking-tight">Raghul</h1>
        <p className="text-gray-400 text-sm font-mono tracking-widest uppercase">AI/ML Engineer</p>
      </motion.div>

      {/* Progress bar */}
      <motion.div
        className="w-48 h-0.5 bg-gray-800 rounded-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <motion.div
          className="h-full loading-bar rounded-full"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.5, delay: 0.3, ease: 'easeInOut' }}
          onAnimationComplete={() => {
            setTimeout(onComplete, 300)
          }}
        />
      </motion.div>

      {/* Status text */}
      <motion.p
        className="mt-4 text-xs text-gray-600 font-mono"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Initializing portfolio...
      </motion.p>
    </motion.div>
  )
}
