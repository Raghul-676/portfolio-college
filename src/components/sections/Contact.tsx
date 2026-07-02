import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Send, Github, Linkedin, Twitter, Mail, MapPin, MessageSquare, CheckCircle } from 'lucide-react'
import { personalInfo } from '../../data/portfolio'

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault()
    setSending(true)
    await new Promise((r) => setTimeout(r, 1800))
    setSending(false)
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setFormState({ name: '', email: '', subject: '', message: '' })
  }

  const socials = [
    { icon: Github, href: personalInfo.github, label: 'GitHub', color: '#ffffff' },
    { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn', color: '#0077b5' },
    { icon: Twitter, href: personalInfo.twitter, label: 'Twitter', color: '#1da1f2' },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email', color: '#00d4ff' },
  ]

  return (
    <section id="contact" className="section-padding relative">
      <div
        className="absolute inset-0 opacity-5"
        style={{ background: 'radial-gradient(ellipse at 50% 100%, #7c3aed 0%, transparent 60%)' }}
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
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-3 block">Get in touch</span>
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Open to AI/ML roles, internships, freelance projects, and interesting collaborations. Let's build something great.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Info cards */}
            {[
              {
                icon: Mail,
                label: 'Email',
                value: personalInfo.email,
                color: '#00d4ff',
                href: `mailto:${personalInfo.email}`,
              },
              {
                icon: MapPin,
                label: 'Location',
                value: personalInfo.location,
                color: '#7c3aed',
                href: null,
              },
              {
                icon: MessageSquare,
                label: 'Response Time',
                value: 'Within 24 hours',
                color: '#06b6d4',
                href: null,
              },
            ].map(({ icon: Icon, label, value, color, href }) => (
              <motion.div
                key={label}
                whileHover={{ x: 4 }}
                className="glass rounded-xl p-4 flex items-center gap-4"
                style={{ border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: `${color}15`, border: `1px solid ${color}30` }}
                >
                  <Icon size={18} style={{ color }} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">{label}</p>
                  {href ? (
                    <a href={href} className="text-sm text-gray-200 hover:text-cyan-400 transition-colors">
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm text-gray-200">{value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Social icons */}
            <div>
              <p className="text-xs text-gray-500 font-mono uppercase tracking-wider mb-3">Find me on</p>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, href, label, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -4 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-gray-400 transition-all duration-300"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.1)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = color
                      e.currentTarget.style.borderColor = color + '50'
                      e.currentTarget.style.background = color + '15'
                      e.currentTarget.style.boxShadow = `0 0 20px ${color}30`
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#9ca3af'
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                      e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                    title={label}
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability badge */}
            <div
              className="glass rounded-xl p-4"
              style={{ border: '1px solid rgba(34,197,94,0.2)', background: 'rgba(34,197,94,0.05)' }}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm font-medium text-green-400">Available for hire</span>
              </div>
              <p className="text-xs text-gray-400">Open to AI/ML internships, full-time, and freelance projects.</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div
              className="glass rounded-2xl p-6 sm:p-8 relative overflow-hidden"
              style={{ border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <div
                className="absolute top-0 right-0 w-40 h-40 opacity-10 rounded-full pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, #00d4ff, transparent)',
                  transform: 'translate(30%, -30%)',
                }}
              />

              <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>

              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <FormField
                    label="Your Name"
                    name="name"
                    type="text"
                    placeholder="Raghul"
                    value={formState.name}
                    onChange={handleChange}
                  />
                  <FormField
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formState.email}
                    onChange={handleChange}
                  />
                </div>
                <FormField
                  label="Subject"
                  name="subject"
                  type="text"
                  placeholder="Let's collaborate on an AI project..."
                  value={formState.subject}
                  onChange={handleChange}
                />
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1.5">Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl text-sm text-gray-200 placeholder-gray-600 resize-none outline-none transition-all duration-300 focus:border-cyan-400/50"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'rgba(0,212,255,0.4)'
                      e.target.style.boxShadow = '0 0 15px rgba(0,212,255,0.08)'
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255,255,255,0.08)'
                      e.target.style.boxShadow = 'none'
                    }}
                  />
                </div>

                <motion.button
                  onClick={handleSubmit}
                  disabled={sending || sent}
                  whileHover={!sending && !sent ? { scale: 1.02 } : {}}
                  whileTap={!sending && !sent ? { scale: 0.98 } : {}}
                  className="w-full py-3.5 rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition-all duration-300 relative overflow-hidden"
                  style={{
                    background: sent
                      ? 'linear-gradient(135deg, #22c55e, #16a34a)'
                      : 'linear-gradient(135deg, #00d4ff, #7c3aed)',
                    boxShadow: sent
                      ? '0 0 20px rgba(34,197,94,0.3)'
                      : '0 0 20px rgba(0,212,255,0.3)',
                  }}
                >
                  {sending ? (
                    <>
                      <motion.div
                        className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                      />
                      Sending...
                    </>
                  ) : sent ? (
                    <>
                      <CheckCircle size={18} />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function FormField({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
}: {
  label: string
  name: string
  type: string
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) {
  return (
    <div>
      <label className="block text-xs font-medium text-gray-400 mb-1.5">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 rounded-xl text-sm text-gray-200 placeholder-gray-600 outline-none transition-all duration-300"
        style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.08)',
        }}
        onFocus={(e) => {
          e.target.style.borderColor = 'rgba(0,212,255,0.4)'
          e.target.style.boxShadow = '0 0 15px rgba(0,212,255,0.08)'
        }}
        onBlur={(e) => {
          e.target.style.borderColor = 'rgba(255,255,255,0.08)'
          e.target.style.boxShadow = 'none'
        }}
      />
    </div>
  )
}
