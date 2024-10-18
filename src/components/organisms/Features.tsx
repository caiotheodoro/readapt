import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { FeatureCard } from "../molecules/FeatureCard"
import Image from "next/image"

interface Feature {
  title: string
  description: string
  icon: LucideIcon
}

interface FeaturesProps {
  features: Feature[]
}

export function Features({ features }: FeaturesProps) {
  return (
    <section id="features" className="w-full py-20 md:py-32 lg:py-40 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2 
          className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-center mb-16 text-blue-600"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Features
        </motion.h2>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Image 
            src="/features-image.svg" 
            alt="Readapt Features" 
            width={400} 
            height={400} 
            className="rounded-lg  mx-auto"
          />
        </motion.div>
      </div>
    </section>
  )
}
