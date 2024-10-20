'use client';

import { useState, useCallback } from 'react';
import { processFile } from '@/src/utils/files/process-file';
import { ModelApi } from '@/src/lib/ModelApi';
import { useLoading } from './useLoading';
import { apiService } from '@/src/services/ApiService';
import { useAccessibilityStore } from '@/src/store/accessibilityStore';
import { useToast } from './use-toast';

export function useProcessedImageUpload() {
  const { toast } = useToast()
  const [error, setError] = useState<string | null>(null);
  const { isLoading, withLoading } = useLoading();
  const setScore = useAccessibilityStore(state => state.setScore);

  const uploadProcessedImage = useCallback(async (file: File) => {
    setError(null);

    try {
      const result = await withLoading(async () => {
        const fileName = await processFile('processed-images', file);

        const analysisResult = await ModelApi.analyzeImage(file);

        if(analysisResult.error) {
          toast({
            title: 'Error',
            description: "No faces were detected in the image. Please try again with a different image.",
            variant: 'destructive',
          })
          return;
        }

        const { score_deficiencia_visual, caracteristicas_extraidas } = analysisResult;
        const {
          Arched_Eyebrows,
          Bags_Under_Eyes,
          Bushy_Eyebrows,
          Eyeglasses,
          Gray_Hair,
          High_Cheekbones,
          Male,
          Narrow_Eyes,
          Young
        } = caracteristicas_extraidas;

        setScore(score_deficiencia_visual);

        return apiService.post('/processed-images', {
          score: score_deficiencia_visual,
          image: fileName,
          Arched_Eyebrows: Boolean(Arched_Eyebrows),
          Bags_Under_Eyes: Boolean(Bags_Under_Eyes),
          Bushy_Eyebrows: Boolean(Bushy_Eyebrows),
          Eyeglasses: Boolean(Eyeglasses),
          Gray_Hair: Boolean(Gray_Hair),
          High_Cheekbones: Boolean(High_Cheekbones),
          Male: Boolean(Male),
          Narrow_Eyes: Boolean(Narrow_Eyes),
          Young: Boolean(Young),
        });
      });

      toast({
        title: 'Success',
        description: "Image uploaded and processed successfully. Your interface is now adapted to your needs.",
      })

      return result;
    } catch (err) {
      setError('Failed to upload and process image. Please try again.');
      throw err;
    }
  }, [withLoading, setScore]);

  return { 
    uploadProcessedImage, 
    isLoading, 
    error 
  };
}
