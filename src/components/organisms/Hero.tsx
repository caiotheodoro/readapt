import { Button } from "@/src/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"
import Eye from "../molecules/eye"
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { Space } from "lucide-react"

interface HeroProps {
  title: string
  subtitle: string
  description: string
  cta: string
}

export function Hero({ title, subtitle, description, cta }: HeroProps) {
  const router = useRouter()

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      router.push('/books')
    }

    window.addEventListener('keydown', handleKeyPress)

    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [router])

  return (
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
        <div className="flex-1 text-center md:text-left md:pr-10">
          <div className="flex items-center gap-4 h-fit mb-4">
          <Eye />
          <motion.h1 
            className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl "
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {title}
          </motion.h1>
          </div>
          <motion.p 
            className="text-xl md:text-2xl text-blue-100 mb-4"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {subtitle}
          </motion.p>
          <motion.p 
            className="text-lg md:text-xl text-blue-50 mb-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {description}
          </motion.p>
           <Button className="flex items-center gap-2 text-gray-200 opacity-80 font-medium" onClick={() => router.push('/books')}>{cta} <Space className="w-4 h-4" /></Button>
        </div>
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
      </motion.div>
      <motion.div
        className="absolute -bottom-16 -left-16 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.7, 0.4, 0.7],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div
        className="absolute -top-16 -right-16 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.7, 0.4, 0.7],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1
        }}
      />
    </section>
  )
}
