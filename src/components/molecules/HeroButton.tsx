import { motion } from "framer-motion"
import { Button } from "@/src/components/ui/button"
import { Code, Space } from "lucide-react"
import { useRouter } from "next/navigation";
interface HeroButtonProps {
  cta: string
  onClick: () => void
}

export function HeroButton({ cta, onClick }: HeroButtonProps) {
  const router = useRouter();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="flex items-center gap-2"
    >
      <Button className="flex items-center gap-2 text-gray-200 opacity-80 font-medium" onClick={onClick}>
        {cta} <Space className="w-4 h-4" />
      </Button>
      <Button variant="outline" className="text-gray-200 bg-transparent font-medium" onClick={() => router.push('/architecture')}>
         <Code className="w-4 h-4" />
      </Button>
    </motion.div>
  )
}
