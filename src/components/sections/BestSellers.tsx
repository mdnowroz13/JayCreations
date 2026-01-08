"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import ProductCard from "@/components/ui/ProductCard"
import { Button } from "@/components/ui/Button"
import { products } from "@/lib/dummy-data"

export default function BestSellers() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section ref={ref} className="container mx-auto px-4 py-20">
            <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-4">
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">
                        Trending Now
                    </h2>
                    <p className="text-muted-foreground max-w-md">
                        The pieces everyone is talking about. Shop our most loved styles.
                    </p>
                </div>
                <Link href="/collections" className="hidden md:flex">
                    <Button variant="outline">
                        Shop All Best Sellers
                    </Button>
                </Link>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                {products.map((product, index) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                        <ProductCard product={product} />
                    </motion.div>
                ))}
            </div>

            <div className="mt-10 flex justify-center md:hidden">
                <Link href="/collections" className="w-full">
                    <Button variant="outline" className="w-full">
                        Shop All Best Sellers
                    </Button>
                </Link>
            </div>
        </section>
    )
}
