import { NextResponse } from 'next/server';

const N8N_URL = "http://localhost:5678/webhook-test/sendd";
const TIMEOUT = 8000; // 8 secondes

export async function POST(request: Request) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), TIMEOUT);

  try {
    const data = await request.json();
    
    // Envoi des données à n8n
    const response = await fetch(N8N_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`Erreur n8n: ${response.status}`);
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("Échec critique:", error);
    return NextResponse.json(
      { error: "Service temporairement indisponible" },
      { status: 503 }
    );
  }
}