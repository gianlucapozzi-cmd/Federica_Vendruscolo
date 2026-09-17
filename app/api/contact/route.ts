import { NextRequest, NextResponse } from 'next/server'

const CONTACT_EMAIL =
  process.env.CONTACT_TO_EMAIL || 'vendruscolofederica@gmail.com'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, goals, privacy } = body

    if (!firstName || !lastName || !email || !phone || !goals || !privacy) {
      return NextResponse.json(
        { error: 'Tutti i campi sono obbligatori' },
        { status: 400 }
      )
    }

    const response = await fetch(
      `https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_EMAIL)}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          Nome: `${firstName} ${lastName}`,
          Email: email,
          Telefono: phone,
          Obiettivi: goals,
          _subject: `Nuova consulenza: ${firstName} ${lastName}`,
          _template: 'table',
          _captcha: 'false',
          _replyto: email,
        }),
      }
    )

    const result = await response.json().catch(() => ({}))

    if (!response.ok || result.success === false || result.success === 'false') {
      console.error('❌ Errore FormSubmit:', response.status, result)
      throw new Error(result.message || `Invio email fallito: ${response.status}`)
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Richiesta inviata con successo',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('❌ Errore durante l\'invio del form:', error)

    const errorMessage = error instanceof Error ? error.message : 'Errore sconosciuto'

    return NextResponse.json(
      {
        error: 'Errore durante l\'invio della richiesta. Riprova più tardi.',
        details: process.env.NODE_ENV === 'development' ? errorMessage : undefined,
      },
      { status: 500 }
    )
  }
}
