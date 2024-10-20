import { db } from "@/src/server";
import { processedImages, type NewProcessedImage } from "@/src/server/schema";

export async function addProcessedImage(imageData: NewProcessedImage) {
  try {
    const [insertedImage] = await db
      .insert(processedImages)
      .values(imageData)
      .returning()
      .execute();

    return insertedImage;
  } catch (error) {
    console.error("Error adding processed image to database:", error);
    throw new Error("Failed to add processed image to database");
  }
}
