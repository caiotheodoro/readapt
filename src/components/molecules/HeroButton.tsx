import { motion } from "framer-motion"
import { Button } from "@/src/components/ui/button"
import { Space } from "lucide-react"

interface HeroButtonProps {
  cta: string
  onClick: () => void
}

export function HeroButton({ cta, onClick }: HeroButtonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
    >
      <Button className="flex items-center gap-2 text-gray-200 opacity-80 font-medium" onClick={onClick}>
        {cta} <Space className="w-4 h-4" />
      </Button>
    </motion.div>
  )
}
