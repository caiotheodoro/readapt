import { NavLink } from "../atoms/NavLink"

export function Navigation() {
  return (
    <nav className="flex gap-4 sm:gap-6">
      <NavLink href="#features">Features</NavLink>
      <NavLink href="#about">About</NavLink>
      <NavLink href="#testimonial">Testimonials</NavLink>
    </nav>
  )
}
