import { Elysia, t } from "elysia";
import { processedImageService } from "../services/elysia/processed-image";

export const processedImageRoutes = new Elysia({ prefix: "/processed-images" })
  .get("/", async ({ query }: { query: any }) => {
    const { page, pageSize, search } = query;
    const result = await processedImageService.getProcessedImages({
      page: page ? parseInt(page) : 1,
      pageSize: pageSize ? parseInt(pageSize) : 12,
      search: search || '',
    });
    return {
      processedImages: result.processedImages,
      page: result.page,
      pageSize: result.pageSize,
    };
  }, {
    query: t.Object({
      page: t.Optional(t.String()),
      pageSize: t.Optional(t.String()),
      search: t.Optional(t.String()),
    }),
    detail: {
      description: "Get paginated list of processed images with optional search",
      tags: ["Processed Image routes"],
    },
  })
  .post("/", async ({ body }: { body: any }) => {
    const newProcessedImage = await processedImageService.addProcessedImage(body);
    return newProcessedImage;
  }, {
    body: t.Object({
      score: t.Number(),
      image: t.String(),
      Arched_Eyebrows: t.Boolean(),
      Bags_Under_Eyes: t.Boolean(),
      Bushy_Eyebrows: t.Boolean(),
      Eyeglasses: t.Boolean(),
      Gray_Hair: t.Boolean(),
      High_Cheekbones: t.Boolean(),
      Male: t.Boolean(),
      Narrow_Eyes: t.Boolean(),
      Young: t.Boolean(),
    }),
    detail: {
      description: "Add a new processed image",
      tags: ["Processed Image routes"],
    },
  });
