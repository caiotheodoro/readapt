import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AccessibilityState {
  score: number
  fontSize: string
  contentDensity: string
  setScore: (score: number) => void
}

const calculateSettings = (score: number): { fontSize: string, contentDensity: string } => {
  if (score < 2) {
    return { fontSize: 'normal', contentDensity: 'normal' }
  } else if (score < 2.5) {
    return { fontSize: 'slightly-large', contentDensity: 'slightly-reduced' }
  } else if (score < 3) {
    return { fontSize: 'large', contentDensity: 'reduced' }
  } else if (score < 3.5) {
    return { fontSize: 'very-large', contentDensity: 'very-reduced' }
  } else {
    return { fontSize: 'extra-large', contentDensity: 'minimal' }
  }
}

export const useAccessibilityStore = create(
  persist<AccessibilityState>(
    (set) => ({
      score: 0,
      fontSize: 'normal',
      contentDensity: 'normal',
      setScore: (score: number) => {
        const { fontSize, contentDensity } = calculateSettings(score)
        set({ score, fontSize, contentDensity })
      },
    }),
    {
      name: 'accessibility-storage',
    }
  )
)
