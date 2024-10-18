import { Logo } from "../atoms/Logo"
import { Navigation } from "../molecules/Navigation"

export function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center justify-between w-full bg-white shadow-sm">
      <Logo />
      <Navigation />
    </header>
  )
}
