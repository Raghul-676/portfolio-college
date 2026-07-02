import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { skills } from '../../data/portfolio'

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, delay }}
      className="mb-4"
    >
      <div className="flex justify-between mb-1.5">
        <span className="text-sm text-gray-300 font-medium">{name}</span>
        <span className="text-xs font-mono" style={{ color }}>{level}%</span>
      </div>
      <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${color}, ${color}80)`,
            boxShadow: `0 0 8px ${color}60`,
          }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 0.8, delay: delay + 0.2, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  )
}

function CircularProgress({ level, color, size = 80 }: { level: number; color: string; size?: number }) {
  const circumference = 2 * Math.PI * 30
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 70 70" style={{ transform: 'rotate(-90deg)' }}>
        <circle cx="35" cy="35" r="30" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="4" />
        <motion.circle
          cx="35"
          cy="35"
          r="30"
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={isInView ? { strokeDashoffset: circumference - (level / 100) * circumference } : {}}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
          style={{ filter: `drop-shadow(0 0 6px ${color})` }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xs font-mono font-bold" style={{ color }}>{level}%</span>
      </div>
    </div>
  )
}

export function Skills() {
  const [activeCategory, setActiveCategory] = useState(skills[0].category)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const activeSkill = skills.find((s) => s.category === activeCategory)!

  return (
    <section id="skills" className="section-padding relative">
      <div
        className="absolute inset-0 opacity-5"
        style={{ background: 'radial-gradient(ellipse at 20% 50%, #00d4ff 0%, transparent 60%)' }}
      />

      <div className="container-max relative">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-3 block">What I know</span>
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Across AI/ML, backend systems, and frontend — built to production standards.
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {skills.map((skill) => (
            <motion.button
              key={skill.category}
              onClick={() => setActiveCategory(skill.category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2`}
              style={
                activeCategory === skill.category
                  ? {
                      background: `${skill.color}20`,
                      border: `1px solid ${skill.color}60`,
                      color: skill.color,
                      boxShadow: `0 0 20px ${skill.color}20`,
                    }
                  : {
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: '#9ca3af',
                    }
              }
            >
              <span>{skill.icon}</span>
              {skill.category}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills display */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Bar chart */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="glass rounded-2xl p-6"
            style={{ border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span>{activeSkill.icon}</span>
              {activeSkill.category} Proficiency
            </h3>
            {activeSkill.items.map((item, i) => (
              <SkillBar
                key={item.name}
                name={item.name}
                level={item.level}
                color={activeSkill.color}
                delay={i * 0.08}
              />
            ))}
          </motion.div>

          {/* Circular progress + overview */}
          <motion.div
            key={activeCategory + '-circ'}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-4"
          >
            {/* Circular indicators */}
            <div
              className="glass rounded-2xl p-6"
              style={{ border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <h3 className="text-lg font-bold text-white mb-4">Quick View</h3>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
                {activeSkill.items.map((item) => (
                  <div key={item.name} className="flex flex-col items-center gap-2">
                    <CircularProgress level={item.level} color={activeSkill.color} />
                    <span className="text-xs text-gray-400 text-center leading-tight">{item.name.split(' ')[0]}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* All categories overview */}
            <div
              className="glass rounded-2xl p-6"
              style={{ border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <h3 className="text-lg font-bold text-white mb-4">All Domains</h3>
              <div className="space-y-3">
                {skills.map((skill) => {
                  const avg = Math.round(skill.items.reduce((a, b) => a + b.level, 0) / skill.items.length)
                  return (
                    <motion.button
                      key={skill.category}
                      onClick={() => setActiveCategory(skill.category)}
                      whileHover={{ x: 4 }}
                      className="w-full flex items-center gap-3 group"
                    >
                      <span className="text-xl w-8">{skill.icon}</span>
                      <div className="flex-1">
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-gray-300 font-medium">{skill.category}</span>
                          <span className="text-xs font-mono" style={{ color: skill.color }}>{avg}%</span>
                        </div>
                        <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full rounded-full"
                            style={{ width: `${avg}%`, background: skill.color }}
                            animate={{ opacity: activeCategory === skill.category ? 1 : 0.5 }}
                          />
                        </div>
                      </div>
                    </motion.button>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tech icons strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12"
        >
          <p className="text-center text-xs text-gray-500 font-mono uppercase tracking-widest mb-6">Technologies I use daily</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Python', 'React', 'TypeScript', 'FastAPI', 'YOLOv8', 'LangChain',
              'PyTorch', 'OpenCV', 'Node.js', 'TailwindCSS', 'Git', 'Docker',
              'MongoDB', 'PostgreSQL', 'Framer Motion', 'Three.js'
            ].map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + i * 0.03 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-3 py-1.5 rounded-lg text-sm font-mono text-gray-400 cursor-default"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
