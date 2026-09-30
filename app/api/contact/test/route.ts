import { NextResponse } from 'next/server'

const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
  '85643c6c-6a6a-49da-ac6d-e0d3ca7eff17'

export async function GET() {
  return NextResponse.json({
    emailConfigured: Boolean(WEB3FORMS_ACCESS_KEY),
    provider: 'Web3Forms',
    destination: 'vendruscolofederica@gmail.com',
    nodeEnv: process.env.NODE_ENV,
    message:
      'Web3Forms è configurato. Le richieste del form arriveranno via email.',
  })
}
