import { motion } from "framer-motion"
import Image from "next/image"

export function HeroImage() {
  return (
    <motion.div 
      className="flex-1 mt-10 md:mt-0"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.8 }}
    >
      <Image 
        src="/hero-image.png" 
        alt="Readapt Hero Image" 
        width={600} 
        height={400} 
        className="rounded-lg md:w-full w-2/3 mx-auto"
      />
    </motion.div>
  )
}
