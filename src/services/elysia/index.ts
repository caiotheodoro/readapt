import { Elysia } from "elysia";
import userRoutes from "../../routes/user.routes";
import swagger from "@elysiajs/swagger";
import { userService } from "./user";
import { bookRoutes } from "../../routes/book.routes";
import { bookService } from "./book";
import { processedImageRoutes } from "../../routes/processed-images.routes";
import { processedImageService } from "./processed-image";

const app = new Elysia()
  .use(swagger())
  .use(userRoutes)
  .use(bookRoutes)
  .use(processedImageRoutes)
  .get("/", () => "Hello World!")
  .listen(3000);



export const services = {
  user: userService,
  book: bookService,
  processedImage: processedImageService,
};
