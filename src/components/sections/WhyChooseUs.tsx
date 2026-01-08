"use client"

import { motion } from "framer-motion"
import { Award, Ruler, Tag } from "lucide-react"

const features = [
    {
        icon: Award,
        title: "Unmatched Quality",
        description: "Premium fabrics that stand the test of time. Every stitch is a testament to our commitment to excellence.",
    },
    {
        icon: Ruler,
        title: "Perfect Fit",
        description: "Tailored for comfort and confidence. Designed to flatter every silhouette with precision.",
    },
    {
        icon: Tag,
        title: "Honest Pricing",
        description: "Luxury fashion without the markup. We believe in fair pricing for exceptional craftsmanship.",
    },
]

export default function WhyChooseUs() {
    return (
        <section className="py-20 bg-black text-white relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/20 to-black pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl font-serif text-white mb-4"
                        style={{ fontFamily: 'var(--font-playfair)' }}
                    >
                        Why Choose Jay Creations
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="h-px w-24 bg-white mx-auto"
                    />
                </div>

                {/* Cards Container */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="group relative p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800 hover:border-white/30 transition-colors duration-500"
                        >
                            {/* Hover Glow Effect */}
                            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                            <div className="relative z-10 flex flex-col items-center text-center">
                                {/* Icon */}
                                <div className="mb-6 p-4 rounded-full bg-white/10 text-white group-hover:scale-110 transition-transform duration-500">
                                    <feature.icon size={32} strokeWidth={1.5} />
                                </div>

                                {/* Title */}
                                <h3
                                    className="text-xl font-serif text-white mb-4"
                                    style={{ fontFamily: 'var(--font-playfair)' }}
                                >
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
