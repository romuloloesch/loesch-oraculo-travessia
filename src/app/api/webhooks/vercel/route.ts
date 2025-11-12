import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: Request) {
  try {
    const secret = process.env.VERCEL_WEBHOOK_SECRET || "";
    const signature = req.headers.get("x-vercel-signature") || "";
    const raw = await req.text();

    // valida a assinatura
    const expected = crypto.createHmac("sha256", secret).update(raw).digest("hex");
    if (signature !== expected) {
      console.warn("[Webhook] assinatura inválida");
      return NextResponse.json({ ok: false, error: "invalid signature" }, { status: 401 });
    }

    const body = JSON.parse(raw);
    const event = body?.type || "unknown";
    const url = body?.payload?.deployment?.url || "—";

    console.log(`[Webhook Vercel] Evento recebido: ${event} → ${url}`);

    return NextResponse.json({ ok: true, event, url });
  } catch (err) {
    console.error("[Webhook Error]", err);
    return NextResponse.json({ ok: false, error: "internal error" }, { status: 500 });
  }
}
