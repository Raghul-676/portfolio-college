import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { experience } from '../../data/portfolio'

function ExperienceCard({ item, index }: { item: typeof experience[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative flex gap-6 group"
    >
      {/* Left: timeline */}
      <div className="flex flex-col items-center flex-shrink-0 w-12">
        {/* Icon */}
        <motion.div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-xl z-10 relative"
          style={{
            background: `${item.color}15`,
            border: `2px solid ${item.color}40`,
          }}
          whileHover={{ scale: 1.1 }}
          animate={{ boxShadow: [`0 0 0 0 ${item.color}30`, `0 0 0 8px transparent`] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {item.icon}
        </motion.div>
        {/* Line */}
        {index < experience.length - 1 && (
          <motion.div
            className="w-px flex-1 mt-2"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
            style={{ transformOrigin: 'top', background: `linear-gradient(to bottom, ${item.color}60, transparent)` }}
          />
        )}
      </div>

      {/* Right: content */}
      <div className="flex-1 pb-10">
        <motion.div
          whileHover={{ scale: 1.01, x: 4 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="glass rounded-2xl p-5 relative overflow-hidden"
          style={{ border: `1px solid rgba(255,255,255,0.08)` }}
        >
          {/* Top glow on hover */}
          <div
            className="absolute top-0 left-0 right-0 h-px opacity-50"
            style={{ background: `linear-gradient(90deg, transparent, ${item.color}, transparent)` }}
          />

          <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
            <div>
              <h3 className="text-lg font-bold text-white">{item.title}</h3>
              <p className="text-sm font-medium" style={{ color: item.color }}>{item.company}</p>
            </div>
            <div className="flex items-center gap-2">
              <span
                className="text-xs px-3 py-1 rounded-full font-mono"
                style={{
                  background: `${item.color}15`,
                  color: item.color,
                  border: `1px solid ${item.color}30`,
                }}
              >
                {item.type === 'education' ? '🎓' : item.type === 'hackathon' ? '🏆' : '💼'} {item.period}
              </span>
            </div>
          </div>

          <p className="text-sm text-gray-400 leading-relaxed mb-4">{item.description}</p>

          <div className="flex flex-wrap gap-2">
            {item.highlights.map((h) => (
              <span
                key={h}
                className="text-xs px-2.5 py-1 rounded-lg font-medium"
                style={{
                  background: `${item.color}10`,
                  color: item.color,
                  border: `1px solid ${item.color}25`,
                }}
              >
                {h}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="section-padding relative">
      <div
        className="absolute inset-0 opacity-5"
        style={{ background: 'radial-gradient(ellipse at 20% 80%, #06b6d4 0%, transparent 50%)' }}
      />

      <div className="container-max relative">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-3 block">Background</span>
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            A timeline of the work, learning, and milestones that shaped who I am as an engineer.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          {experience.map((item, index) => (
            <ExperienceCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
