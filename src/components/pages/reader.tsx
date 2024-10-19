/* eslint-disable @next/next/no-img-element */
"use client"

import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { useBookSearch } from "@/src/hooks/useBookSearch"
import { PageTransition } from "../atoms/PageTransition"
import { SearchBar } from "../molecules/SearchBar"
import { BookGrid } from "../organisms/BookGrid"
import { EbookReader } from "../organisms/EbookReader"

export default function ReaderPage() {
  const { 
    books, 
    isLoading, 
    error, 
    searchTerm, 
    setSearchTerm, 
    loadMore, 
    hasMore, 
    selectedBook, 
    setSelectedBook, 
    getRandomBook 
  } = useBookSearch()

  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  })

  useEffect(() => {
    if (inView && hasMore && !isLoading) {
      loadMore()
    }
  }, [inView, hasMore, isLoading, loadMore])

  return (
    <PageTransition>
      <div className="min-h-screen noise-bg-grayscale relative">
        <SearchBar 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm} 
          getRandomBook={getRandomBook}
        />
        <BookGrid 
          books={books} 
          isLoading={isLoading} 
          error={error} 
          searchTerm={searchTerm}
          setSelectedBook={setSelectedBook}
          loadMoreRef={ref}
        />
        {selectedBook && (
          <EbookReader 
            book={selectedBook} 
            onClose={() => setSelectedBook(null)} 
          />
        )}
      </div>
    </PageTransition>
  )
}
