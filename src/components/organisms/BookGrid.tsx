"use client"
import { motion, AnimatePresence } from "framer-motion"
import { Book } from "@/src/server/schema"
import { BookSkeleton } from "../molecules/BookSkeleton"
import { useAccessibilitySettings } from "@/src/hooks/useAccessibilitySettings"
import { cn } from "@/lib/utils"
import BookCard from "../molecules/BookCard"
import { NoResultsFound } from "../molecules/NoResultsFound"

interface BookGridProps {
  books: Book[]
  isLoading: boolean
  error: string | null
  searchTerm: string
  setSelectedBook: (book: Book) => void
  loadMoreRef: (node?: Element | null | undefined) => void
  onBackToReading: () => void
}

export function BookGrid({ books, isLoading, error, searchTerm, setSelectedBook, loadMoreRef, onBackToReading }: BookGridProps) {
  const {  getGridColumns } = useAccessibilitySettings();

  const showNoResults = !isLoading && books.length === 0 && searchTerm !== '';

  return (
    <div className="scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 ">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto p-8"
      >
        {error && <p className="text-center text-red-500">{error}</p>}
        {!showNoResults && (
          <h2 className="text-xl font-semibold mb-4">
            {searchTerm ? `Search Results for "${searchTerm}"` : ""}
          </h2>
        )}
        {showNoResults ? (
          <NoResultsFound searchQuery={searchTerm} onBackToReading={onBackToReading} />
        ) : (
          <motion.div 
            layout
            className={cn('grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4', getGridColumns())}
          >
            <AnimatePresence>
              {books.map((book) => (
                <BookCard key={book.id} book={book} onClick={() => setSelectedBook(book)} />
              ))}
            </AnimatePresence>
          </motion.div>
        )}
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
