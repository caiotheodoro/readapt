import { AnimatePresence, motion } from "framer-motion"
import { useCallback, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { HeroContent } from "../molecules/HeroContent"
import { HeroImage } from "../molecules/HeroImage"
import { HeroButton } from "../molecules/HeroButton"
import { useHeroStore } from "@/src/store/heroStore"

interface HeroProps {
  title: string
  subtitle: string
  description: string
  cta: string
}

export function Hero({ title, subtitle, description, cta }: HeroProps) {
  const router = useRouter()
  const { hasInteracted, setHasInteracted } = useHeroStore()

  const handleInteraction = useCallback(() => {
    if (!hasInteracted) {
      setHasInteracted(true)
      router.push('/books')
    }
  }, [hasInteracted, setHasInteracted, router])

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      handleInteraction()
    }

    window.addEventListener('keydown', handleKeyPress)

    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [handleInteraction])

  return (
    <AnimatePresence>
      <section className="w-full h-screen flex items-center bg-blue-600 text-white overflow-hidden relative">
        <div className="absolute inset-0 noise-bg-primary" />
        <motion.div 
          className="absolute inset-0 bg-blue-600"
          animate={{
            opacity: [0.3, 0.4, 0.3]
          }}
          transition={{
            duration: 8,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
        <motion.div 
          className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <HeroContent title={title} subtitle={subtitle} description={description} cta={cta} handleInteraction={handleInteraction} />
          <HeroImage />
        </motion.div>
        
        <BackgroundBlob position="-bottom-16 -left-16" color="bg-blue-500" />
        <BackgroundBlob position="-top-16 -right-16" color="bg-blue-300" delay={1} />
      </section>
    </AnimatePresence>
  )
}

interface BackgroundBlobProps {
  position: string;
  color: string;
  delay?: number; 
}

function BackgroundBlob({ position, color, delay = 0 }: BackgroundBlobProps) {
  return (
    <motion.div
      className={`absolute ${position} w-64 h-64 ${color} rounded-full mix-blend-multiply filter blur-xl opacity-70`}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.7, 0.4, 0.7],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        repeatType: "reverse",
        delay
      }}
    />
  )
}
