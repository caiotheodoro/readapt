import { Elysia } from "elysia";
import userRoutes from "../../routes/user.routes";
import swagger from "@elysiajs/swagger";
import { userService } from "./user";
import { bookRoutes } from "../../routes/book.routes";
import { bookService } from "./book";

const app = new Elysia()
  .use(swagger())
  .use(userRoutes)
  .use(bookRoutes)
  .get("/", () => "Hello World!")
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

export const services = {
  user: userService,
  book: bookService,
};
