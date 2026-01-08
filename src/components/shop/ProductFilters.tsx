"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Check, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface ProductFiltersProps {
    categories: string[]
    selectedCategories: string[]
    onCategoryChange: (category: string) => void
    priceRange: [number, number]
    onPriceChange: (range: [number, number]) => void
    minPrice: number
    maxPrice: number
    className?: string
}

export default function ProductFilters({
    categories,
    selectedCategories,
    onCategoryChange,
    priceRange,
    onPriceChange,
    minPrice,
    maxPrice,
    className
}: ProductFiltersProps) {
    const [openSections, setOpenSections] = useState<Record<string, boolean>>({
        category: true,
        price: true
    })

    const toggleSection = (section: string) => {
        setOpenSections(prev => ({ ...prev, [section]: !prev[section] }))
    }

    return (
        <div className={cn("space-y-8", className)}>
            {/* Categories */}
            <div className="border-b pb-6">
                <button
                    onClick={() => toggleSection('category')}
                    className="flex items-center justify-between w-full mb-4 group"
                    suppressHydrationWarning
                >
                    <h3 className="font-serif text-lg">Category</h3>
                    <ChevronDown
                        className={cn(
                            "w-4 h-4 transition-transform duration-300",
                            openSections.category ? "rotate-180" : ""
                        )}
                    />
                </button>
                <AnimatePresence>
                    {openSections.category && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                        >
                            <div className="space-y-3 pt-1">
                                {categories.map(category => (
                                    <label
                                        key={category}
                                        className="flex items-center gap-3 cursor-pointer group"
                                    >
                                        <div
                                            className={cn(
                                                "w-5 h-5 border rounded flex items-center justify-center transition-colors",
                                                selectedCategories.includes(category)
                                                    ? "bg-black border-black text-white"
                                                    : "border-gray-300 group-hover:border-black"
                                            )}
                                            onClick={() => onCategoryChange(category)}
                                        >
                                            {selectedCategories.includes(category) && <Check size={12} />}
                                        </div>
                                        <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                                            {category}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Price Range */}
            <div className="border-b pb-6">
                <button
                    onClick={() => toggleSection('price')}
                    className="flex items-center justify-between w-full mb-4 group"
                    suppressHydrationWarning
                >
                    <h3 className="font-serif text-lg">Price</h3>
                    <ChevronDown
                        className={cn(
                            "w-4 h-4 transition-transform duration-300",
                            openSections.price ? "rotate-180" : ""
                        )}
                    />
                </button>
                <AnimatePresence>
                    {openSections.price && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                        >
                            <div className="pt-2 px-1">
                                <div className="flex items-center justify-between text-sm mb-4">
                                    <span>₹{priceRange[0]}</span>
                                    <span>₹{priceRange[1]}</span>
                                </div>
                                <input
                                    type="range"
                                    min={minPrice}
                                    max={maxPrice}
                                    value={priceRange[1]}
                                    onChange={(e) => onPriceChange([priceRange[0], parseInt(e.target.value)])}
                                    className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black"
                                />
                                <p className="text-xs text-muted-foreground mt-2">
                                    Max Price: ₹{priceRange[1]}
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}
