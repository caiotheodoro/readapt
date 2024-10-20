'use client'
import React, { useRef, useCallback } from 'react';
import { Camera, Upload } from 'lucide-react';
import Webcam from 'react-webcam';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { useProcessedImageUpload } from '@/src/hooks/useProcessedImageUpload';
import { useCameraDialogStore } from '@/src/store/cameraDialogStore';
import { useCameraStore } from '@/src/store/cameraStore';
import Image from 'next/image';
export function CameraDialog() {
  const { isOpen, setIsOpen } = useCameraDialogStore();
  const { 
    imageState, 
    isCapturing, 
    captureImage, 
    handleFileUpload, 
    resetImage, 
    setIsCapturing 
  } = useCameraStore();
  const webcamRef = useRef<Webcam>(null);
  const { uploadProcessedImage, isLoading, error } = useProcessedImageUpload();

  const onClose = useCallback(() => {
    setIsOpen(false);
    resetImage();
  }, [setIsOpen, resetImage]);

  const handleSubmit = useCallback(async () => {
    if (imageState.file) {
      try {
        await uploadProcessedImage(imageState.file);
        onClose();
      } catch (error) {
        console.error('Error processing image:', error);
      }
    }
  }, [imageState.file, uploadProcessedImage, onClose]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Capture or Upload Image</DialogTitle>
        </DialogHeader>
        <p className="text-sm text-muted-foreground mb-4">
          We need a picture of you to adapt your reading experience.
        </p>
        <div className="grid gap-4 py-4">
          <div className="grid w-full items-center gap-1.5">
            <label htmlFor="picture">Picture</label>
            {imageState.preview ? (
              <div className="relative w-full h-48">
                <Image src={imageState.preview} alt="Captured" className="w-full h-full object-cover rounded-md"  width={300} height={300}/>
                <Button
                  variant="outline"
                  size="sm"
                  className="absolute top-2 right-2"
                  onClick={resetImage}
                >
                  Remove
                </Button>
              </div>
            ) : isCapturing ? (
              <div className="relative w-full h-48">
                <Webcam
                  audio={false}
                  ref={webcamRef}
                  screenshotFormat="image/jpeg"
                  videoConstraints={{ facingMode: "user" }}
                  className="w-full h-full object-cover rounded-md"
                />
                <Button
                  variant="outline"
                  size="sm"
                  className="absolute bottom-2 left-1/2 transform -translate-x-1/2"
                  onClick={() => captureImage(webcamRef)}
                >
                  Capture
                </Button>
              </div>
            ) : (
              <div className="flex justify-center gap-4">
                <Button variant="outline" onClick={() => setIsCapturing(true)}>
                  <Camera className="mr-2 h-4 w-4" /> Capture
                </Button>
                <div className="relative">
                  <Input
                    id="picture"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileUpload}
                  />
                  <Button variant="outline" onClick={() => document.getElementById("picture")?.click()}>
                    <Upload className="mr-2 h-4 w-4" /> Upload
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button onClick={handleSubmit} disabled={!imageState.file || isLoading}>
            {isLoading ? 'Processing...' : 'Submit'}
          </Button>
        </div>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </DialogContent>
    </Dialog>
  );
}
