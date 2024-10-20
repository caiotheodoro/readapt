import React from 'react'
import { motion } from 'framer-motion'
import { Book } from '@/src/server/schema';
import { useAccessibilitySettings } from '@/src/hooks/useAccessibilitySettings';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export default function BookCard({ book, onClick }: { book: Book; onClick: () => void }) {
  const { getFontSize } = useAccessibilitySettings();

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg "
      onClick={onClick}
    >
      <div className="relative w-full h-40">
        <Image 
          src={book.cover} 
          alt={book.title} 
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 ease-in-out transform hover:scale-105"
        />
      </div>
      <motion.div layout className="p-4">
        <motion.h3 
          layout
          className={cn(`font-semibold mb-1 truncate transition-all duration-300`, getFontSize().large)} 
          title={book.title}
        >
          {book.title}
        </motion.h3>
        <motion.p 
          layout
          className={cn(`text-gray-600 mb-2 line-clamp-1 transition-all duration-300`, getFontSize().small)} 
          title={book.author}
        >
          {book.author}
        </motion.p>
      </motion.div>
    </motion.div>
  )
}
