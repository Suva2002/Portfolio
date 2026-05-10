import { motion } from 'framer-motion'
import { portfolioData } from '../../data/portfolio'

export const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-dark relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-5xl font-bold text-center mb-2">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto" />
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left - Profile Summary */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-darker rounded-lg p-8 border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {portfolioData.personal.summary}
              </p>
              <div className="space-y-3">
                <p className="flex items-center gap-3 text-gray-400">
                  <span className="text-cyan-400">📧</span>
                  <a
                    href={`mailto:${portfolioData.personal.email}`}
                    className="hover:text-cyan-400 transition-colors"
                  >
                    {portfolioData.personal.email}
                  </a>
                </p>
                <p className="flex items-center gap-3 text-gray-400">
                  <span className="text-cyan-400">📍</span>
                  {portfolioData.personal.location}
                </p>
                <p className="flex items-center gap-3 text-gray-400">
                  <span className="text-cyan-400">🔗</span>
                  <a
                    href={portfolioData.personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    LinkedIn Profile
                  </a>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {[
              { title: '3+ Years', desc: 'of SAP Development Experience' },
              { title: 'Expert', desc: 'in ABAP on HANA & UI5/Fiori' },
              { title: 'SAP Certified', desc: 'Associate - ABAP Cloud' },
              { title: 'Full-Stack', desc: 'RICEFW & Enterprise Solutions' }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 10 }}
                className="p-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg border border-purple-400/30 hover:border-purple-400/60 transition-all"
              >
                <h3 className="text-cyan-400 font-bold text-lg">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
