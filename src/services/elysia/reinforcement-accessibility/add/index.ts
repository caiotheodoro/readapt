import { db } from "@/src/server";
import { reinforcementAcessibility, type NewReinforcementAcessibility } from "@/src/server/schema";

export async function addReinforcementAccessibility(data: NewReinforcementAcessibility) {
  try {
    const [insertedData] = await db
      .insert(reinforcementAcessibility)
      .values(data)
      .returning()
      .execute();

    return insertedData;
  } catch (error) {
    console.error("Error adding reinforcement accessibility data to database:", error);
    throw new Error("Failed to add reinforcement accessibility data to database");
  }
}
