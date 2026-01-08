"use client"

import { Star, ThumbsUp, CheckCircle2 } from "lucide-react"
import { Product } from "@/lib/dummy-data"
import { cn } from "@/lib/utils"

interface ProductReviewsProps {
    reviews: Product["reviews"]
}

export default function ProductReviews({ reviews }: ProductReviewsProps) {
    return (
        <div className="py-16 border-t border-border">
            <h2 className="text-2xl font-serif mb-8" style={{ fontFamily: 'var(--font-playfair)' }}>
                Customer Reviews
            </h2>

            <div className="grid gap-8">
                {reviews.map((review) => (
                    <div key={review.id} className="border-b border-border pb-8 last:border-0">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center font-medium text-sm">
                                    {review.user.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-medium text-sm">{review.user}</p>
                                    <div className="flex items-center gap-2">
                                        <div className="flex">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    size={12}
                                                    className={cn(
                                                        i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-zinc-300"
                                                    )}
                                                />
                                            ))}
                                        </div>
                                        <span className="text-xs text-muted-foreground">{review.date}</span>
                                    </div>
                                </div>
                            </div>
                            {review.verified && (
                                <div className="flex items-center gap-1 text-xs text-green-600 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-full">
                                    <CheckCircle2 size={12} />
                                    Verified Buyer
                                </div>
                            )}
                        </div>

                        <h3 className="font-medium mb-2">{review.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                            {review.content}
                        </p>

                        <button className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors">
                            <ThumbsUp size={14} />
                            Helpful
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}
