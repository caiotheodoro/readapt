import { motion } from "framer-motion"

interface HeroDescriptionProps {
  description: string
}

export function HeroDescription({ description }: HeroDescriptionProps) {
  return (
    <motion.p 
      className="text-lg md:text-xl text-blue-50 mb-8"
      variants={{
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      {description}
    </motion.p>
  )
}
