import Webcam from 'react-webcam';
import { create } from 'zustand'

type ImageState = {
  file: File | null;
  preview: string | null;
};

interface CameraState {
  imageState: ImageState;
  isCapturing: boolean;
  captureImage: (webcamRef: React.RefObject<Webcam>) => void;
  handleFileUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  resetImage: () => void;
  setIsCapturing: (value: boolean) => void;
}

export const useCameraStore = create<CameraState>((set, get) => ({
  imageState: { file: null, preview: null },
  isCapturing: false,
  captureImage: (webcamRef) => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      fetch(imageSrc)
        .then(res => res.blob())
        .then(blob => {
          const file = new File([blob], 'captured_image.jpg', { type: 'image/jpeg' });
          set({ imageState: { file, preview: imageSrc }, isCapturing: false });
        });
    }
  },
  handleFileUpload: (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        set({ imageState: { file, preview: reader.result as string } });
      };
      reader.readAsDataURL(file);
    }
  },
  resetImage: () => set({ imageState: { file: null, preview: null } }),
  setIsCapturing: (value) => set({ isCapturing: value }),
}));
