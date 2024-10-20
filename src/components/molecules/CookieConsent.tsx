"use client"

import { useState, useEffect } from "react"
import { Button } from "@/src/components/ui/button"
import { Card, CardContent } from "@/src/components/ui/card"
import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem("acceptedCookies")
    if (!hasAcceptedCookies) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("acceptedCookies", "true")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <AnimatePresence>
      <motion.div className="fixed bottom-4 right-4 z-50" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, ease: "easeInOut", delay: 2 }}>
        <Card className="w-80 shadow-lg">
        <CardContent className="p-4">
          <p className="text-sm text-muted-foreground mb-4">
            We use cookies to enhance your experience. By continuing, you agree to our use of cookies and our <Link href="/policies" className="text-sm text-blue-500 hover:text-blue-700 mb-4">policies</Link>.
          </p>
          <div className="flex flex-col justify-end">
            <Button size="sm" onClick={handleAccept}>Accept</Button>
          </div>
        </CardContent>
        </Card>
      </motion.div>
    </AnimatePresence>
  )
}
