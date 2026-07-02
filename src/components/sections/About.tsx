import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Calendar, Code2, Brain, Rocket } from 'lucide-react'
import { personalInfo, stats } from '../../data/portfolio'

const timeline = [
  {
    year: '2023',
    title: 'Started B.Tech IT',
    description: 'Joined Sri Eshwar College of Engineering, Tamil Nadu. Discovered passion for AI/ML on day one.',
    icon: '🎓',
    color: '#00d4ff',
  },
  {
    year: '2023',
    title: 'First Steps in AI',
    description: 'Built first computer vision project using OpenCV. Fell in love with making machines see.',
    icon: '👁️',
    color: '#7c3aed',
  },
  {
    year: '2024',
    title: 'MERN Internship',
    description: 'Joined iGenuineLearning as MERN Developer Intern. Received Top 3 Performer Award.',
    icon: '💻',
    color: '#06b6d4',
  },
  {
    year: '2024',
    title: 'ShieldVision Pro',
    description: 'Deployed YOLOv8-based surveillance system achieving 95% accuracy in production.',
    icon: '🛡️',
    color: '#ec4899',
  },
  {
    year: '2024',
    title: 'HackRx Hackathon',
    description: 'Built Insurance Policy Intelligence system for Bajaj Finserv using LLM/RAG pipelines.',
    icon: '🏆',
    color: '#f59e0b',
  },
  {
    year: '2025+',
    title: "What's Next",
    description: 'Building at the intersection of AI and product. Seeking impactful opportunities.',
    icon: '🚀',
    color: '#22c55e',
  },
]

function CounterStat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      className="text-center glass rounded-2xl p-6 card-hover"
      style={{ border: '1px solid rgba(255,255,255,0.08)' }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="text-3xl font-black gradient-text mb-1"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {isInView ? (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <AnimatedCounter target={value} />{suffix}
          </motion.span>
        ) : '0'}
      </motion.div>
      <p className="text-gray-400 text-sm">{label}</p>
    </motion.div>
  )
}

function AnimatedCounter({ target }: { target: number }) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
    >
      <motion.span>
        {target}
      </motion.span>
    </motion.span>
  )
}

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="section-padding relative">
      <div className="container-max">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-3 block">Who I am</span>
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            A builder at heart — crafting AI systems that solve real problems and interfaces people love to use.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <CounterStat value={stat.value} suffix={stat.suffix} label={stat.label} />
            </motion.div>
          ))}
        </div>

        {/* Bio + info */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-white">Building the Future with AI</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              {personalInfo.bio}
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              I believe the best technology is invisible — it solves problems so elegantly that users forget it's there. My work spans Computer Vision surveillance systems, LLM-powered document intelligence, and React applications that feel genuinely good to use.
            </p>
            <div className="flex flex-col gap-3">
              {[
                { icon: MapPin, text: personalInfo.location, color: '#00d4ff' },
                { icon: Calendar, text: 'Available from 2025', color: '#7c3aed' },
                { icon: Code2, text: 'Python, TypeScript, React', color: '#06b6d4' },
                { icon: Brain, text: 'AI/ML Specialization', color: '#ec4899' },
                { icon: Rocket, text: 'Open to full-time & freelance', color: '#22c55e' },
              ].map(({ icon: Icon, text, color }, i) => (
                <motion.div
                  key={text}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="flex items-center gap-3 text-sm text-gray-300"
                >
                  <Icon size={15} style={{ color }} />
                  {text}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual block */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass rounded-2xl p-8 relative overflow-hidden"
            style={{ border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <div
              className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10"
              style={{ background: 'radial-gradient(circle, #00d4ff, transparent)', transform: 'translate(30%, -30%)' }}
            />
            <h4 className="text-lg font-bold text-white mb-4">What I Work With</h4>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Computer Vision', emoji: '👁️', color: '#00d4ff' },
                { label: 'LLM / RAG Pipelines', emoji: '🧠', color: '#7c3aed' },
                { label: 'FastAPI Backends', emoji: '⚡', color: '#06b6d4' },
                { label: 'React / TypeScript', emoji: '⚛️', color: '#ec4899' },
                { label: 'YOLOv8 Detection', emoji: '🎯', color: '#f59e0b' },
                { label: 'LangChain', emoji: '🔗', color: '#22c55e' },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ scale: 1.03, x: 4 }}
                  className="flex items-center gap-2 p-3 rounded-xl text-sm"
                  style={{
                    background: `${item.color}10`,
                    border: `1px solid ${item.color}25`,
                  }}
                >
                  <span>{item.emoji}</span>
                  <span className="text-gray-300 text-xs font-medium">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-center mb-10 text-white">
            My <span className="gradient-text">Journey</span>
          </h3>
          <div className="relative">
            {/* Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px timeline-line hidden md:block" />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <TimelineItem key={i} item={item} index={i} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function TimelineItem({ item, index }: { item: typeof timeline[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const isEven = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={`flex items-center gap-8 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      {/* Content */}
      <div className="flex-1">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="glass rounded-2xl p-5 card-hover"
          style={{ border: '1px solid rgba(255,255,255,0.08)' }}
        >
          <div className="flex items-start gap-3">
            <span className="text-2xl">{item.icon}</span>
            <div>
              <span className="text-xs font-mono" style={{ color: item.color }}>{item.year}</span>
              <h4 className="font-bold text-white mb-1">{item.title}</h4>
              <p className="text-sm text-gray-400">{item.description}</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Center dot */}
      <div className="hidden md:flex flex-shrink-0 w-10 justify-center">
        <motion.div
          className="w-4 h-4 rounded-full border-2 relative"
          style={{ borderColor: item.color, background: item.color + '30' }}
          animate={{ boxShadow: [`0 0 0 0 ${item.color}40`, `0 0 0 8px transparent`] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>

      {/* Empty side */}
      <div className="flex-1 hidden md:block" />
    </motion.div>
  )
}
