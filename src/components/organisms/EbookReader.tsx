import { useState } from "react"
import { motion } from "framer-motion"
import { X } from "lucide-react"
import { ReactReader } from "react-reader"
import { getBucketPath } from "@/lib/utils"
import { Book } from "@/src/server/schema"
import { EbookSkeleton } from "../molecules/EbookSkeleton"

interface EbookReaderProps {
  book: Book
  onClose: () => void
}

export function EbookReader({ book, onClose }: EbookReaderProps) {
  const [location, setLocation] = useState<string>("epubcfi(/6/2[cover]!/6)")
  const [readerError, setReaderError] = useState<string | null>(null)

  const handleLocationChanged = (newLocation: string) => {
    setLocation(newLocation)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
    >
      <div className="bg-white w-full h-full max-h-screen rounded-lg overflow-hidden relative flex flex-col">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 z-10"
        >
          <X size={24} />
        </button>
        {readerError ? (
          <div className="p-4 text-red-500">{readerError}</div>
        ) : (
          <div className="flex-grow overflow-hidden">
            <ReactReader
              url={getBucketPath(book.downloadUrl)}
              title={book.title}
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
              loadingView={<EbookSkeleton />}
            />
          </div>
        )}
      </div>
    </motion.div>
  )
}
