'use client'
import React, { useState, useRef, useEffect, useCallback } from 'react';

import { Camera, Upload } from 'lucide-react';
import Webcam from 'react-webcam';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { useProcessedImageUpload } from '@/src/hooks/useProcessedImageUpload';

interface CameraDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CameraDialog({ isOpen, onClose }: CameraDialogProps) {
  const [image, setImage] = useState<string | null>(null);
  const [isCapturing, setIsCapturing] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const webcamRef = useRef<Webcam>(null);
  const { uploadProcessedImage, isLoading, error } = useProcessedImageUpload();

  const captureImage = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      setImage(imageSrc);
      setIsCapturing(false);
      // Convert base64 to File object
      fetch(imageSrc)
        .then(res => res.blob())
        .then(blob => {
          const file = new File([blob], 'captured_image.jpg', { type: 'image/jpeg' });
          setFile(file);
        });
    }
  }, [webcamRef]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(uploadedFile);
    }
  };

  const handleSubmit = useCallback(async () => {
    if (file) {
      try {
        await uploadProcessedImage(file);
        onClose();
      } catch (error) {
        console.error('Error processing image:', error);
      }
    }
  }, [file, uploadProcessedImage, onClose]);

  useEffect(() => {
    if (!isOpen) {
      setImage(null);
      setIsCapturing(false);
      setFile(null);
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
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
            {image ? (
              <div className="relative w-full h-48">
                <img src={image} alt="Captured" className="w-full h-full object-cover rounded-md" />
                <Button
                  variant="outline"
                  size="sm"
                  className="absolute top-2 right-2"
                  onClick={() => {
                    setImage(null);
                    setFile(null);
                  }}
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
                  onClick={captureImage}
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
          <Button onClick={handleSubmit} disabled={!file || isLoading}>
            {isLoading ? 'Processing...' : 'Submit'}
          </Button>
        </div>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </DialogContent>
    </Dialog>
  );
}
