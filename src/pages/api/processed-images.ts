import { NextApiRequest, NextApiResponse } from 'next';
import { processedImageService } from '@/src/services/elysia/processed-image';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const newProcessedImage = await processedImageService.addProcessedImage(req.body);
      res.status(200).json(newProcessedImage);
    } catch (error) {
      res.status(500).json({ error: 'Failed to add processed image' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
