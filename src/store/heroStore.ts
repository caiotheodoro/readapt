import { create } from 'zustand'

interface HeroState {
  hasInteracted: boolean
  setHasInteracted: (value: boolean) => void
}

export const useHeroStore = create<HeroState>((set) => ({
  hasInteracted: false,
  setHasInteracted: (value) => set({ hasInteracted: value }),
}))
