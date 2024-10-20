import { create } from 'zustand'

interface CameraDialogState {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
}

export const useCameraDialogStore = create<CameraDialogState>((set) => ({
  isOpen: false,
  setIsOpen: (value) => set({ isOpen: value }),
}))
