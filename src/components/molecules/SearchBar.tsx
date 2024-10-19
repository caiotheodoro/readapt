import { Input } from "@/src/components/ui/input"
import { Button } from "@/src/components/ui/button"
import { Search, Sparkles } from "lucide-react"

interface SearchBarProps {
  searchTerm: string
  setSearchTerm: (term: string) => void
  getRandomBook: () => void
}

export function SearchBar({ searchTerm, setSearchTerm, getRandomBook }: SearchBarProps) {
  return (
    <div className="pt-10 pb-10 md:px-0 px-4">
      <div className="relative max-w-2xl mx-auto rounded-lg w-full flex items-center justify-center gap-4 ">
        <Input
          type="text"
          placeholder="Search books..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="focus:outline-none focus-visible:ring-0 w-full pl-14 pr-4 py-2 focus:border-gray-400 focus:border-2 focus:border-opacity-40 h-16 text-xl rounded-full shadow-lg bg-white  backdrop-blur-md"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={30} />
        <Button 
          className="rounded-full bg-blue-500 flex items-center justify-center p-5 size-full max-w-16 max-h-16" 
          size="icon"
          onClick={getRandomBook}
        >
          <Sparkles size={32} className="min-h-6 min-w-6" />
        </Button>
      </div>
    </div>
  )
}
