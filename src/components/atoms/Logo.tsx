import { BookOpen } from "lucide-react"
import Link from "next/link"

export function Logo() {
  return (
    <Link className="flex items-center justify-center" href="#">
      <BookOpen className="h-6 w-6 mr-2" />
      <span className="font-bold">Readapt</span>
    </Link>
  )
}
