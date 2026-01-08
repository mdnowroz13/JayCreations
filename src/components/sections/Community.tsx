"use client"

import { motion } from "framer-motion"
import { Instagram, Youtube, ArrowUpRight } from "lucide-react"
import Image from "next/image"

export default function Community() {
    return (
        <section className="py-10 md:py-20 bg-black text-white">
            <div className="container mx-auto px-4">
                <div className="mb-6 md:mb-12 text-center md:text-left">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-2 md:mb-4">
                        Join the Movement
                    </h2>
                    <p className="text-white/60 max-w-xl text-sm md:text-base">
                        Be part of a community that celebrates style, confidence, and creativity.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-3 md:grid-rows-2 gap-3 md:gap-4 h-auto md:h-[500px]">
                    {/* 1. Stat Card (Large, Top) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="col-span-2 md:col-span-2 row-span-1 md:row-span-2 bg-zinc-900 rounded-3xl p-5 md:p-8 flex flex-col justify-between relative overflow-hidden group min-h-[160px] md:min-h-0"
                    >
                        {/* Background Image for Texture */}
                        <Image
                            src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=1000&auto=format&fit=crop"
                            alt="Community Background"
                            fill
                            className="object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />

                        <div className="relative z-10">
                            <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-white/10 flex items-center justify-center mb-2 md:mb-4 backdrop-blur-md">
                                <span className="text-lg md:text-2xl">✨</span>
                            </div>
                            <h3 className="text-base md:text-xl font-medium text-white/90">Our Community</h3>
                        </div>

                        <div className="relative z-10">
                            <span className="text-5xl md:text-9xl font-bold tracking-tighter block text-white">
                                1K+
                            </span>
                            <p className="text-white/80 mt-1 md:mt-2 font-medium text-xs md:text-base">Active Members & Counting</p>
                        </div>
                    </motion.div>

                    {/* 2. Image Card (Tall, Left on Mobile) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="col-span-1 row-span-2 relative rounded-3xl overflow-hidden group min-h-[140px] md:min-h-0"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop"
                            alt="Community Style"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                        <div className="absolute bottom-3 left-3 right-3 md:bottom-6 md:left-6 md:right-6">
                            <p className="text-white font-serif italic text-xs md:text-lg">"Redefine your style."</p>
                        </div>
                    </motion.div>

                    {/* 3. Instagram Card (Top Right on Mobile) */}
                    <motion.a
                        href="https://www.instagram.com/jay_creations_world/"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="col-span-1 bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl px-4 py-3 md:p-6 flex flex-col justify-between group hover:scale-[1.02] transition-transform duration-300"
                    >
                        <div className="flex justify-between items-start">
                            <Instagram className="w-5 h-5 md:w-8 md:h-8" />
                            <ArrowUpRight className="w-4 h-4 md:w-6 md:h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <div>
                            <p className="font-bold text-sm md:text-lg">Instagram</p>
                            <p className="text-white/80 text-[10px] md:text-sm">Follow us</p>
                        </div>
                    </motion.a>

                    {/* 4. YouTube Card (Bottom Right on Mobile) */}
                    <motion.a
                        href="https://www.youtube.com/@JayCreations123"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="col-span-1 bg-red-600 rounded-3xl px-4 py-3 md:p-6 flex flex-col justify-between group hover:scale-[1.02] transition-transform duration-300"
                    >
                        <div className="flex justify-between items-start">
                            <Youtube className="w-5 h-5 md:w-8 md:h-8" />
                            <ArrowUpRight className="w-4 h-4 md:w-6 md:h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <div>
                            <p className="font-bold text-sm md:text-lg">YouTube</p>
                            <p className="text-white/80 text-[10px] md:text-sm">Subscribe</p>
                        </div>
                    </motion.a>
                </div>
            </div>
        </section>
    )
}
