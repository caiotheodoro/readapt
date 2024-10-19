"use client"

import { elysia } from '@/src/services/elysia/client'
import ReaderPage from '@/src/components/pages/reader'
import React from 'react'
import { AnimatePresence } from 'framer-motion'

export default function Reader() {
  return (
    <AnimatePresence mode="wait">
      <ReaderPage />
    </AnimatePresence>
  )
}
