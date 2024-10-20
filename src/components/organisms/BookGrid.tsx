import { motion, AnimatePresence } from "framer-motion"
import { Book } from "@/src/server/schema"
import { BookSkeleton } from "../molecules/BookSkeleton"
import BookCard from "../molecules/BookCard"
import { useAccessibilitySettings } from "@/src/hooks/useAccessibilitySettings"
import { cn } from "@/lib/utils"

interface BookGridProps {
  books: Book[]
  isLoading: boolean
  error: string | null
  searchTerm: string
  setSelectedBook: (book: Book) => void
  loadMoreRef: (node?: Element | null | undefined) => void
}

export function BookGrid({ books, isLoading, error, searchTerm, setSelectedBook, loadMoreRef }: BookGridProps) {
  const { getContentDensity, getGridColumns } = useAccessibilitySettings();
  
  return (
    <div className="overflow-y-auto max-h-[calc(100vh-150px)] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto p-8"
      >
        {error && <p className="text-center text-red-500">{error}</p>}
        <h2 className="text-xl font-semibold mb-4">
          {searchTerm ? `Search Results for "${searchTerm}"` : ""}
        </h2>
        <motion.div 
          
          className={cn('grid gap-6', getGridColumns(), getContentDensity())}
        >
          <AnimatePresence>
            {books.map((book) => (
              <BookCard key={book.id} book={book} onClick={() => setSelectedBook(book)} />
            ))}
          </AnimatePresence>
        </motion.div>
        {isLoading && (
          <div className={cn('grid gap-6 mt-6 transition-all duration-300', getGridColumns())}>
            {Array.from({ length: 8 }).map((_, index) => (
              <BookSkeleton key={index} />
            ))}
          </div>
        )}
        <div ref={loadMoreRef} className="h-10" />
      </motion.div>
    </div>
  )
}
