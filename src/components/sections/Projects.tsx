import { motion } from 'framer-motion'
import { portfolioData } from '../../data/portfolio'

export const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="projects" className="py-20 px-4 bg-dark relative">
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
              Project Experience
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto" />
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {portfolioData.projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-lg p-6 border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300"
            >
              {/* Header */}
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-cyan-400 mb-1">{project.title}</h3>
                <p className="text-purple-400 font-semibold mb-2">{project.role}</p>
                <span className="inline-block px-3 py-1 bg-purple-500/20 border border-purple-400/30 rounded-full text-purple-300 text-xs">
                  {project.duration}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-4">{project.description}</p>

              {/* Highlights */}
              {project.highlights && project.highlights.length > 0 && (
                <div className="space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <div key={i} className="flex gap-3 text-gray-300 text-sm">
                      <span className="text-cyan-400 flex-shrink-0 mt-1">✓</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
