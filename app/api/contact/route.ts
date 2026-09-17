import { NextRequest, NextResponse } from 'next/server'

const CONTACT_EMAIL =
  process.env.CONTACT_TO_EMAIL || 'vendruscolofederica@gmail.com'

function getSiteUrl(request: NextRequest) {
  const origin = request.headers.get('origin')
  if (origin) return origin

  const referer = request.headers.get('referer')
  if (referer) {
    try {
      return new URL(referer).origin
    } catch {
      // ignore invalid referer
    }
  }

  const host =
    request.headers.get('x-forwarded-host') || request.headers.get('host')
  if (host) {
    const proto = request.headers.get('x-forwarded-proto') || 'https'
    return `${proto}://${host}`
  }

  return 'https://federicavendruscolo.pt'
}

function needsActivation(message: unknown) {
  return (
    typeof message === 'string' &&
    message.toLowerCase().includes('activation')
  )
}

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

    const siteUrl = getSiteUrl(request)

    const response = await fetch(
      `https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_EMAIL)}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Origin: siteUrl,
          Referer: `${siteUrl}/`,
          'User-Agent':
            request.headers.get('user-agent') ||
            'Mozilla/5.0 (compatible; FedericaVendruscolo/1.0)',
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
          _url: siteUrl,
        }),
      }
    )

    const result = await response.json().catch(() => ({}))
    const activationPending = needsActivation(result.message)

    if (
      !activationPending &&
      (!response.ok || result.success === false || result.success === 'false')
    ) {
      console.error('❌ Errore FormSubmit:', response.status, result)
      throw new Error(result.message || `Invio email fallito: ${response.status}`)
    }

    return NextResponse.json(
      {
        success: true,
        activationPending,
        message: activationPending
          ? 'Modulo da attivare: Federica deve confermare la mail di FormSubmit.'
          : 'Richiesta inviata con successo',
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
