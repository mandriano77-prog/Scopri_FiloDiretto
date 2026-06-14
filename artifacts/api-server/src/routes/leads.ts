import { Router, type IRouter } from "express";
import { db, leadsTable } from "@workspace/db";
import { CreateLeadBody } from "@workspace/api-zod";

const router: IRouter = Router();

router.post("/leads", async (req, res) => {
  const parsed = CreateLeadBody.safeParse(req.body);

  if (!parsed.success) {
    req.log.warn({ issues: parsed.error.issues }, "Invalid lead submission");
    res.status(400).json({ error: "Dati non validi" });
    return;
  }

  try {
    const [lead] = await db
      .insert(leadsTable)
      .values({
        name: parsed.data.name,
        email: parsed.data.email,
        company: parsed.data.company,
        companySize: parsed.data.companySize,
        role: parsed.data.role ?? null,
        phone: parsed.data.phone ?? null,
        plan: parsed.data.plan ?? null,
        message: parsed.data.message ?? null,
      })
      .returning();

    res.status(201).json({
      ...lead,
      createdAt: lead.createdAt.toISOString(),
    });
  } catch (err) {
    req.log.error({ err }, "Failed to persist lead");
    res.status(500).json({ error: "Errore interno del server" });
  }
});

export default router;
