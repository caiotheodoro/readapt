import { Elysia } from "elysia";
import swagger from "@elysiajs/swagger";
import { bookRoutes } from "../../routes/book.routes";
import { bookService } from "./book";
import { processedImageRoutes } from "../../routes/processed-images.routes";
import { processedImageService } from "./processed-image";
import { reinforcementAccessibilityRoutes } from "@/src/routes/reinforcement-accessibility.routes";

const app = new Elysia()
  .use(swagger())
  .use(bookRoutes)
  .use(processedImageRoutes)
  .use(reinforcementAccessibilityRoutes)
  .get("/", () => "Hello World!")
  .listen(3000);



export const services = {
  book: bookService,
  processedImage: processedImageService,
};
