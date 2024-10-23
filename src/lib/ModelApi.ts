import axios from 'axios';
import { env } from '../env';

interface AnalysisResult {
  error?: string | null;
  score_deficiencia_visual: number;
  deficiencia_visual_prevista: string;
  densidade_conteudo_recomendada: string;
  tamanho_fonte_recomendado: string;
  
  caracteristicas_extraidas : {
    Arched_Eyebrows: boolean;
    Bags_Under_Eyes: boolean;
    Bald: boolean;
    Blurry: boolean;
    Bushy_Eyebrows: boolean;
    Eyeglasses: boolean;
    Gray_Hair: boolean;
    Narrow_Eyes: boolean;
    Pale_Skin: boolean;
    Receding_Hairline: boolean;
    Young: boolean;
    Predicted_Visual_Impairment: string;
  }
}

export class ModelApi {
  private static baseUrl = env.NEXT_PUBLIC_API_URL;

  static async analyzeImage(file: File): Promise<AnalysisResult> {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post(`${this.baseUrl}/analyze-image/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error analyzing image:', error);
      throw error;
    }
  }
}
