import { NextResponse } from 'next/server'

export async function POST() {
  return NextResponse.json(
    {
      error:
        'Il form invia le richieste dal browser con Web3Forms. Questa API non è più usata.',
    },
    { status: 410 }
  )
}
