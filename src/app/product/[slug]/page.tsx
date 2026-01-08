import { notFound } from "next/navigation"
import { products } from "@/lib/dummy-data"
import ProductGallery from "@/components/product/ProductGallery"
import ProductInfo from "@/components/product/ProductInfo"
import ProductReviews from "@/components/product/ProductReviews"
import BestSellers from "@/components/sections/BestSellers"

interface ProductPageProps {
    params: {
        slug: string
    }
}

// For static export of dummy pages
export async function generateStaticParams() {
    return products.map((product) => ({
        slug: product.slug,
    }))
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    // In a real app, we'd fetch based on slug. 
    // For prototype, we'll just use the first product if slug matches, or find it.
    const product = products.find(p => p.slug === slug) || products[0]

    if (!product) {
        notFound()
    }

    return (
        <main className="pt-24 pb-20 min-h-screen bg-background">
            <div className="container mx-auto px-4">
                {/* Breadcrumb (Simplified) */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
                    <span>Home</span>
                    <span>/</span>
                    <span>Shop</span>
                    <span>/</span>
                    <span className="text-foreground font-medium">{product.name}</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
                    {/* Left: Gallery */}
                    <div className="lg:col-span-7">
                        <ProductGallery images={product.images} />
                    </div>

                    {/* Right: Info */}
                    <div className="lg:col-span-5">
                        <div className="sticky top-24">
                            <ProductInfo product={product} />
                        </div>
                    </div>
                </div>

                {/* Reviews Section */}
                <div className="max-w-3xl mx-auto">
                    <ProductReviews reviews={product.reviews} />
                </div>
            </div>

            {/* Related Products (Reusing BestSellers for now) */}
            <div className="mt-20 border-t border-border pt-20">
                <div className="container mx-auto px-4 mb-12">
                    <h2 className="text-3xl font-serif" style={{ fontFamily: 'var(--font-playfair)' }}>You May Also Like</h2>
                </div>
                <BestSellers />
            </div>
        </main>
    )
}
