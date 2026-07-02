import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'

import { LoadingScreen } from './components/ui/LoadingScreen'
import { CustomCursor } from './components/ui/CustomCursor'
import { MouseGlow } from './components/ui/MouseGlow'
import { ParticleBackground } from './components/ui/ParticleBackground'
import { EasterEgg } from './components/ui/EasterEgg'
import { SectionDivider } from './components/ui/SectionDivider'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'

import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Skills } from './components/sections/Skills'
import { Projects } from './components/sections/Projects'
import { Experience } from './components/sections/Experience'
import { Certifications } from './components/sections/Certifications'
import { Contact } from './components/sections/Contact'

type Theme = 'dark' | 'light'

export default function App() {
  const [loading, setLoading] = useState(true)
  const [loaded, setLoaded] = useState(false)
  const [theme, setTheme] = useState<Theme>('dark')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    document.documentElement.classList.toggle('light', theme === 'light')
    if (theme === 'light') {
      document.body.style.background = '#f8fafc'
      document.body.style.color = '#0f172a'
    } else {
      document.body.style.background = ''
      document.body.style.color = ''
    }
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return (
    <>
      <AnimatePresence>
        {loading && (
          <LoadingScreen onComplete={() => { setLoading(false); setLoaded(true) }} />
        )}
      </AnimatePresence>

      {loaded && (
        <div className={`relative min-h-screen ${theme === 'dark' ? 'bg-gray-950 text-gray-100' : 'bg-slate-50 text-gray-900'}`}>
          {/* Global effects */}
          <ParticleBackground />
          <MouseGlow />
          <CustomCursor />
          <EasterEgg />

          {/* Navigation */}
          <Navbar theme={theme} toggleTheme={toggleTheme} />

          {/* Main content */}
          <main>
            <Hero />
            <SectionDivider />
            <About />
            <SectionDivider />
            <Skills />
            <SectionDivider />
            <Projects />
            <SectionDivider />
            <Experience />
            <SectionDivider />
            <Certifications />
            <SectionDivider />
            <Contact />
          </main>

          <Footer />
        </div>
      )}
    </>
  )
}
