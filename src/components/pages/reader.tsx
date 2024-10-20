/* eslint-disable @next/next/no-img-element */
"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { useInView } from "react-intersection-observer"
import { useBookSearch } from "@/src/hooks/useBookSearch"
import { PageTransition } from "../atoms/PageTransition"
import { SearchBar } from "../molecules/SearchBar"
import { EbookReader } from "../organisms/EbookReader"
import { CameraDialog } from "../organisms/CameraDialog"
import { useAccessibilityStore } from "@/src/store/accessibilityStore"
import { useCameraDialogStore } from "@/src/store/cameraDialogStore"
import { BookGrid } from "../organisms/BookGrid"
import { StickyWrapper } from "../atoms/StickyWrapper"

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
  const { score } = useAccessibilityStore()
  const { setIsOpen: setIsCameraDialogOpen } = useCameraDialogStore()

  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  })

  const [showSearchBar, setShowSearchBar] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const searchBarRef = useRef<HTMLDivElement>(null)

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY
    const searchBarHeight = searchBarRef.current?.offsetHeight || 0

    if (currentScrollY < lastScrollY) {
      setShowSearchBar(true)
    } else if (currentScrollY > lastScrollY && currentScrollY > searchBarHeight) {
      setShowSearchBar(false)
    }
    setLastScrollY(currentScrollY)
  }, [lastScrollY])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  useEffect(() => {
    if (inView && hasMore && !isLoading) {
      loadMore()
    }
  }, [inView, hasMore, isLoading, loadMore])

  useEffect(() => {
    if (score !== 0) {
      setIsCameraDialogOpen(false)
    } else {
      setIsCameraDialogOpen(true)
    }
  }, [score, setIsCameraDialogOpen])

  return (
    <PageTransition>
      <div className="min-h-screen relative">
        <StickyWrapper isVisible={showSearchBar}>
          <SearchBar 
            searchTerm={searchTerm} 
            setSearchTerm={setSearchTerm} 
            getRandomBook={getRandomBook}
          />
        </StickyWrapper>
        <div className="transition-padding duration-300">
          <BookGrid
            onBackToReading={() => setSearchTerm("")} 
            books={books} 
            isLoading={isLoading} 
            error={error} 
            searchTerm={searchTerm}
            setSelectedBook={setSelectedBook}
            loadMoreRef={ref}
          />
        </div>
        {selectedBook && (
          <EbookReader 
            book={selectedBook} 
            onClose={() => setSelectedBook(null)} 
          />
        )}
        <CameraDialog/>
      </div>
    </PageTransition>
  )
}
