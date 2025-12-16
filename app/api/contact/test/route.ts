import { NextResponse } from 'next/server'

// Endpoint di test per verificare la configurazione
export async function GET() {
  const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL
  
  return NextResponse.json({
    n8nWebhookConfigured: !!n8nWebhookUrl,
    n8nWebhookUrl: n8nWebhookUrl ? 'Configurato (URL nascosto per sicurezza)' : 'NON CONFIGURATO',
    nodeEnv: process.env.NODE_ENV,
    message: n8nWebhookUrl 
      ? '✅ Configurazione corretta! Il webhook è configurato.' 
      : '❌ ERRORE: N8N_WEBHOOK_URL non trovata nelle variabili d\'ambiente. Assicurati di aver creato il file .env.local e riavviato il server.'
  })
}

