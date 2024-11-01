import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { NewProcessedImage } from '../server/schema'

interface AccessibilityState {
  score: number
  id: number
  fontSize: string
  contentDensity: string
  setAccessibilityData: (score: NewProcessedImage) => void
  setScore: (score: number) => void
  predictedVisualImpairment: string
}

interface AccessibilitySettings {
  fontSize: string
  contentDensity: string
  predictedVisualImpairment: string
}

const calculateSettings = (score: number): AccessibilitySettings => {
  if (score >= 7.5) {
    return { fontSize: 'extra-large', contentDensity: 'minimal', predictedVisualImpairment: 'High' }
  } else if (score >= 5.5) {
    return { fontSize: 'very-large', contentDensity: 'very-reduced', predictedVisualImpairment: 'Medium' }
  } else if (score >= 4) {
    return { fontSize: 'large', contentDensity: 'reduced', predictedVisualImpairment: 'Low' }
  } else {
    return { fontSize: 'normal', contentDensity: 'normal', predictedVisualImpairment: 'Low' }
  }
}

export const useAccessibilityStore = create(
  persist<AccessibilityState>(
    (set) => ({
      score: 0,
      id: 0,
      fontSize: 'normal',
      contentDensity: 'normal',
      predictedVisualImpairment: 'Low',
      setAccessibilityData: (data: NewProcessedImage) => {
        const { fontSize, contentDensity,predictedVisualImpairment } = calculateSettings(Number(data.score))
        set({ score: Number(data.score), fontSize, contentDensity,predictedVisualImpairment, id: data.id })
      },
      setScore: (score: number) => {
        const { fontSize, contentDensity,predictedVisualImpairment } = calculateSettings(score)
        set({ score, fontSize, contentDensity,predictedVisualImpairment })
      }
    }),
    {
      name: 'accessibility-storage',
    }
  )
)
