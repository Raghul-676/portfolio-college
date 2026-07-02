import { motion } from 'framer-motion'
import { Heart, Github, Linkedin, Twitter, ArrowUp } from 'lucide-react'

export function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer
      className="relative py-10 px-4 border-t"
      style={{ borderColor: 'rgba(255,255,255,0.06)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo + credit */}
          <div className="flex flex-col sm:flex-row items-center gap-2 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center text-sm font-black text-white"
                style={{ background: 'linear-gradient(135deg, #00d4ff, #7c3aed)' }}
              >
                R
              </div>
              <span className="font-semibold text-gray-300">Raghul</span>
            </div>
            <span className="hidden sm:block text-gray-700">·</span>
            <span className="flex items-center gap-1">
              Built with <Heart size={12} className="text-pink-500 mx-0.5" /> using React & Framer Motion
            </span>
          </div>

          {/* Nav links */}
          <div className="flex items-center gap-4 text-xs text-gray-500">
            {['About', 'Projects', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="hover:text-cyan-400 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Social + scroll top */}
          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: '#', label: 'GitHub' },
              { icon: Linkedin, href: '#', label: 'LinkedIn' },
              { icon: Twitter, href: '#', label: 'Twitter' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                whileHover={{ scale: 1.2, y: -2 }}
                className="text-gray-600 hover:text-gray-300 transition-colors"
              >
                <Icon size={16} />
              </motion.a>
            ))}

            <motion.button
              onClick={scrollTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="ml-2 w-8 h-8 rounded-lg flex items-center justify-center text-gray-500 hover:text-white transition-all"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <ArrowUp size={14} />
            </motion.button>
          </div>
        </div>

        <div className="text-center mt-6 text-xs text-gray-700">
          © {new Date().getFullYear()} Raghul. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
