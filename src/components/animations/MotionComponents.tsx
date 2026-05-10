import { motion } from 'framer-motion'

interface AnimatedCardProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export const AnimatedCard = ({ children, delay = 0, className = '' }: AnimatedCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface GlitchTextProps {
  text: string
  className?: string
}

export const GlitchText = ({ text, className = '' }: GlitchTextProps) => {
  return (
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`relative ${className}`}
    >
      <span className="relative inline-block">
        {text}
        <motion.span
          className="absolute inset-0 text-cyan-400"
          initial={{ x: 0, opacity: 0 }}
          animate={{ x: [0, 2, -2, 0], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          {text}
        </motion.span>
      </span>
    </motion.h1>
  )
}

export const FloatingElement = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  return (
    <motion.div
      animate={{ y: [0, -20, 0] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
        delay
      }}
    >
      {children}
    </motion.div>
  )
}
