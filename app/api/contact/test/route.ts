import { NextResponse } from 'next/server'

const CONTACT_EMAIL =
  process.env.CONTACT_TO_EMAIL || 'vendruscolofederica@gmail.com'

export async function GET() {
  return NextResponse.json({
    emailConfigured: true,
    provider: 'FormSubmit',
    destination: CONTACT_EMAIL,
    nodeEnv: process.env.NODE_ENV,
    message:
      'Nessuna API key necessaria. Al primo invio Federica deve confermare l’email di attivazione di FormSubmit (anche in spam).',
  })
}
