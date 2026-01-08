"use client"

import { useState, useEffect } from "react"
import { Star, Heart, Ruler, Zap, ShieldCheck, X } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { cn } from "@/lib/utils"
import { Product } from "@/lib/dummy-data"
import { motion, AnimatePresence } from "framer-motion"
import { useStore } from "@/store/useStore"

interface ProductInfoProps {
    product: Product
}

export default function ProductInfo({ product }: ProductInfoProps) {
    const [isMounted, setIsMounted] = useState(false)
    const [selectedSize, setSelectedSize] = useState<string | null>(null)
    const [selectedColor, setSelectedColor] = useState(product.colors[0].name)
    const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false)
    const [isAdded, setIsAdded] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    const { addToCart, toggleWishlist, isInWishlist } = useStore()
    const isWishlisted = isMounted ? isInWishlist(product.id) : false

    const handleAddToCart = () => {
        if (!selectedSize) return
        addToCart(product, selectedSize, selectedColor)
        setIsAdded(true)
        setTimeout(() => setIsAdded(false), 2000)
    }

    return (
        <div className="flex flex-col h-full relative">
            {/* Header Info */}
            <div className="mb-6">
                <div className="flex items-start justify-between mb-2">
                    <h1 className="text-2xl md:text-3xl font-serif text-foreground" style={{ fontFamily: 'var(--font-playfair)' }}>
                        {product.name}
                    </h1>
                    <motion.button
                        whileTap={{ scale: 0.8 }}
                        onClick={() => toggleWishlist(product)}
                        className="p-2 rounded-full hover:bg-muted transition-colors relative"
                    >
                        <AnimatePresence>
                            {isWishlisted && (
                                <>
                                    {[...Array(8)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ scale: 0, opacity: 1, x: 0, y: 0 }}
                                            animate={{
                                                scale: 1,
                                                opacity: 0,
                                                x: Math.cos((i * 45 * Math.PI) / 180) * 30,
                                                y: Math.sin((i * 45 * Math.PI) / 180) * 30,
                                            }}
                                            transition={{ duration: 0.6, ease: "easeOut" }}
                                            className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-red-500 rounded-full"
                                            style={{ marginTop: '-3px', marginLeft: '-3px' }}
                                        />
                                    ))}
                                </>
                            )}
                        </AnimatePresence>
                        <motion.div
                            initial={false}
                            animate={{ scale: isWishlisted ? [1, 1.2, 1] : 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Heart
                                className={cn("w-6 h-6 transition-colors", isWishlisted ? "fill-red-500 text-red-500" : "text-foreground")}
                            />
                        </motion.div>
                    </motion.button>
                </div>

                <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-baseline gap-3">
                        <span className="text-2xl font-medium">${product.price}</span>
                        {product.originalPrice && (
                            <span className="text-muted-foreground line-through">${product.originalPrice}</span>
                        )}
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{product.rating}</span>
                        <span className="text-muted-foreground underline cursor-pointer">({product.reviewCount} Reviews)</span>
                    </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
                    {product.description}
                </p>
            </div>

            {/* Selectors */}
            <div className="space-y-6 mb-6">
                {/* Color */}
                <div>
                    <span className="text-sm font-medium mb-2 block">Color: <span className="text-muted-foreground">{selectedColor}</span></span>
                    <div className="flex gap-3">
                        {product.colors.map((color) => (
                            <button
                                key={color.name}
                                onClick={() => setSelectedColor(color.name)}
                                className={cn(
                                    "w-8 h-8 rounded-full border-2 transition-all relative",
                                    selectedColor === color.name ? "border-foreground scale-110" : "border-transparent hover:scale-105"
                                )}
                                style={{ backgroundColor: color.value }}
                                title={color.name}
                            >
                                {selectedColor === color.name && (
                                    <motion.div
                                        layoutId="colorCheck"
                                        className="absolute inset-0 flex items-center justify-center"
                                    >
                                        <div className="w-1.5 h-1.5 bg-white rounded-full shadow-sm" />
                                    </motion.div>
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Size */}
                <div>
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Size: <span className="text-muted-foreground">{selectedSize || "Select a size"}</span></span>
                        <button
                            onClick={() => setIsSizeGuideOpen(true)}
                            className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground underline"
                        >
                            <Ruler size={14} /> Size Guide
                        </button>
                    </div>
                    <div className="grid grid-cols-5 gap-2">
                        {product.sizes.map((size) => (
                            <button
                                key={size}
                                onClick={() => setSelectedSize(size)}
                                className={cn(
                                    "h-10 rounded-md border flex items-center justify-center text-sm font-medium transition-all",
                                    selectedSize === size
                                        ? "border-foreground bg-foreground text-background"
                                        : "border-border hover:border-foreground/50"
                                )}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 mb-6">
                <Button
                    size="lg"
                    className="flex-1 h-12 text-base rounded-full relative overflow-hidden"
                    disabled={!selectedSize || isAdded}
                    onClick={handleAddToCart}
                >
                    <AnimatePresence mode="wait">
                        {isAdded ? (
                            <motion.span
                                key="added"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -20, opacity: 0 }}
                            >
                                Added!
                            </motion.span>
                        ) : (
                            <motion.span
                                key="add"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -20, opacity: 0 }}
                            >
                                {selectedSize ? "Add to Cart" : "Select Size"}
                            </motion.span>
                        )}
                    </AnimatePresence>
                </Button>
                <Button
                    variant="outline"
                    size="lg"
                    className="flex-1 h-12 text-base rounded-full border-foreground/20 hover:bg-foreground hover:text-background disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={!selectedSize}
                >
                    Buy Now
                </Button>
            </div>

            {/* Features / Trust */}
            <div className="grid grid-cols-2 gap-4 py-4 border-t border-border">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-full">
                        <Zap size={20} />
                    </div>
                    <div className="text-xs">
                        <p className="font-medium">Fast Delivery</p>
                        <p className="text-muted-foreground">Express shipping available</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-full">
                        <ShieldCheck size={20} />
                    </div>
                    <div className="text-xs">
                        <p className="font-medium">Best Quality</p>
                        <p className="text-muted-foreground">Premium materials guaranteed</p>
                    </div>
                </div>
            </div>

            {/* Details Accordion (Simplified) */}
            <div className="border-t border-border pt-6">
                <h3 className="font-medium mb-4">Product Details</h3>
                <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-4">
                    {product.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                    ))}
                </ul>
            </div>

            {/* Size Guide Modal */}
            <AnimatePresence>
                {isSizeGuideOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
                        onClick={() => setIsSizeGuideOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="bg-background rounded-lg p-6 max-w-md w-full relative shadow-xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setIsSizeGuideOpen(false)}
                                className="absolute top-4 right-4 p-2 hover:bg-muted rounded-full"
                            >
                                <X size={20} />
                            </button>
                            <h2 className="text-xl font-bold mb-4">Size Guide</h2>
                            <p className="text-sm text-muted-foreground mb-4">
                                Measurements are in inches.
                            </p>
                            <div className="grid grid-cols-4 gap-2 text-sm border-t border-l border-border">
                                <div className="p-2 border-b border-r border-border font-bold bg-muted/50">Size</div>
                                <div className="p-2 border-b border-r border-border font-bold bg-muted/50">Bust</div>
                                <div className="p-2 border-b border-r border-border font-bold bg-muted/50">Waist</div>
                                <div className="p-2 border-b border-r border-border font-bold bg-muted/50">Hips</div>

                                <div className="p-2 border-b border-r border-border">XS</div>
                                <div className="p-2 border-b border-r border-border">32</div>
                                <div className="p-2 border-b border-r border-border">24</div>
                                <div className="p-2 border-b border-r border-border">34</div>

                                <div className="p-2 border-b border-r border-border">S</div>
                                <div className="p-2 border-b border-r border-border">34</div>
                                <div className="p-2 border-b border-r border-border">26</div>
                                <div className="p-2 border-b border-r border-border">36</div>

                                <div className="p-2 border-b border-r border-border">M</div>
                                <div className="p-2 border-b border-r border-border">36</div>
                                <div className="p-2 border-b border-r border-border">28</div>
                                <div className="p-2 border-b border-r border-border">38</div>

                                <div className="p-2 border-b border-r border-border">L</div>
                                <div className="p-2 border-b border-r border-border">38</div>
                                <div className="p-2 border-b border-r border-border">30</div>
                                <div className="p-2 border-b border-r border-border">40</div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
