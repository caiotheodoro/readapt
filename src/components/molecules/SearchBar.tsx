import React from "react"
import { Input } from "@/src/components/ui/input"
import { Button } from "@/src/components/ui/button"
import { Search, Sparkles, Camera } from "lucide-react"
import { CameraDialog } from "@/src/components/organisms/CameraDialog"
import { useCameraDialogStore } from "@/src/store/cameraDialogStore"

interface SearchBarProps {
  searchTerm: string
  setSearchTerm: (term: string) => void
  getRandomBook: () => void
}

export const SearchBar = React.forwardRef<HTMLDivElement, SearchBarProps>(
  ({ searchTerm, setSearchTerm, getRandomBook }, ref) => {
  const { setIsOpen } = useCameraDialogStore();

  return (
    <div className="pt-10 pb-10 md:px-0 px-4">
      <div className="relative max-w-2xl mx-auto rounded-lg w-full flex items-center justify-center gap-4 ">
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full bg-blue-500 flex items-center justify-center p-5 size-full max-w-16 max-h-16"
          data-testid="camera-button"
        >
          <Camera name="camera" size={32} />
        </Button>
        <Input
          type="text"
          placeholder="Search books..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-14 pr-4 py-2 focus:border-gray-400 focus:border-2 focus:border-opacity-40 h-16 text-xl rounded-full shadow-lg bg-white backdrop-blur-md"
        />
        <Search className="absolute left-24 top-1/2 transform -translate-y-1/2 text-gray-400" size={30} />
        <Button
          onClick={getRandomBook}
          className="rounded-full bg-blue-500 flex items-center justify-center p-5 size-full max-w-16 max-h-16"
          data-testid="random-book-button"
        >
          <Sparkles name="sparkles" size={32} />
        </Button>
      </div>
    </div>
  );
});

SearchBar.displayName = "SearchBar"
