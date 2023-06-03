import { NextRequest, NextResponse } from 'next/server'

import type { RutaDetailResponse, RutasResponse } from '@typings'
import { fetchRutaBySlugApi } from '@services'

async function GET(
  _req: NextRequest,
  res: NextResponse<string | RutasResponse> & { params: Pick<RutaDetailResponse, 'slug'> }
) {
  const { slug } = res.params

  const response = await fetchRutaBySlugApi({ slug })

  return NextResponse.json(response)
}

export { GET }
