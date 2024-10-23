import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/src/components/ui/card';
import { Button } from '@/src/components/ui/button';
import { useAccessibilityStore } from '@/src/store/accessibilityStore';
import { useFeedbackCardStore } from '@/src/store/feedbackCardStore';
import { useCameraDialogStore } from '@/src/store/cameraDialogStore';
import { RadioGroup, RadioGroupItem } from '@/src/components/ui/radio-group';
import { Label } from '@/src/components/ui/label';
import { useSubmitFeedback } from '@/src/hooks/useSubmitFeedback';

const accessibilityOptions = [
  { value: 'normal', label: 'Normal', score: 1 },
  { value: 'large', label: 'Large', score: 4 },
  { value: 'very-large', label: 'Very Large', score: 5.5 },
  { value: 'extra-large', label: 'Extra Large', score: 7.5 },
];

export function AccessibilityFeedbackCard() {
  const { fontSize, setScore, predictedVisualImpairment } = useAccessibilityStore();
  const { isVisible, setIsVisible } = useFeedbackCardStore();
  const { isOpen: isCameraDialogOpen } = useCameraDialogStore();
  const [selectedSetting, setSelectedSetting] = useState('');
  const { submitFeedback, isLoading, error } = useSubmitFeedback();

  useEffect(() => {
    const feedbackCollected = localStorage.getItem('feedbackCollected');
    if (!feedbackCollected && !isCameraDialogOpen) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
    setSelectedSetting(fontSize);
  }, [fontSize, setIsVisible, isCameraDialogOpen]);

  const handleSettingChange = useCallback((value: string) => {
    setSelectedSetting(value);
    const option = accessibilityOptions.find(opt => opt.value === value);
    if (option) {
      setScore(option.score);
    }
  }, [setScore]);

  const handleConfirm = useCallback(async () => {
    try {
      await submitFeedback(predictedVisualImpairment);
      localStorage.setItem('feedbackCollected', 'true');
      setIsVisible(false);
    } catch (error) {
      console.error("Failed to submit feedback:", error);
    }
  }, [submitFeedback, predictedVisualImpairment, setIsVisible]);

  if (!isVisible || isCameraDialogOpen) return null;

  return (
    <motion.div
      className="sticky bottom-0 w-fit float-right z-50 p-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 30 }}
    >
      <Card className="w-80 shadow-lg">
        <CardContent className="p-4">
          <p className="text-sm text-muted-foreground mb-4">
            Do you feel content with the current layout? Try others:
          </p>
          <RadioGroup onValueChange={handleSettingChange} value={selectedSetting} className="mb-4">
            {accessibilityOptions.map((option) => (
              <div key={option.value} className="flex items-center space-x-2">
                <RadioGroupItem value={option.value} id={option.value} />
                <Label htmlFor={option.value}>{option.label}</Label>
              </div>
            ))}
          </RadioGroup>
          <div className="flex justify-end">
            <Button onClick={handleConfirm} disabled={isLoading}>
              {isLoading ? 'Submitting...' : 'Confirm'}
            </Button>
          </div>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </CardContent>
      </Card>
    </motion.div>
  );
}
