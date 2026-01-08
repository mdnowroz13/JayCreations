"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const categories = [
    {
        id: 1,
        name: "Dresses",
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1966&auto=format&fit=crop",
        link: "/dresses",
        colSpan: "md:col-span-2",
    },
    {
        id: 2,
        name: "Tops & Blouses",
        image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?q=80&w=1974&auto=format&fit=crop",
        link: "/tops",
        colSpan: "md:col-span-1",
    },
    {
        id: 3,
        name: "Co-ord Sets",
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2020&auto=format&fit=crop",
        link: "/co-ords",
        colSpan: "md:col-span-1",
    },
    {
        id: 4,
        name: "Bottoms",
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1887&auto=format&fit=crop",
        link: "/bottoms",
        colSpan: "md:col-span-2",
    },
]

export default function FeaturedCategories() {
    return (
        <section className="container mx-auto px-4 py-20">
            <div className="flex items-end justify-between mb-12">
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">
                        Curated Collections
                    </h2>
                    <p className="text-muted-foreground max-w-md">
                        Explore our handpicked selections defined by quality and style.
                    </p>
                </div>
                <Link
                    href="/shop"
                    className="hidden md:flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors"
                >
                    View All <ArrowUpRight className="w-4 h-4" />
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {categories.map((category, index) => (
                    <motion.div
                        key={category.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className={`group relative h-[400px] md:h-[500px] overflow-hidden rounded-2xl ${category.colSpan}`}
                    >
                        <Link href={category.link} className="block w-full h-full">
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-10" />
                            <Image
                                src={category.image}
                                alt={category.name}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                                        {category.name}
                                    </h3>
                                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                        <ArrowUpRight className="w-5 h-5" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
