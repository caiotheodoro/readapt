import { HeroTitle } from "../atoms/HeroTitle"
import { HeroSubtitle } from "../atoms/HeroSubtitle"
import { HeroDescription } from "../atoms/HeroDescription"
import { HeroButton } from "./HeroButton"
import Eye from "./Eye"

interface HeroContentProps {
  title: string
  subtitle: string
  description: string
  cta: string
  handleInteraction: () => void
}

export function HeroContent({ title, subtitle, description, cta, handleInteraction }: HeroContentProps) {
  
  return (
    <div className="flex-1 text-center md:text-left md:pr-10">
      <div className="flex items-center gap-4 h-fit mb-4">
        <Eye />
        <HeroTitle title={title} />
      </div>
      <HeroSubtitle subtitle={subtitle} />
      <HeroDescription description={description} />
      <HeroButton cta={cta} onClick={handleInteraction} />
    </div>
  )
}
