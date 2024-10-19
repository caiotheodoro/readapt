'use client'
import { Header } from "../organisms/Header"
import { Hero } from "../organisms/Hero"
import { Features } from "../organisms/Features"
import { Eye, Headphones, BookOpen, Settings } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/src/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { PageTransition } from "../atoms/PageTransition"

const content = {
  hero: {
    title: "Readapt",
    subtitle: "Empowering Visually Impaired Readers",
    description: "Experience ePubs like never before with adaptive reading technology tailored for the visually impaired.",
    cta: "Press any key"
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
    <PageTransition>
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white overflow-hidden">
        <main className="flex-1">
          <Hero {...content.hero} />
        </main>
      </div>
    </PageTransition>
  )
}
