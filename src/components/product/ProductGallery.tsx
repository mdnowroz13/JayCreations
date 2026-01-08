"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface ProductGalleryProps {
    images: string[]
}

export default function ProductGallery({ images }: ProductGalleryProps) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isLightboxOpen, setIsLightboxOpen] = useState(false)

    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length)
    }

    const prevImage = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    }

    const swipeConfidenceThreshold = 10000
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity
    }

    return (
        <div className="w-full h-full">
            {/* Mobile Carousel */}
            <div className="md:hidden relative aspect-[3/4] w-full overflow-hidden bg-zinc-100">
                <AnimatePresence initial={false} custom={currentIndex}>
                    <motion.div
                        key={currentIndex}
                        custom={currentIndex}
                        variants={{
                            enter: (direction: number) => {
                                return {
                                    x: direction > 0 ? 1000 : -1000,
                                    opacity: 0
                                };
                            },
                            center: {
                                zIndex: 1,
                                x: 0,
                                opacity: 1
                            },
                            exit: (direction: number) => {
                                return {
                                    zIndex: 0,
                                    x: direction < 0 ? 1000 : -1000,
                                    opacity: 0
                                };
                            }
                        }}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 }
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(e, { offset, velocity }) => {
                            const swipe = swipePower(offset.x, velocity.x)

                            if (swipe < -swipeConfidenceThreshold) {
                                nextImage()
                            } else if (swipe > swipeConfidenceThreshold) {
                                prevImage()
                            }
                        }}
                        className="absolute inset-0 w-full h-full"
                    >
                        <Image
                            src={images[currentIndex]}
                            alt={`Product image ${currentIndex + 1}`}
                            fill
                            className="object-cover"
                            priority
                            draggable={false}
                        />
                    </motion.div>
                </AnimatePresence>

                <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 backdrop-blur-sm text-black hover:bg-white transition-colors z-10"
                >
                    <ChevronLeft size={20} />
                </button>
                <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 backdrop-blur-sm text-black hover:bg-white transition-colors z-10"
                >
                    <ChevronRight size={20} />
                </button>
            </div>

            {/* Desktop Layout: Main + Thumbnails */}
            <div className="hidden md:flex gap-4 h-[500px]">
                {/* Thumbnails (Left) */}
                <div className="flex flex-col gap-4 w-20 overflow-y-auto no-scrollbar">
                    {images.map((img, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={cn(
                                "relative aspect-[3/4] w-full overflow-hidden rounded-md border-2 transition-all",
                                idx === currentIndex ? "border-black" : "border-transparent opacity-70 hover:opacity-100"
                            )}
                        >
                            <Image
                                src={img}
                                alt={`Thumbnail ${idx + 1}`}
                                fill
                                className="object-cover"
                            />
                        </button>
                    ))}
                </div>

                {/* Main Image */}
                <div
                    className="relative flex-1 h-full bg-zinc-50 dark:bg-zinc-900 rounded-lg overflow-hidden cursor-zoom-in group flex items-center justify-center"
                    onClick={() => setIsLightboxOpen(true)}
                >
                    <Image
                        src={images[currentIndex]}
                        alt={`Product view ${currentIndex + 1}`}
                        fill
                        className="object-contain"
                        priority
                    />
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 bg-white/80 backdrop-blur-md rounded-full text-black hover:bg-white transition-colors">
                            <Maximize2 size={20} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {isLightboxOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4"
                        onClick={() => setIsLightboxOpen(false)}
                    >
                        <button
                            className="absolute top-6 right-6 text-white p-2 hover:bg-white/10 rounded-full"
                            onClick={() => setIsLightboxOpen(false)}
                        >
                            <X size={32} />
                        </button>

                        <div className="relative w-full h-full max-w-5xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
                            <Image
                                src={images[currentIndex]}
                                alt="Zoomed view"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
