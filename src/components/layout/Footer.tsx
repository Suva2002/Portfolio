import { motion } from 'framer-motion'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-darker border-t border-cyan-400/10 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          {/* Left Side */}
          <div>
            <h3 className="text-cyan-400 font-bold text-lg">Suvasis Sahoo</h3>
            <p className="text-gray-400 text-sm">SAP ABAP Developer & UI5 Specialist</p>
          </div>

          {/* Center */}
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} All rights reserved. Built with React & Three.js
            </p>
          </div>

          {/* Right Side */}
          <div className="flex gap-4">
            <motion.a
              href="https://linkedin.com/in/ss-suva"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: '#00d9ff' }}
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </motion.a>
            <motion.a
              href="mailto:suvasissahoo343@gmail.com"
              whileHover={{ scale: 1.2, color: '#00d9ff' }}
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
