"use client"

import { Star } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

const reviews = [
    {
        id: 1,
        name: "Aarav Patel",
        role: "Fashion Blogger",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop",
        content: "The quality of the fabric is unmatched. It feels premium and the fit is just perfect. Definitely my go-to brand now.",
        rating: 5,
    },
    {
        id: 2,
        name: "Sanya Malhotra",
        role: "Verified Buyer",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
        content: "I was skeptical about ordering online, but the packaging and the product exceeded my expectations. Truly cinematic unboxing!",
        rating: 5,
    },
    {
        id: 3,
        name: "Rohan Das",
        role: "Designer",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop",
        content: "Minimalist yet bold. I love how they pay attention to the smallest details. The stitching is flawless.",
        rating: 5,
    },
]

export default function SocialProof() {
    return (
        <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">
                        Loved by Thousands
                    </h2>
                    <p className="text-muted-foreground">
                        Join the community of trendsetters.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={review.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-background p-8 rounded-2xl shadow-sm border border-border hover:border-accent/50 transition-colors"
                        >
                            <div className="flex gap-1 mb-6">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                                ))}
                            </div>
                            <p className="text-lg mb-8 leading-relaxed">
                                &ldquo;{review.content}&rdquo;
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                                    <Image
                                        src={review.image}
                                        alt={review.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold">{review.name}</h4>
                                    <p className="text-xs text-muted-foreground">{review.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
