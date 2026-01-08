"use client"

import { useState, useMemo } from "react"
import { products } from "@/lib/dummy-data"
import ProductCard from "@/components/ui/ProductCard"
import ProductFilters from "@/components/shop/ProductFilters"
import { motion, AnimatePresence } from "framer-motion"
import { Filter, X, ChevronDown, ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { cn } from "@/lib/utils"

export default function ShopPage() {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([])
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000])
    const [sortOption, setSortOption] = useState<string>("newest")
    const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false)

    // Derive unique categories
    const categories = useMemo(() => {
        return Array.from(new Set(products.map(p => p.category)))
    }, [])

    // Derive min/max prices
    const { minPrice, maxPrice } = useMemo(() => {
        const prices = products.map(p => p.price)
        return {
            minPrice: Math.min(...prices),
            maxPrice: Math.max(...prices)
        }
    }, [])

    // Filter and Sort Logic
    const filteredProducts = useMemo(() => {
        let result = [...products]

        // Category Filter
        if (selectedCategories.length > 0) {
            result = result.filter(p => selectedCategories.includes(p.category))
        }

        // Price Filter
        result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1])

        // Sort
        switch (sortOption) {
            case "price-asc":
                result.sort((a, b) => a.price - b.price)
                break
            case "price-desc":
                result.sort((a, b) => b.price - a.price)
                break
            case "newest":
            default:
                // Assuming dummy data order is roughly "newest" or random. 
                // We don't have a date field in dummy data (except in reviews), 
                // so we'll just keep original order or reverse it.
                // Let's assume original order is "Featured/Newest"
                break
        }

        return result
    }, [selectedCategories, priceRange, sortOption])

    const toggleCategory = (category: string) => {
        setSelectedCategories(prev =>
            prev.includes(category)
                ? prev.filter(c => c !== category)
                : [...prev, category]
        )
    }

    return (
        <div className="container mx-auto px-4 py-32 min-h-screen">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl font-serif mb-4">Shop All</h1>
                    <p className="text-muted-foreground max-w-md">
                        Discover our complete collection of premium fashion, curated for the modern muse.
                    </p>
                </motion.div>

                <div className="flex items-center gap-4">
                    {/* Mobile Filter Button */}
                    <Button
                        variant="outline"
                        className="md:hidden gap-2"
                        onClick={() => setIsMobileFiltersOpen(true)}
                    >
                        <Filter size={16} /> Filters
                    </Button>

                    {/* Sort Dropdown */}
                    <div className="relative group">
                        <select
                            value={sortOption}
                            onChange={(e) => setSortOption(e.target.value)}
                            className="appearance-none bg-transparent border border-border rounded-full px-4 py-2 pr-8 text-sm font-medium focus:outline-none cursor-pointer hover:bg-muted transition-colors"
                            suppressHydrationWarning
                        >
                            <option value="newest">Newest Arrivals</option>
                            <option value="price-asc">Price: Low to High</option>
                            <option value="price-desc">Price: High to Low</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none text-muted-foreground" />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                {/* Desktop Sidebar */}
                <aside className="hidden lg:block sticky top-32 h-fit">
                    <ProductFilters
                        categories={categories}
                        selectedCategories={selectedCategories}
                        onCategoryChange={toggleCategory}
                        priceRange={priceRange}
                        onPriceChange={setPriceRange}
                        minPrice={minPrice}
                        maxPrice={maxPrice}
                    />
                </aside>

                {/* Product Grid */}
                <div className="lg:col-span-3">
                    <AnimatePresence mode="popLayout">
                        {filteredProducts.length > 0 ? (
                            <motion.div
                                layout
                                className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8"
                            >
                                {filteredProducts.map((product) => (
                                    <motion.div
                                        layout
                                        key={product.id}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <ProductCard product={product} />
                                    </motion.div>
                                ))}
                            </motion.div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center py-20"
                            >
                                <p className="text-lg text-muted-foreground">No products found matching your filters.</p>
                                <Button
                                    variant="ghost"
                                    onClick={() => {
                                        setSelectedCategories([])
                                        setPriceRange([minPrice, maxPrice])
                                    }}
                                    className="mt-4 underline"
                                >
                                    Clear all filters
                                </Button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Mobile Filters Drawer */}
            <AnimatePresence>
                {isMobileFiltersOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/50 z-50 lg:hidden"
                            onClick={() => setIsMobileFiltersOpen(false)}
                        />
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed inset-y-0 right-0 w-full max-w-xs bg-background z-50 p-6 shadow-xl lg:hidden overflow-y-auto"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-xl font-serif">Filters</h2>
                                <button
                                    onClick={() => setIsMobileFiltersOpen(false)}
                                    className="p-2 hover:bg-muted rounded-full transition-colors"
                                >
                                    <X size={20} />
                                </button>
                            </div>
                            <ProductFilters
                                categories={categories}
                                selectedCategories={selectedCategories}
                                onCategoryChange={toggleCategory}
                                priceRange={priceRange}
                                onPriceChange={setPriceRange}
                                minPrice={minPrice}
                                maxPrice={maxPrice}
                            />
                            <div className="mt-8 pt-6 border-t">
                                <Button
                                    className="w-full"
                                    onClick={() => setIsMobileFiltersOpen(false)}
                                >
                                    Show {filteredProducts.length} Results
                                </Button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    )
}
