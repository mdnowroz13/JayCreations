import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { ArrowLeft } from "lucide-react"

interface PlaceholderPageProps {
    title: string
    description?: string
}

export default function PlaceholderPage({ title, description = "This collection is currently being curated. Check back soon!" }: PlaceholderPageProps) {
    return (
        <div className="min-h-[60vh] pt-28 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">{title}</h1>
            <p className="text-muted-foreground max-w-md mb-8">{description}</p>
            <Link href="/">
                <Button variant="outline" className="gap-2">
                    <ArrowLeft className="w-4 h-4" /> Back to Home
                </Button>
            </Link>
        </div>
    )
}
