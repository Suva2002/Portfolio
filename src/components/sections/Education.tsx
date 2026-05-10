import { motion } from 'framer-motion'
import { portfolioData } from '../../data/portfolio'

export const Education = () => {
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
    <section id="education" className="py-20 px-4 bg-darker relative">
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
              Education
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto" />
        </motion.div>

        {/* Education Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {portfolioData.education.map((edu) => (
            <motion.div
              key={edu.id}
              variants={itemVariants}
              whileHover={{ x: 10 }}
              className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg p-8 border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-cyan-400 mb-2">{edu.degree}</h3>
                  <p className="text-gray-300 text-lg mb-2">{edu.institution}</p>
                  {edu.cgpa && (
                    <p className="text-gray-400">
                      <span className="text-purple-400 font-semibold">CGPA:</span> {edu.cgpa}
                    </p>
                  )}
                  {edu.percentage && (
                    <p className="text-gray-400">
                      <span className="text-purple-400 font-semibold">Percentage:</span> {edu.percentage}
                    </p>
                  )}
                </div>
                <div className="px-6 py-2 bg-purple-500/20 border border-purple-400/40 rounded-lg text-center">
                  <span className="text-purple-300 font-semibold">{edu.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-cyan-400 mb-8 text-center">Certifications & Awards</h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {portfolioData.certifications.map((cert) => (
              <motion.div
                key={cert.id}
                variants={itemVariants}
                className="bg-dark rounded-lg p-4 border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300 flex items-center gap-4"
              >
                <div className="text-2xl">🏆</div>
                <div className="flex-1">
                  <h4 className="text-purple-400 font-semibold">{cert.title}</h4>
                  {cert.description && <p className="text-gray-400 text-sm">{cert.description}</p>}
                  {cert.code && <p className="text-gray-400 text-sm">Code: {cert.code}</p>}
                </div>
                <span className="text-cyan-400 text-sm">{cert.date}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
