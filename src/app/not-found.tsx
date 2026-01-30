'use client'

import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  const router = useRouter()

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      {/* BIG 404 */}
      <h1 className="text-[120px] font-extrabold leading-none tracking-tight text-muted-foreground">
        404
      </h1>

      <h2 className="mt-4 text-3xl font-bold tracking-tight">
        Page not found
      </h2>

      <p className="mt-2 max-w-md text-muted-foreground">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>

      <div className="mt-6 flex gap-4">
        {/* HOME */}
        <Button asChild>
          <Link href="/">
            <Home className="mr-2 h-4 w-4" />
            Go Home
          </Link>
        </Button>

        {/* GO BACK */}
        <Button
          variant="outline"
          onClick={() => router.back()}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Go Back
        </Button>
      </div>
    </div>
  )
}
