"use client"
import { useStore } from "@/store/useStore"
import Image from "next/image"
import Link from "next/link"
import { Trash2, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/Button"

export default function WishlistPage() {
    const { wishlist, toggleWishlist } = useStore()

    if (wishlist.length === 0) {
        return (
            <div className="container mx-auto px-4 py-32 text-center min-h-[60vh] flex flex-col items-center justify-center">
                <h1 className="text-3xl font-serif mb-4">Your Wishlist is Empty</h1>
                <p className="text-muted-foreground mb-8">Save items you love for later.</p>
                <Link href="/">
                    <Button size="lg" className="rounded-full">Explore Collection</Button>
                </Link>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 py-32 min-h-screen">
            <h1 className="text-3xl md:text-4xl font-serif mb-8 text-center md:text-left">My Wishlist</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {wishlist.map((product) => (
                    <div key={product.id} className="group relative bg-white dark:bg-zinc-900 rounded-lg overflow-hidden border border-border hover:shadow-lg transition-all">
                        <div className="relative aspect-[3/4] overflow-hidden bg-zinc-100">
                            <Image
                                src={product.images[0]}
                                alt={product.name}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <button
                                onClick={() => toggleWishlist(product)}
                                className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full text-red-500 hover:bg-white transition-colors"
                            >
                                <Trash2 size={16} />
                            </button>
                        </div>
                        <div className="p-4">
                            <h3 className="font-medium truncate">{product.name}</h3>
                            <p className="text-muted-foreground text-sm mb-3">${product.price}</p>
                            <Link href={`/product/${product.slug || product.id}`}>
                                <Button variant="outline" className="w-full rounded-full gap-2">
                                    <ShoppingBag size={16} /> View Product
                                </Button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
