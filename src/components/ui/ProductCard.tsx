"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, ShoppingBag, Eye } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/Button"

import { Product } from "@/lib/dummy-data"

interface ProductCardProps {
    product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
    const { id, name, price, category, slug, images } = product
    const image = images[0]
    const hoverImage = images[1]

    // Derived or dummy values for now since they aren't in Product interface
    const isNew = false
    const isSale = false

    const [isHovered, setIsHovered] = useState(false)

    return (
        <div
            className="group relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Image Container */}
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-900 mb-4">
                {/* Badges */}
                <div className="absolute top-3 left-3 z-20 flex flex-col gap-2">
                    {isNew && (
                        <span className="bg-black text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider">
                            New
                        </span>
                    )}
                    {isSale && (
                        <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider">
                            Sale
                        </span>
                    )}
                </div>

                {/* Wishlist Button */}
                <button className="absolute top-3 right-3 z-20 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors opacity-0 group-hover:opacity-100 transform translate-y-[-10px] group-hover:translate-y-0 duration-300">
                    <Heart className="w-4 h-4" />
                </button>

                {/* Images */}
                <Link href={`/product/${slug || id}`}>
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className={cn(
                            "object-cover transition-all duration-700",
                            isHovered && hoverImage ? "opacity-0 scale-105" : "opacity-100 scale-100"
                        )}
                    />
                    {hoverImage && (
                        <Image
                            src={hoverImage}
                            alt={name}
                            fill
                            className={cn(
                                "object-cover transition-all duration-700 absolute inset-0",
                                isHovered ? "opacity-100 scale-105" : "opacity-0 scale-100"
                            )}
                        />
                    )}
                </Link>

                {/* Quick Actions Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                    <Button className="w-full gap-2 shadow-lg" size="sm">
                        <ShoppingBag className="w-4 h-4" /> Add to Cart
                    </Button>
                </div>
            </div>

            {/* Product Info */}
            <div className="space-y-1">
                <p className="text-xs text-muted-foreground uppercase tracking-wide">{category}</p>
                <Link href={`/product/${slug || id}`}>
                    <h3 className="font-medium text-base leading-tight group-hover:text-accent transition-colors">
                        {name}
                    </h3>
                </Link>
                <p className="font-bold">₹{price.toLocaleString()}</p>
            </div>
        </div>
    )
}
