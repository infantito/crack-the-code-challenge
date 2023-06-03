import { NextResponse } from 'next/server'

import { fetchRutasApi } from '@services'

async function GET() {
  const response = await fetchRutasApi()

  return NextResponse.json(response)
}

export { GET }
