import { Elysia, t } from "elysia";
import { bookService } from "../services/elysia/book";

export const bookRoutes = new Elysia({ prefix: "/books" })
  .get("/", async ({ query }) => {
    const { page, pageSize, search } = query;
    const result = await bookService.getBooks({
      page: page ? parseInt(page) : 1,
      pageSize: pageSize ? parseInt(pageSize) : 12,
      search: search || '',
    });
    return {
      books: result.books,
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
      description: "Get paginated list of books with optional search",
      tags: ["Book routes"],
    },
  });
