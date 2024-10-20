
import React from 'react'
import { motion } from 'framer-motion'
import { Book } from '@/src/server/schema';
import { useAccessibilitySettings } from '@/src/hooks/useAccessibilitySettings';
import { cn } from '@/lib/utils';

export default function BookCard({ book, onClick }: { book: Book; onClick: () => void }) {
  const { getFontSize } = useAccessibilitySettings();

  return (
    <motion.div
      key={book.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
      onClick={onClick}
    >
      <img 
        src={book.cover} 
        alt={book.title} 
        className="w-full h-40 object-cover" 
        width={100} 
        height={100}
      />
      <div className="p-4">
        <h3 className={cn(`font-semibold  mb-1 truncate`, getFontSize().large)} title={book.title}>{book.title}</h3>
        <p className={cn(` text-gray-600 mb-2 line-clamp-1`, getFontSize().small)} title={book.author}>{book.author}</p>
      </div>
    </motion.div>
  )
}
