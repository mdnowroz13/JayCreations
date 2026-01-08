"use client"
import { useStore } from "@/store/useStore"
import Image from "next/image"
import Link from "next/link"
import { Trash2, Minus, Plus } from "lucide-react"
import { Button } from "@/components/ui/Button"

export default function CartPage() {
    const { cart, removeFromCart, updateQuantity } = useStore()
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)

    if (cart.length === 0) {
        return (
            <div className="container mx-auto px-4 py-32 text-center min-h-[60vh] flex flex-col items-center justify-center">
                <h1 className="text-3xl font-serif mb-4">Your Cart is Empty</h1>
                <p className="text-muted-foreground mb-8">Looks like you haven't added anything yet.</p>
                <Link href="/">
                    <Button size="lg" className="rounded-full">Continue Shopping</Button>
                </Link>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 py-32 min-h-screen">
            <h1 className="text-3xl md:text-4xl font-serif mb-8 text-center md:text-left">Shopping Cart</h1>
            <div className="grid lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-6">
                    {cart.map((item) => (
                        <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="flex gap-6 border-b border-border pb-6">
                            <div className="relative w-24 h-32 md:w-32 md:h-40 flex-shrink-0 bg-zinc-100 rounded-md overflow-hidden">
                                <Image src={item.images[0]} alt={item.name} fill className="object-cover" />
                            </div>
                            <div className="flex-1 flex flex-col justify-between">
                                <div>
                                    <div className="flex justify-between items-start">
                                        <h3 className="font-medium text-lg">{item.name}</h3>
                                        <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-1">Size: {item.selectedSize} | Color: {item.selectedColor}</p>
                                </div>

                                <div className="flex items-center justify-between mt-4">
                                    <div className="flex items-center border border-border rounded-full">
                                        <button
                                            className="p-2 hover:bg-muted rounded-l-full transition-colors"
                                            onClick={() => item.quantity > 1 ? updateQuantity(item.id, item.selectedSize, item.selectedColor, -1) : removeFromCart(item.id, item.selectedSize, item.selectedColor)}
                                        >
                                            <Minus size={14} />
                                        </button>
                                        <span className="px-3 text-sm font-medium">{item.quantity}</span>
                                        <button
                                            className="p-2 hover:bg-muted rounded-r-full transition-colors"
                                            onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, 1)}
                                        >
                                            <Plus size={14} />
                                        </button>
                                    </div>
                                    <button
                                        onClick={() => removeFromCart(item.id, item.selectedSize, item.selectedColor)}
                                        className="text-muted-foreground hover:text-red-500 transition-colors p-2"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="lg:col-span-1">
                    <div className="bg-zinc-50 dark:bg-zinc-900 p-6 rounded-lg sticky top-24">
                        <h2 className="text-xl font-medium mb-6">Order Summary</h2>
                        <div className="space-y-4 mb-6">
                            <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Subtotal</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Shipping</span>
                                <span className="text-green-600">Free</span>
                            </div>
                            <div className="border-t border-border pt-4 flex justify-between font-bold text-lg">
                                <span>Total</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                        </div>
                        <Button size="lg" className="w-full rounded-full h-12 text-base">Checkout</Button>
                        <p className="text-xs text-center text-muted-foreground mt-4">
                            Secure Checkout - SSL Encrypted
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
