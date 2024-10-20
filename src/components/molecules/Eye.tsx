"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function Eye() {
  const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 })
  const [isLooking, setIsLooking] = useState(false)

  useEffect(() => {
    const lookInterval = setInterval(() => {
      setIsLooking(true)
      const newX = Math.random() * 20 - 10 // Random value between -10 and 10
      const newY = Math.random() * 20 - 10 // Random value between -10 and 10
      setEyePosition({ x: newX, y: newY })
      setTimeout(() => setIsLooking(false), 500)
    }, 3000)

    return () => clearInterval(lookInterval)
  }, [])

  return (
        <motion.svg
          width="100"
          height="60"
          viewBox="0 0 160 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          
        >
          <ellipse cx="80" cy="60" rx="80" ry="60" fill="white" />

          <motion.g
            animate={{
              x: eyePosition.x,
              y: eyePosition.y,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          >
            <circle cx="80" cy="60" r="30" fill="#4299e1" />
            <circle cx="80" cy="60" r="15" fill="#1e40af" />
            <circle cx="70" cy="50" r="8" fill="white" />
          </motion.g>

        
        </motion.svg>
  )
}