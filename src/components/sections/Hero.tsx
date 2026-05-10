import { AnimatedScene } from '../3D/AnimatedScene'
import { GlitchText, FloatingElement } from '../animations/MotionComponents'
import { portfolioData } from '../../data/portfolio'

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative w-full h-screen bg-gradient-to-br from-dark via-darker to-dark overflow-hidden"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <AnimatedScene />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <FloatingElement delay={0}>
            <GlitchText
              text="Suvasis Sahoo"
              className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
            />
          </FloatingElement>

          <FloatingElement delay={0.2}>
            <h2 className="text-2xl md:text-3xl text-cyan-400 mb-6 font-light">
              {portfolioData.personal.title}
            </h2>
          </FloatingElement>

          <FloatingElement delay={0.4}>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              {portfolioData.personal.summary}
            </p>
          </FloatingElement>

          {/* CTA Buttons */}
          <FloatingElement delay={0.6}>
            <div className="flex gap-4 justify-center flex-wrap">
              <button
                onClick={() => scrollToSection('about')}
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
              >
                Explore Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300"
              >
                Get in Touch
              </button>
            </div>
          </FloatingElement>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="text-cyan-400 text-3xl">↓</div>
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 pointer-events-none z-5 bg-gradient-to-b from-transparent via-transparent to-dark" />
    </section>
  )
}
