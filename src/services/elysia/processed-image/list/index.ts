import { db } from "@/src/server";
import { processedImages } from "@/src/server/schema";
import { sql } from "drizzle-orm";

interface GetProcessedImagesParams {
  page: number;
  pageSize: number;
  search: string;
}

export async function getProcessedImages({ page, pageSize, search }: GetProcessedImagesParams) {
  const offset = (page - 1) * pageSize;

  const query = db
    .select()
    .from(processedImages)
    .limit(pageSize)
    .offset(offset);

  if (search) {
    query.where(sql`image ILIKE ${`%${search}%`}`);
  }

  const result = await query.execute();

  return {
    processedImages: result,
    page,
    pageSize,
  };
}
