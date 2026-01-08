import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Product } from '@/lib/dummy-data'

export interface CartItem extends Product {
    selectedSize: string
    selectedColor: string
    quantity: number
}

interface StoreState {
    cart: CartItem[]
    wishlist: Product[]
    addToCart: (product: Product, size: string, color: string) => void
    updateQuantity: (productId: string, size: string, color: string, delta: number) => void
    removeFromCart: (productId: string, size: string, color: string) => void
    toggleWishlist: (product: Product) => void
    isInWishlist: (productId: string) => boolean
    clearCart: () => void
}

export const useStore = create<StoreState>()(
    persist(
        (set, get) => ({
            cart: [],
            wishlist: [],
            addToCart: (product, size, color) => set((state) => {
                const existingItem = state.cart.find(
                    item => item.id === product.id && item.selectedSize === size && item.selectedColor === color
                )

                if (existingItem) {
                    return {
                        cart: state.cart.map(item =>
                            item.id === product.id && item.selectedSize === size && item.selectedColor === color
                                ? { ...item, quantity: item.quantity + 1 }
                                : item
                        )
                    }
                }

                return {
                    cart: [...state.cart, { ...product, selectedSize: size, selectedColor: color, quantity: 1 }]
                }
            }),
            updateQuantity: (productId, size, color, delta) => set((state) => ({
                cart: state.cart.map(item =>
                    item.id === productId && item.selectedSize === size && item.selectedColor === color
                        ? { ...item, quantity: Math.max(1, item.quantity + delta) }
                        : item
                )
            })),
            removeFromCart: (productId, size, color) => set((state) => ({
                cart: state.cart.filter(
                    item => !(item.id === productId && item.selectedSize === size && item.selectedColor === color)
                )
            })),
            toggleWishlist: (product) => set((state) => {
                const exists = state.wishlist.some(item => item.id === product.id)
                if (exists) {
                    return { wishlist: state.wishlist.filter(item => item.id !== product.id) }
                }
                return { wishlist: [...state.wishlist, product] }
            }),
            isInWishlist: (productId) => {
                return get().wishlist.some(item => item.id === productId)
            },
            clearCart: () => set({ cart: [] })
        }),
        {
            name: 'jay-creations-storage',
        }
    )
)
