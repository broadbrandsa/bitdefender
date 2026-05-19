import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Basic auth gate for the /admin tree.
// Set ADMIN_USER and ADMIN_PASS in environment. If not set,
// /admin is locked entirely (returns 503).
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  if (!pathname.startsWith('/admin')) return NextResponse.next()

  const expectedUser = process.env.ADMIN_USER
  const expectedPass = process.env.ADMIN_PASS

  if (!expectedUser || !expectedPass) {
    return new NextResponse(
      'Admin disabled. Set ADMIN_USER and ADMIN_PASS environment variables.',
      { status: 503 },
    )
  }

  const auth = request.headers.get('authorization')
  if (auth?.startsWith('Basic ')) {
    try {
      const decoded = atob(auth.slice(6))
      const sep = decoded.indexOf(':')
      const user = decoded.slice(0, sep)
      const pass = decoded.slice(sep + 1)
      if (user === expectedUser && pass === expectedPass) {
        return NextResponse.next()
      }
    } catch {
      // fall through to challenge
    }
  }

  return new NextResponse('Authentication required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Admin", charset="UTF-8"',
    },
  })
}

export const config = {
  matcher: ['/admin/:path*'],
}
