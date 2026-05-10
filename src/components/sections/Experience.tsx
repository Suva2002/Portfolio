import { motion } from 'framer-motion'
import { portfolioData } from '../../data/portfolio'

export const Experience = () => {
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="experience" className="py-20 px-4 bg-darker relative">
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
              Work Experience
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto" />
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {portfolioData.workExperience.map((job) => (
            <motion.div
              key={job.id}
              variants={itemVariants}
              className="relative pl-8 border-l-2 border-cyan-400/30 hover:border-cyan-400 transition-all duration-300"
            >
              {/* Timeline dot */}
              <div className="absolute -left-4 top-0 w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" />

              {/* Content */}
              <div className="bg-dark rounded-lg p-6 hover:bg-dark/80 transition-all duration-300 border border-cyan-400/10 hover:border-cyan-400/30">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                  <h3 className="text-2xl font-bold text-cyan-400">{job.position}</h3>
                  <span className="text-purple-400 text-sm">{job.duration}</span>
                </div>

                <p className="text-gray-400 mb-3">{job.company} • {job.location}</p>
                <p className="text-gray-300">{job.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
