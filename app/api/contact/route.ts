import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    console.log('📥 Richiesta ricevuta al webhook')
    
    // Parse del body della richiesta
    const body = await request.json()
    console.log('📋 Dati ricevuti:', JSON.stringify(body, null, 2))
    
    // Validazione base dei dati
    const { firstName, lastName, email, phone, goals, privacy } = body
    
    if (!firstName || !lastName || !email || !phone || !goals || !privacy) {
      console.error('❌ Validazione fallita: campi mancanti')
      return NextResponse.json(
        { error: 'Tutti i campi sono obbligatori' },
        { status: 400 }
      )
    }

    // Ottieni l'URL del webhook N8n dalla variabile d'ambiente
    const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL
    console.log('🔗 N8N Webhook URL:', n8nWebhookUrl ? 'Configurato' : 'NON CONFIGURATO')
    
    if (!n8nWebhookUrl) {
      console.error('❌ N8N_WEBHOOK_URL non configurata nelle variabili d\'ambiente')
      return NextResponse.json(
        { error: 'Configurazione server non completa' },
        { status: 500 }
      )
    }

    // Prepara i dati da inviare a N8n
    const payload = {
      firstName,
      lastName,
      email,
      phone,
      goals,
      privacy,
      timestamp: new Date().toISOString(),
      source: 'website-contact-form'
    }

    console.log('📤 Invio dati a N8n:', n8nWebhookUrl)
    console.log('📦 Payload:', JSON.stringify(payload, null, 2))

    // Invia i dati a N8n tramite webhook
    const response = await fetch(n8nWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    console.log('📥 Risposta N8n - Status:', response.status)
    console.log('📥 Risposta N8n - OK:', response.ok)

    if (!response.ok) {
      const errorText = await response.text()
      console.error('❌ Errore N8n:', response.status, errorText)
      throw new Error(`N8n webhook risposta con errore: ${response.status} - ${errorText}`)
    }

    const responseData = await response.json().catch(() => ({}))
    console.log('✅ Dati inviati con successo a N8n')

    // Risposta di successo
    return NextResponse.json(
      { 
        success: true,
        message: 'Richiesta inviata con successo' 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('❌ Errore durante l\'invio del form:', error)
    
    const errorMessage = error instanceof Error ? error.message : 'Errore sconosciuto'
    console.error('❌ Dettagli errore:', errorMessage)
    
    return NextResponse.json(
      { 
        error: 'Errore durante l\'invio della richiesta. Riprova più tardi.',
        details: process.env.NODE_ENV === 'development' ? errorMessage : undefined
      },
      { status: 500 }
    )
  }
}


