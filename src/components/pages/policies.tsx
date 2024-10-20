import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/src/components/ui/card"
import { BookOpen, Camera, Cookie } from "lucide-react"

export default function PoliciesPage() {
  return (
    <div className="container mx-auto py-10 h-screen flex justify-center items-center">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Our Policies</CardTitle>
          <CardDescription>
            Please read our policies regarding data usage, photo processing, and cookies.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <section className="space-y-3">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-semibold">E-book Reading Application Policies</h2>
            </div>
            <p className="text-sm text-muted-foreground">
              Our e-book reading application is designed to provide you with the best reading experience possible. To achieve this, we have implemented certain policies regarding data usage, photo processing, and cookies.
            </p>
          </section>

          <section className="space-y-3">
            <div className="flex items-center space-x-2">
              <Camera className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-semibold">Photo Processing and Data Storage</h2>
            </div>
            <p className="text-sm text-muted-foreground">
              We use the photos you provide to enhance your reading experience and improve our services. Here&apos;s how we handle your photos:
            </p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Your photos are securely stored on our servers.</li>
              <li>We process your photos to extract relevant information for personalizing your reading experience.</li>
              <li>We do not share your photos with third parties without your explicit consent.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <div className="flex items-center space-x-2">
              <Cookie className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-semibold">Cookie Policy</h2>
            </div>
            <p className="text-sm text-muted-foreground">
              We use cookies to enhance your experience on our platform. Cookies help us:
            </p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Remember your preferences and settings.</li>
              <li>Analyze how you use our application to improve its performance.</li>
            </ul>
            <p className="text-sm text-muted-foreground">
              You can manage your cookie preferences through your browser settings. However, disabling certain cookies may limit some features of our application.
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  )
}