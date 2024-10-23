interface AccessibilitySettings {
  fontSize: string
  contentDensity: string
  predictedVisualImpairment: string
}
export const getAccessibilitySettings = (score: number): AccessibilitySettings => {
  if (score >= 7.5) {
    return { fontSize: 'extra-large', contentDensity: 'minimal', predictedVisualImpairment: 'normal' }
  }
  if (score >= 5.5) {
    return { fontSize: 'very-large', contentDensity: 'very-reduced', predictedVisualImpairment: 'normal' }
  }
  if (score >= 4) {
    return { fontSize: 'large', contentDensity: 'reduced', predictedVisualImpairment: 'normal' }
  }
  return { fontSize: 'normal', contentDensity: 'normal', predictedVisualImpairment: 'normal' }
}