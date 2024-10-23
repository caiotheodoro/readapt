import { create } from 'zustand'

interface FeedbackCardState {
  isVisible: boolean
  setIsVisible: (value: boolean) => void
}

export const useFeedbackCardStore = create<FeedbackCardState>((set) => ({
  isVisible: false,
  setIsVisible: (value) => set({ isVisible: value }),
}))
