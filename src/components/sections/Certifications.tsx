import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Award } from 'lucide-react'
import { certifications } from '../../data/portfolio'

function CertCard({ cert, index }: { cert: typeof certifications[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="glass rounded-2xl p-5 relative overflow-hidden group cursor-pointer"
      style={{ border: '1px solid rgba(255,255,255,0.08)' }}
    >
      {/* Color bar */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, transparent, ${cert.color}, transparent)` }}
      />

      {/* Corner glow */}
      <div
        className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${cert.color}, transparent)`,
          transform: 'translate(30%, -30%)',
        }}
      />

      <div className="flex items-start gap-4 relative z-10">
        {/* Icon */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
          style={{ background: `${cert.color}15`, border: `1px solid ${cert.color}30` }}
        >
          {cert.icon}
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-white text-sm mb-1 leading-tight">{cert.title}</h3>
          <p className="text-xs text-gray-400 mb-1">{cert.issuer}</p>
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono" style={{ color: cert.color }}>{cert.date}</span>
            <motion.a
              href={cert.credentialUrl}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-500 hover:text-white transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={14} />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function Certifications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="certifications" className="section-padding relative">
      <div
        className="absolute inset-0 opacity-5"
        style={{ background: 'radial-gradient(ellipse at 70% 30%, #ec4899 0%, transparent 50%)' }}
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
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-3 block">Credentials</span>
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Verified credentials from industry-leading platforms and programs.
          </p>
        </motion.div>

        {/* Cert grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => (
            <CertCard key={cert.title} cert={cert} index={i} />
          ))}
        </div>

        {/* Award highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-8"
        >
          <div
            className="glass rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-4 relative overflow-hidden"
            style={{
              border: '1px solid rgba(0,212,255,0.2)',
              background: 'linear-gradient(135deg, rgba(0,212,255,0.05), rgba(124,58,237,0.05))',
            }}
          >
            <div
              className="absolute inset-0 opacity-5"
              style={{ background: 'radial-gradient(ellipse at 0% 50%, #00d4ff, transparent)' }}
            />
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{
                background: 'linear-gradient(135deg, rgba(0,212,255,0.2), rgba(124,58,237,0.2))',
                border: '1px solid rgba(0,212,255,0.3)',
              }}
            >
              <Award size={28} className="text-cyan-400" />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="font-bold text-white text-lg">Top 3 Performer Award</h3>
              <p className="text-gray-400 text-sm">
                Received during MERN Developer Internship at iGenuineLearning for exceptional project delivery,
                code quality, and team collaboration.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
