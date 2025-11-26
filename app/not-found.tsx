// app/not-found.tsx

import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-xl mt-2 text-muted-foreground">Page Not Found</p>
      <Link href="/" className="mt-6 text-primary hover:underline">
        Return Home
      </Link>
    </div>
  )
}