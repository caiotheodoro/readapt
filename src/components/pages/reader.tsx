/* eslint-disable @next/next/no-img-element */
"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Input } from "@/src/components/ui/input"
import { Search, Download, X, ArrowLeft, ArrowLeftFromLine, ChevronLast, ChevronLeft, Camera } from "lucide-react"
import { useBookSearch } from "@/src/hooks/useBookSearch"
import { IReactReaderProps, ReactReader, ReactReaderStyle } from "react-reader"
import { BookSkeleton } from "../molecules/BookSkeleton"
import { getBucketPath } from "@/lib/utils"
import { useInView } from "react-intersection-observer"
import { Button } from "../ui/button"

export default function ReaderPage() {
  const { books, loading, error, searchTerm, setSearchTerm, loadMore, hasMore } = useBookSearch()
  const [selectedBook, setSelectedBook] = useState<{ title: string; downloadUrl: string } | null>(null)
  const [location, setLocation] = useState<string>("epubcfi(/6/2[cover]!/6)")
  const [readerError, setReaderError] = useState<string | null>(null)
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  })

  useEffect(() => {
    if (inView && hasMore && !loading) {
      loadMore()
    }
  }, [inView, hasMore, loading, loadMore])

  const openReader = (book: { title: string; downloadUrl: string }) => {
    setSelectedBook({ title: book.title, downloadUrl: book.downloadUrl })
    setReaderError(null)
  }

  const closeReader = () => {
    setSelectedBook(null)
    setReaderError(null)
  }

  const handleLocationChanged = (newLocation: string) => {
    setLocation(newLocation)
  }


 

  return (
    <div className="min-h-screen  bg-gray-100 ">
      <div className="pt-10">
        
        <div className="relative max-w-2xl mx-auto rounded-lg w-full flex items-center justify-center gap-4">
          <Input
            type="text"
            placeholder="Search books..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-14 pr-4 py-2 focus:border-gray-400 focus:border-2 focus:border-opacity-40 h-16 text-xl rounded-full shadow-lg "
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={30} />
          <Button className="rounded-full bg-blue-500 flex items-center justify-center p-5 size-full max-w-16 max-h-16" size="icon">
            <Camera size={32} className="min-h-6 min-w-6" />
          </Button>
        </div>
        
      </div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto  p-8 mt-4"
      >
      
        {error && <p className="text-center text-red-500">{error}</p>}
        <h2 className="text-xl font-semibold mb-4">
          {searchTerm ? `Search Results for "${searchTerm}"` : ""}
        </h2>
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          <AnimatePresence>
            {books.map((book, index) => (
              <motion.div
                key={book.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
                onClick={() => openReader(book)}
              >
                <img 
                src={book.cover} 
                alt={book.title} 
                className="w-full h-40 object-cover" 
                width={100} 
                height={100}
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1 truncate" title={book.title}>{book.title}</h3>
                  <p className="text-sm text-gray-600 mb-2 line-clamp-1" title={book.author}>{book.author}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        {loading && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-6">
            {Array.from({ length: 8 }).map((_, index) => (
              <BookSkeleton key={index} />
            ))}
          </div>
        )}
        {hasMore && <div ref={ref} className="h-10" />}
      </motion.div>

      {selectedBook && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <div className="bg-white w-full h-full md:w-3/4 md:h-3/4 rounded-lg overflow-hidden relative">
            <button
              onClick={closeReader}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 z-10"
            >
              <X size={24} />
            </button>
            {readerError ? (
              <div className="p-4 text-red-500">{readerError}</div>
            ) : (
              <ReactReader
                url={getBucketPath(selectedBook.downloadUrl)}
                title={selectedBook.title}
                location={location}
                locationChanged={handleLocationChanged}
                showToc={true}
                epubOptions={{
                  flow: "paginated",
                  manager: "default"
                }}
                epubInitOptions={{
                  openAs: 'epub',
                }}
                getRendition={(rendition) => {
                  rendition.on("rendered", (section: any) => {
                    console.log("Rendered:", section)
                  })
                  rendition.on("displayed", (event: any) => {
                    console.log("Displayed:", event)
                  })
                }}
                loadingView={<div className="p-4">Loading ebook...</div>}
              />
            )}
          </div>
        </motion.div>
      )}
    </div>
  )
}
