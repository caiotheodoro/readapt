import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { X } from "lucide-react"
import { IReactReaderStyle, ReactReader, ReactReaderStyle } from "react-reader"
import { getBucketPath } from "@/lib/utils"
import { Book } from "@/src/server/schema"
import { EbookSkeleton } from "../molecules/EbookSkeleton"
import { useAccessibilitySettings } from "@/src/hooks/useAccessibilitySettings"
import type { Contents, Rendition } from 'epubjs'
import { grayscaleReaderTheme } from "@/src/lib/constants"
interface EbookReaderProps {
  book: Book
  onClose: () => void
}

export function EbookReader({ book, onClose }: EbookReaderProps) {
  const { getEbookFontSizePercentage } = useAccessibilitySettings();
  const [location, setLocation] = useState<string>("epubcfi(/6/2[cover]!/6)")
  const [readerError, setReaderError] = useState<string | null>(null)
  const rendition = useRef<Rendition | undefined>(undefined)
  const handleLocationChanged = (newLocation: string) => {
    setLocation(newLocation)
  }

  return (
    
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-5 "
    >
      <div className="bg-white w-full h-full max-h-screen  overflow-hidden flex flex-col sticky top-0 left-0 right-0 bottom-0">
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
              readerStyles={grayscaleReaderTheme}
              locationChanged={handleLocationChanged}
              showToc={true}
              epubOptions={{
                flow: "paginated",
                manager: "default"
              }}
              epubInitOptions={{
                openAs: 'epub',
              }}
              getRendition={(_rendition: Rendition) => {
                rendition.current = _rendition
                rendition.current.themes.fontSize(getEbookFontSizePercentage().toString() + '%')
              }}
              loadingView={<EbookSkeleton />}
              />
            </div>
       
        )}
      </div>
    </motion.div>
  )
}
