import { motion } from 'framer-motion'
import { portfolioData } from '../../data/portfolio'

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-dark relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-5xl font-bold text-center mb-2">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto" />
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {/* Email */}
          <motion.a
            href={`mailto:${portfolioData.personal.email}`}
            whileHover={{ y: -10 }}
            className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-lg p-6 border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300 text-center group cursor-pointer"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📧</div>
            <h3 className="text-cyan-400 font-semibold mb-2">Email</h3>
            <p className="text-gray-400 text-sm break-all hover:text-cyan-400 transition-colors">
              {portfolioData.personal.email}
            </p>
          </motion.a>

          {/* Phone */}
          <motion.a
            href={`tel:${portfolioData.personal.phone.replace(/\s/g, '')}`}
            whileHover={{ y: -10 }}
            className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-lg p-6 border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300 text-center group cursor-pointer"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📱</div>
            <h3 className="text-cyan-400 font-semibold mb-2">Phone</h3>
            <p className="text-gray-400 text-sm hover:text-cyan-400 transition-colors">
              {portfolioData.personal.phone}
            </p>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -10 }}
            className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-lg p-6 border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300 text-center group cursor-pointer"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🔗</div>
            <h3 className="text-cyan-400 font-semibold mb-2">LinkedIn</h3>
            <p className="text-gray-400 text-sm hover:text-cyan-400 transition-colors">
              Connect with me
            </p>
          </motion.a>
        </motion.div>

        {/* CTA Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg p-8 border border-cyan-400/30 text-center"
        >
          <h3 className="text-2xl font-bold mb-4 text-white">
            Interested in collaborating?
          </h3>
          <p className="text-gray-300 mb-6">
            I'm always open to discussing new projects, innovative ideas, or opportunities to be part of your vision.
          </p>
          <a
            href={`mailto:${portfolioData.personal.email}`}
            className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
          >
            Send me an Email
          </a>
        </motion.div>
      </div>
    </section>
  )
}
