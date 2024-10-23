import { Elysia, t } from "elysia";
import { reinforcementAccessibilityService } from "../services/elysia/reinforcement-accessibility";

export const reinforcementAccessibilityRoutes = new Elysia({ prefix: "/analyze-feedback" })
.post("/", async ({ body }: { body: any }) => {
  const newReinforcementAccessibility = await reinforcementAccessibilityService.addReinforcementAccessibility(body);
  return newReinforcementAccessibility;
}, {
  body: t.Object({
    score: t.Number(),
    fontSize: t.String(),
    contentDensity: t.String(),
    predictedVisualImpairment: t.String(),
    reinforcementVisualImpairment: t.String(),
  }),
});
