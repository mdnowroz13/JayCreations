"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/Button"

export default function BrandStory() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    })

    const y = useTransform(scrollYProgress, [0, 1], [100, -100])
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

    return (
        <section ref={containerRef} className="py-24 overflow-hidden bg-black text-white relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <motion.div style={{ y, opacity }} className="relative aspect-[4/5] md:aspect-square rounded-2xl overflow-hidden">
                        <Image
                            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop"
                            alt="Brand Heritage"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-8 left-8 right-8">
                            <p className="text-sm font-medium uppercase tracking-widest mb-2 text-white/80">Est. 2024</p>
                            <h3 className="text-3xl font-bold text-white">Crafted for the Bold.</h3>
                        </div>
                    </motion.div>

                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 leading-tight">
                                Redefining <br />
                                <span className="text-accent">Modern Luxury</span>
                            </h2>
                            <p className="text-lg text-white/70 leading-relaxed mb-6">
                                At Jay Creations, we believe that style is a form of self-expression without saying a word.
                                Our collections are meticulously crafted using the finest fabrics, blending traditional
                                artistry with contemporary silhouettes.
                            </p>
                            <p className="text-lg text-white/70 leading-relaxed mb-8">
                                From the bustling streets of Mumbai to the global fashion stage, our journey is defined
                                by a relentless pursuit of perfection and a passion for design that transcends trends.
                            </p>

                            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                                Read Our Story
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
