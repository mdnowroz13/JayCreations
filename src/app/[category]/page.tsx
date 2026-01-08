"use client"
import { products } from "@/lib/dummy-data"
import ProductCard from "@/components/ui/ProductCard"
import { useParams } from "next/navigation"
import { motion } from "framer-motion"

export default function CategoryPage() {
    const params = useParams()
    const categorySlug = params.category as string

    // Normalize category for comparison (e.g., "dresses" -> "Dresses")
    // This is a simple mapping, for a real app we might want a robust slug-to-name map
    const categoryName = categorySlug.charAt(0).toUpperCase() + categorySlug.slice(1)

    const filteredProducts = products.filter(
        product => product.category.toLowerCase() === categorySlug.toLowerCase()
    )

    if (filteredProducts.length === 0) {
        return (
            <div className="container mx-auto px-4 py-32 text-center min-h-[60vh] flex flex-col items-center justify-center">
                <h1 className="text-3xl font-serif mb-4">Category Not Found</h1>
                <p className="text-muted-foreground">We couldn't find any products in this category.</p>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 py-32 min-h-screen">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-12 text-center"
            >
                <h1 className="text-4xl md:text-5xl font-serif mb-4">{categoryName}</h1>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Explore our exclusive collection of {categoryName.toLowerCase()}. Designed for the modern muse.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {filteredProducts.map((product, index) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <ProductCard product={product} />
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
