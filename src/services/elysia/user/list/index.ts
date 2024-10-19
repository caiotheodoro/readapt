import { db } from "@/src/server";
import { users } from "@/src/server/schema";

export default async function fetchUsers() {
  return await db
    .select({
      id: users.id,
      username: users.username,
    })
    .from(users)
    .execute();
}
