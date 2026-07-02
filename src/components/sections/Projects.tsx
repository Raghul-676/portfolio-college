import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'
import { projects } from '../../data/portfolio'

const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [flipped, setFlipped] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="perspective-1000 h-72 cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <motion.div
        className="relative w-full h-full preserve-3d"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 80, damping: 15 }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden"
          style={{
            background: `linear-gradient(135deg, rgba(0,0,0,0.8), rgba(0,0,0,0.6))`,
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          {/* Gradient top bar */}
          <div className={`h-1 w-full bg-gradient-to-r ${project.gradient}`} />

          <div className="p-6 h-full flex flex-col">
            {/* Icon + category */}
            <div className="flex items-start justify-between mb-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                style={{ background: `${project.color}15`, border: `1px solid ${project.color}30` }}
              >
                {project.icon}
              </div>
              <span
                className="text-xs px-3 py-1 rounded-full font-mono"
                style={{ background: `${project.color}15`, color: project.color, border: `1px solid ${project.color}30` }}
              >
                {project.category}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>

            {/* Description */}
            <p className="text-sm text-gray-400 leading-relaxed flex-1 line-clamp-3">{project.description}</p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-1.5 mt-4">
              {project.tech.slice(0, 4).map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-0.5 rounded font-mono text-gray-400"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Flip hint */}
            <div className="mt-3 flex items-center gap-1 text-xs text-gray-600">
              <ArrowUpRight size={12} />
              <span>Click to flip</span>
            </div>
          </div>

          {/* Hover glow */}
          <motion.div
            className="absolute inset-0 rounded-2xl opacity-0 pointer-events-none"
            whileHover={{ opacity: 1 }}
            style={{
              background: `radial-gradient(ellipse at 50% 0%, ${project.color}10 0%, transparent 60%)`,
              border: `1px solid ${project.color}30`,
            }}
          />
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl overflow-hidden flex flex-col"
          style={{
            background: `linear-gradient(135deg, ${project.color}15, rgba(0,0,0,0.9))`,
            border: `1px solid ${project.color}40`,
          }}
        >
          <div className={`h-1 w-full bg-gradient-to-r ${project.gradient}`} />
          <div className="p-6 flex flex-col h-full">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">{project.icon}</span>
              <h3 className="text-lg font-bold text-white">{project.title}</h3>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed flex-1">{project.description}</p>

            <div className="space-y-2 my-4">
              <p className="text-xs text-gray-500 font-mono uppercase tracking-wider">Full Stack</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-0.5 rounded font-mono"
                    style={{
                      background: `${project.color}15`,
                      color: project.color,
                      border: `1px solid ${project.color}30`,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-3 mt-auto">
              <motion.a
                href={project.github}
                onClick={(e) => e.stopPropagation()}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium text-white transition-all"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}
              >
                <Github size={15} /> GitHub
              </motion.a>
              <motion.a
                href={project.demo}
                onClick={(e) => e.stopPropagation()}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium text-white transition-all"
                style={{
                  background: `linear-gradient(135deg, ${project.color}, ${project.color}80)`,
                  boxShadow: `0 0 15px ${project.color}30`,
                }}
              >
                <ExternalLink size={15} /> Live Demo
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" className="section-padding relative">
      <div
        className="absolute inset-0 opacity-5"
        style={{ background: 'radial-gradient(ellipse at 80% 50%, #7c3aed 0%, transparent 60%)' }}
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
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-3 block">What I've built</span>
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Click any card to flip it and see the full details, tech stack, and links.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300"
              style={
                activeFilter === cat
                  ? {
                      background: 'linear-gradient(135deg, rgba(0,212,255,0.2), rgba(124,58,237,0.2))',
                      border: '1px solid rgba(0,212,255,0.4)',
                      color: '#00d4ff',
                    }
                  : {
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: '#9ca3af',
                    }
              }
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} index={i} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View more CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/Raghul-676"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary text-white inline-flex items-center gap-2"
          >
            <Github size={16} />
            View All on GitHub
            <ArrowUpRight size={14} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
