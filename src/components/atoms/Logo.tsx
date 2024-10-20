import { motion } from "framer-motion"

export function Logo() {
  return (
    <div className="flex items-center gap-4 h-fit mb-4">
    <motion.h1 
      className="text-5xl font-bold tracking-tighter sm:text-lg md:text-xl lg:text-2xl "
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.8 }}
    >
      Readapt
    </motion.h1>
    </div>
  )
}
