"use client"

import {
    ChevronLeft,
    ChevronRight,
    ChevronsLeft,
    ChevronsRight,
} from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "./button"

interface PaginationProps {
    meta: {
        limit: number
        page: number
        total: number
    }
}

const PaginationControl = ({ meta }: PaginationProps) => {
    const { limit, page: currentPage, total } = meta

    const searchParams = useSearchParams()
    const router = useRouter()

    const totalPages = Math.ceil(total / limit)

    const navigateToPage = (page: number) => {
        if (page < 1 || page > totalPages || totalPages === 0) return

        const params = new URLSearchParams(searchParams.toString())
        params.set("page", page.toString())
        router.push(`?${params.toString()}`)
    }


    if (totalPages === 0) return null

    return (
        <div className="my-5 flex justify-center">
            <div className="flex items-center space-x-2">


                <Button
                    variant="outline"
                    size="icon"
                    onClick={() => navigateToPage(1)}
                    disabled={currentPage === 1}
                >
                    <ChevronsLeft className="h-4 w-4" />
                </Button>

                <Button
                    variant="outline"
                    size="icon"
                    onClick={() => navigateToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    <ChevronLeft className="h-4 w-4" />
                </Button>
                <p className="text-sm text-muted-foreground">
                    Page {currentPage} of {totalPages}
                </p>
                <Button
                    variant="outline"
                    size="icon"
                    onClick={() => navigateToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    <ChevronRight className="h-4 w-4" />
                </Button>

                <Button
                    variant="outline"
                    size="icon"
                    onClick={() => navigateToPage(totalPages)}
                    disabled={currentPage === totalPages}
                >
                    <ChevronsRight className="h-4 w-4" />
                </Button>
            </div>
        </div>
    )
}

export default PaginationControl
