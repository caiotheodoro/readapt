import { motion } from "framer-motion"

interface HeroSubtitleProps {
  subtitle: string
}

export function HeroSubtitle({ subtitle }: HeroSubtitleProps) {
  return (
    <motion.p 
      className="text-xl md:text-2xl text-blue-100 mb-4"
      variants={{
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      {subtitle}
    </motion.p>
  )
}
