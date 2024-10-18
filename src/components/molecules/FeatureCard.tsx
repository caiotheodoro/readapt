import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card"
import { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  title: string
  description: string
  Icon?: LucideIcon
}

export function FeatureCard({ title, description, Icon }: FeatureCardProps) {
  return (
    <Card className="bg-blue-50 border-blue-100 h-full">
      <CardHeader>
        {Icon && <Icon className="w-12 h-12 mb-4 text-blue-600 mx-auto" />}
        <CardTitle className="text-blue-800 text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-blue-700 text-center">{description}</p>
      </CardContent>
    </Card>
  )
}
