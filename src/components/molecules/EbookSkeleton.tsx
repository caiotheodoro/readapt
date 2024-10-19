import { motion } from "framer-motion";

export const EbookSkeleton = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100 p-8">
      <motion.div
        className="w-3/4 h-4/5 bg-gray-200 rounded-lg shadow-md"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="w-full mt-8 flex justify-between">
        <motion.div
          className="w-16 h-8 bg-gray-200 rounded"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="w-16 h-8 bg-gray-200 rounded"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};
