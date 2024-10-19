import { motion } from "framer-motion"

export function BookSkeleton() {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
    >
      <div className="w-full h-40 bg-gray-300 animate-pulse" />
      <div className="p-4">
        <div className="h-6 bg-gray-300 rounded w-3/4 mb-2 animate-pulse" />
        <div className="h-4 bg-gray-300 rounded w-1/2 mb-2 animate-pulse" />
        <div className="h-8 bg-gray-300 rounded w-1/3 animate-pulse" />
      </div>
    </motion.div>
  )
}
