"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import LogoSvg from "./LogoSvg"

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Check if preloader has already run in this session
        const hasPreloaded = sessionStorage.getItem("hasPreloaded")

        if (hasPreloaded) {
            setIsLoading(false)
            return
        }

        // Prevent browser from restoring scroll position
        if (typeof window !== "undefined") {
            window.history.scrollRestoration = "manual"
        }

        const timer = setTimeout(() => {
            setIsLoading(false)
            window.scrollTo(0, 0)
            sessionStorage.setItem("hasPreloaded", "true")
        }, 4000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    <div className="relative flex flex-col items-center justify-center w-full h-full">
                        {/* Logo SVG Animation */}
                        <div className="w-64 h-64 md:w-96 md:h-96">
                            <LogoSvg />
                        </div>

                        {/* Text Reveal */}
                        <div className="overflow-hidden -mt-8">
                            <motion.h1
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.8, delay: 2.5, ease: [0.76, 0, 0.24, 1] }}
                                className="text-[#E2B750] text-3xl md:text-4xl font-serif font-medium tracking-[0.2em] uppercase"
                                style={{ fontFamily: 'var(--font-playfair)' }}
                            >
                                Jay Creations
                            </motion.h1>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
