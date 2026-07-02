import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Twitter, Download, Sparkles } from 'lucide-react'
import { useTypewriter } from '../../hooks/useTypewriter'
import { personalInfo } from '../../data/portfolio'

const floatingShapes = [
  { size: 60, x: '10%', y: '20%', delay: 0, color: 'rgba(0,212,255,0.1)', duration: 8 },
  { size: 40, x: '85%', y: '15%', delay: 1, color: 'rgba(124,58,237,0.15)', duration: 10 },
  { size: 80, x: '75%', y: '70%', delay: 2, color: 'rgba(6,182,212,0.08)', duration: 12 },
  { size: 30, x: '20%', y: '75%', delay: 0.5, color: 'rgba(236,72,153,0.1)', duration: 9 },
  { size: 50, x: '50%', y: '85%', delay: 1.5, color: 'rgba(0,212,255,0.07)', duration: 11 },
]

export function Hero() {
  const typedText = useTypewriter(personalInfo.taglines, 80, 40, 2500)

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(ellipse 80% 80% at 50% -20%, rgba(0,212,255,0.08) 0%, transparent 60%), radial-gradient(ellipse 60% 60% at 80% 50%, rgba(124,58,237,0.08) 0%, transparent 60%)',
        }}
      />

      {/* Grid background */}
      <div className="absolute inset-0 bg-grid opacity-20 z-0" />

      {/* Floating shapes */}
      {floatingShapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border z-0"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
            background: shape.color,
            borderColor: shape.color,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      <div className="container-max relative z-10 pt-20">
        <div className="flex flex-col lg:flex-row items-center gap-16 justify-center">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-cyan-400/20 mb-6 text-sm"
            >
              <Sparkles size={14} className="text-cyan-400" />
              <span className="text-gray-300">Available for opportunities</span>
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black mb-4 leading-tight"
            >
              Hi, I'm{' '}
              <span
                className="gradient-text animate-gradient"
                style={{ backgroundSize: '300% 300%' }}
              >
                Raghul
              </span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-12 mb-4 flex items-center justify-center lg:justify-start"
            >
              <p className="text-xl sm:text-2xl text-gray-300 font-mono">
                <span className="text-cyan-400">&gt;</span>{' '}
                <span>{typedText}</span>
                <span className="animate-pulse text-cyan-400">|</span>
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              {personalInfo.bio}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.a
                href="#projects"
                className="btn-primary text-white flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Sparkles size={16} />
                View Projects
              </motion.a>
              <motion.a
                href="#contact"
                className="btn-secondary text-white flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={16} />
                Download CV
              </motion.a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {[
                { icon: Github, href: personalInfo.github, label: 'GitHub' },
                { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
                { icon: Twitter, href: personalInfo.twitter, label: 'Twitter' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -4 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-11 h-11 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-colors"
                  style={{
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                  title={label}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* 3D Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-shrink-0"
          >
            <ProfileCard />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-gray-500 font-mono uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={16} className="text-cyan-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function ProfileCard() {
  return (
    <motion.div
      whileHover={{ rotateY: 5, rotateX: -5, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="relative w-72 h-80 rounded-2xl overflow-hidden"
      style={{
        transformStyle: 'preserve-3d',
        background: 'linear-gradient(135deg, rgba(0,212,255,0.05) 0%, rgba(124,58,237,0.05) 100%)',
        border: '1px solid rgba(255,255,255,0.08)',
        boxShadow: '0 25px 50px rgba(0,0,0,0.5), 0 0 80px rgba(0,212,255,0.05)',
      }}
    >
      {/* Card glow */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(0,212,255,0.15) 0%, transparent 60%)',
        }}
      />

      {/* Avatar area */}
      <div className="flex flex-col items-center justify-center h-full gap-4 relative z-10 p-6">
        {/* Avatar */}
        <div className="relative">
          <motion.div
            className="w-28 h-28 rounded-2xl flex items-center justify-center text-5xl font-black relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #00d4ff20, #7c3aed20)',
              border: '2px solid rgba(0,212,255,0.3)',
            }}
            animate={{
              boxShadow: [
                '0 0 20px rgba(0,212,255,0.2)',
                '0 0 40px rgba(124,58,237,0.3)',
                '0 0 20px rgba(0,212,255,0.2)',
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <span className="gradient-text">R</span>
            {/* Shimmer */}
            <motion.div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.05) 50%, transparent 70%)',
                backgroundSize: '200% 200%',
              }}
              animate={{ backgroundPosition: ['-200% -200%', '200% 200%'] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
            />
          </motion.div>

          {/* Status badge */}
          <div className="absolute -bottom-2 -right-2 flex items-center gap-1 px-2 py-1 rounded-full bg-green-500/20 border border-green-400/30 text-xs text-green-400">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Open
          </div>
        </div>

        {/* Info */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-white mb-1">Raghul</h3>
          <p className="text-sm text-gray-400 mb-3">AI/ML Engineer</p>
          <div className="flex gap-2 justify-center flex-wrap">
            {['Python', 'React', 'YOLOv8'].map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded text-xs font-mono"
                style={{
                  background: 'rgba(0,212,255,0.1)',
                  border: '1px solid rgba(0,212,255,0.2)',
                  color: '#00d4ff',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 w-full mt-2">
          {[
            { label: 'Projects', value: '12+' },
            { label: 'Models', value: '5' },
            { label: 'Awards', value: '3' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-2 rounded-lg"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <p className="text-sm font-bold gradient-text">{stat.value}</p>
              <p className="text-xs text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
