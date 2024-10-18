'use client'
import { Header } from "../organisms/Header"
import { Hero } from "../organisms/Hero"
import { Features } from "../organisms/Features"
import { Eye, Headphones, BookOpen, Settings } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/src/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const content = {
  hero: {
    title: "Readapt",
    subtitle: "Empowering Visually Impaired Readers",
    description: "Experience ePubs like never before with adaptive reading technology tailored for the visually impaired.",
    cta: "Get Started"
  },
  features: [
    {
      title: "Adaptive Text Display",
      description: "Customize font size, contrast, and spacing for comfortable reading.",
      icon: Eye
    },
    {
      title: "Text-to-Speech",
      description: "High-quality voice synthesis for an immersive listening experience.",
      icon: Headphones
    },
    {
      title: "Extensive ePub Library",
      description: "Access a vast collection of ePub books compatible with our adaptive technology.",
      icon: BookOpen
    },
    {
      title: "Personalized Settings",
      description: "Save your preferences for a tailored reading experience every time.",
      icon: Settings
    }
  ],
  about: {
    title: "About Readapt",
    description: "Readapt is more than just an ePub reader. It's a gateway to literature for those with visual impairments. Our mission is to make reading accessible to everyone, regardless of their visual abilities."
  },
  testimonial: {
    quote: "Readapt has opened up a world of books I thought was lost to me. It's given me back the joy of reading.",
    author: "Sarah M., Readapt User"
  },
  cta: {
    title: "Start Your Reading Journey Today",
    description: "Join thousands of satisfied users who have rediscovered the pleasure of reading with Readapt.",
    buttonText: "Download Now"
  }
}

export default function ReadaptLandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <main className="flex-1">
        <Hero {...content.hero} />
        <Features features={content.features} />
        <motion.section 
          id="about" 
          className="w-full py-20 md:py-32 lg:py-40 bg-blue-800 text-white overflow-hidden relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 noise-bg-secondary" />
          <motion.div 
            className="absolute inset-0 bg-blue-800"
            animate={{
              opacity: [0.3, 0.4, 0.3]
            }}
            transition={{
              duration: 8,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />
          <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center relative z-10">
            <div className="flex-1 text-center md:text-left md:pr-10">
              <motion.h2 
                className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                {content.about.title}
              </motion.h2>
              <motion.p 
                className="text-lg md:text-xl text-blue-100"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                {content.about.description}
              </motion.p>
            </div>
            <motion.div 
              className="flex-1 mt-10 md:mt-0"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <Image 
                src="/about-image.svg" 
                alt="About Readapt" 
                width={600} 
                height={400} 
                className="rounded-lg"
              />
            </motion.div>
          </div>
          <motion.div
            className="absolute -bottom-16 -right-16 w-64 h-64 bg-blue-700 rounded-full mix-blend-multiply filter blur-xl opacity-70"
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
        </motion.section>
        <motion.section 
          id="testimonial" 
          className="w-full py-20 md:py-32 lg:py-40 bg-blue-50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto px-4 md:px-6">
            <motion.blockquote 
              className="mx-auto max-w-3xl text-center italic text-2xl md:text-3xl text-blue-800"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              "{content.testimonial.quote}"
              <footer className="mt-4 text-blue-600">— {content.testimonial.author}</footer>
            </motion.blockquote>
          </div>
        </motion.section>
        <motion.section 
          className="w-full py-20 md:py-32 lg:py-40 bg-blue-900 text-white overflow-hidden relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center max-w-3xl mx-auto">
              <motion.h2 
                className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                {content.cta.title}
              </motion.h2>
              <motion.p 
                className="text-blue-100 text-lg md:text-xl"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                {content.cta.description}
              </motion.p>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <Button size="lg" variant="secondary" className="mt-8 bg-white text-blue-900 hover:bg-blue-50">
                  {content.cta.buttonText}
                </Button>
              </motion.div>
            </div>
          </div>
          <motion.div
            className="absolute -top-16 -left-16 w-64 h-64 bg-blue-800 rounded-full mix-blend-multiply filter blur-xl opacity-70"
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
        </motion.section>
      </main>
      <footer className="flex flex-col sm:flex-row justify-between items-center py-8 w-full px-4 md:px-6 border-t bg-white">
        <p className="text-sm text-muted-foreground">© 2024 Readapt. All rights reserved.</p>
        <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
          <Link className="text-sm hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-sm hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
