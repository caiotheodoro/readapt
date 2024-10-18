import Link from "next/link"

interface NavLinkProps {
  href: string
  children: React.ReactNode
}

export function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link className="text-sm font-medium hover:underline underline-offset-4" href={href}>
      {children}
    </Link>
  )
}
