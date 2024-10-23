import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AccessibilityState {
  score: number
  fontSize: string
  contentDensity: string
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
    return { fontSize: 'extra-large', contentDensity: 'minimal', predictedVisualImpairment: 'normal' }
  } else if (score >= 5.5) {
    return { fontSize: 'very-large', contentDensity: 'very-reduced', predictedVisualImpairment: 'normal' }
  } else if (score >= 4) {
    return { fontSize: 'large', contentDensity: 'reduced', predictedVisualImpairment: 'normal' }
  } else {
    return { fontSize: 'normal', contentDensity: 'normal', predictedVisualImpairment: 'normal' }
  }
}

export const useAccessibilityStore = create(
  persist<AccessibilityState>(
    (set) => ({
      score: 0,
      fontSize: 'normal',
      contentDensity: 'normal',
      predictedVisualImpairment: 'normal',
      setScore: (score: number) => {
        const { fontSize, contentDensity,predictedVisualImpairment } = calculateSettings(score)
        set({ score, fontSize, contentDensity,predictedVisualImpairment })
      },
    }),
    {
      name: 'accessibility-storage',
    }
  )
)
