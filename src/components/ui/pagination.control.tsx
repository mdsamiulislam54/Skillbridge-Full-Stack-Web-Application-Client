"use client"
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, ChevronsRightLeft } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from './button';



interface PaginationProps {
    meta: {
        limit: number;
        page: number;
        total: number;
        totalPages: number;
    };
}



const PaginationControl = ({ meta }: PaginationProps) => {
    const { limit: pageSize, page: currentPage,  totalPages } = meta;
    const searchParams = useSearchParams();
    const router = useRouter();

    const navigateToPage = (page: number) => {
        if (page < 1) return
        if (page > totalPages) return
        if (totalPages === 0) return
        const params = new URLSearchParams(searchParams.toString());
        params.set("page", page.toString());
        router.push(`?${params.toString()}`);

    };

    return (
        <div className='my-5 flex justify-center'>
            <div className="flex items-center space-x-2">
                <Button
                    variant="outline"
                    size="icon"
                    onClick={() => navigateToPage(1)}
                     disabled={currentPage <= 1 || totalPages === 0}
                >
                    <ChevronsLeft className="h-4 w-4" />
                </Button>

                <Button
                    variant="outline"
                    size="icon"
                    onClick={() => navigateToPage(currentPage - 1)}
                  disabled={currentPage <= 1 || totalPages === 0}
                >
                    <ChevronLeft className="h-4 w-4" />
                </Button>

                <div className="flex items-center gap-1">
                    <span className="text-sm font-medium">
                        Page {currentPage} of {totalPages}
                    </span>
                </div>

                <Button
                    variant="outline"
                    size="icon"
                    onClick={() => navigateToPage(currentPage + 1)}
                    disabled={currentPage >= totalPages && totalPages === 0}
                >
                    <ChevronRight className="h-4 w-4" />
                </Button>

                <Button
                    variant="outline"
                    size="icon"
                    onClick={() => navigateToPage(totalPages)}
                    disabled={currentPage >= totalPages && totalPages === 0}
                >
                    <ChevronsRight className="h-4 w-4" />
                </Button>
            </div>
        </div>
    )
}

export default PaginationControl