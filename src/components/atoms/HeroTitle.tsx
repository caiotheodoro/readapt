import { motion } from "framer-motion"

interface HeroTitleProps {
  title: string
}

export function HeroTitle({ title }: HeroTitleProps) {
  return (
    <motion.h1 
      className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl"
      variants={{
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {title}
    </motion.h1>
  )
}
