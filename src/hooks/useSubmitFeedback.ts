import { useState, useCallback } from 'react';
import { useLoading } from './useLoading';
import { ModelApi } from '@/src/lib/ModelApi';
import { useAccessibilityStore } from '@/src/store/accessibilityStore';
import { useToast } from './use-toast';
import { apiService } from '../services/ApiService';

export function useSubmitFeedback() {
  const { toast } = useToast()
  const [error, setError] = useState<string | null>(null);
  const { isLoading, withLoading } = useLoading();
  const { fontSize, score, contentDensity, predictedVisualImpairment,id } = useAccessibilityStore();

  const submitFeedback = useCallback(async (reinforcementVisualImpairment: string) => {
    setError(null);

    try {
      const result = await withLoading(async () => {
        return await apiService.post('/analyze-feedback', {
          processedImageId: id,
          reinforcementVisualImpairment,
        });
      });

      toast({
        title: 'Success',
        description: "Feedback submitted successfully. Your settings have been updated.",
      })

      return result;
    } catch (err) {
      setError('Failed to submit feedback. Please try again.');
      throw err;
    }
  }, [withLoading, score, fontSize, contentDensity, predictedVisualImpairment, toast]);

  return { 
    submitFeedback, 
    isLoading, 
    error 
  };
}
