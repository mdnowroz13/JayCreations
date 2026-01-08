"use client"


import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { useRef } from "react"

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    })

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

    return (
        <section ref={containerRef} className="relative top-0 h-[calc(100dvh+5rem)] min-h-screen flex flex-col justify-end pb-32 md:pb-24 items-center md:items-start overflow-hidden -mt-20 bg-black">
            {/* Background Video/Image */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 z-0 overflow-hidden"
            >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90 z-10" />

                {/* Video with Overscan (Bleed) to prevent gaps */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-1/2 left-1/2 min-w-full min-h-full w-[105%] h-[105%] object-cover -translate-x-1/2 -translate-y-1/2 transform-gpu"
                >
                    <source src="/hero-video.mp4" type="video/mp4" />
                </video>
            </motion.div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 text-center md:text-left text-white w-full">
                <div className="overflow-hidden mb-2 md:mb-4">
                    <motion.h1
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1, delay: 2.8, ease: [0.76, 0, 0.24, 1] }}
                        className="text-5xl md:text-[9rem] font-bold tracking-tighter leading-[0.9] md:leading-[0.85]"
                    >
                        REDEFINE <br />
                        <span className="md:ml-24 block md:inline">YOUR STYLE</span>
                    </motion.h1>
                </div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 3.2 }}
                    className="text-sm md:text-xl text-white/90 mb-6 md:mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed font-light md:ml-2"
                >
                    Premium streetwear designed for the modern individual.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 3.4 }}
                    className="flex flex-col gap-3 w-full md:w-auto md:flex-row justify-center md:justify-start md:ml-2"
                >
                    <Link href="/shop" className="w-full md:w-auto">
                        <Button size="lg" className="bg-white text-black hover:bg-white/90 border-none w-full md:w-48 rounded-full h-12 text-sm uppercase tracking-wide font-bold">
                            Shop Now
                        </Button>
                    </Link>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 md:left-auto md:right-10 md:translate-x-0 text-white flex flex-col items-center gap-2"
            >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
            </motion.div>
        </section>
    )
}
