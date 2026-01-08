"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion"
import { ShoppingBag, Menu, X, Search, User, Heart } from "lucide-react"
import { cn } from "@/lib/utils"
import { useStore } from "@/store/useStore"

export default function Header() {
    const pathname = usePathname()
    const { scrollY } = useScroll()
    const [hidden, setHidden] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [mounted, setMounted] = useState(false)

    const { cart, wishlist } = useStore()
    const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0)
    const wishlistCount = wishlist.length

    useEffect(() => {
        setMounted(true)
    }, [])

    const isHomePage = pathname === "/"

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0
        if (latest > previous && latest > 150) {
            setHidden(true)
        } else {
            setHidden(false)
        }
        setScrolled(latest > 100)
    })

    // Hide header on admin pages
    if (pathname.startsWith("/admin")) return null

    const navLinks = ["Shop", "Dresses", "Tops", "Bottoms", "Co-ords", "Story"]

    return (
        <>
            <motion.header
                variants={{
                    visible: { y: 0 },
                    hidden: { y: "-100%" },
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                    scrolled || isMenuOpen || !isHomePage ? "bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-sm py-2 text-foreground" : "!bg-transparent !backdrop-blur-none py-4 text-white"
                )}
            >
                <div className="container mx-auto px-4 flex items-center justify-between">
                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 -ml-2 hover:bg-muted rounded-full transition-colors z-50 relative"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        suppressHydrationWarning
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 z-50 relative group">
                        <div className="relative w-8 h-8 hidden md:block">
                            <Image
                                src="/logo.svg"
                                alt="Jay Creations"
                                fill
                                className={cn(
                                    "object-contain transition-all duration-300",
                                    (scrolled || isMenuOpen || !isHomePage) && "brightness-0"
                                )}
                            />
                        </div>
                        <span className="text-xl font-bold tracking-tighter">
                            JAY CREATIONS
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((item) => (
                            <Link
                                key={item}
                                href={`/${item.toLowerCase()}`}
                                className="text-sm font-medium hover:text-accent transition-colors relative group"
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        ))}
                    </nav>

                    {/* Icons */}
                    <div className="flex items-center gap-2 z-50">
                        <button className="p-2 hover:bg-muted rounded-full transition-colors" suppressHydrationWarning>
                            <Search className="w-5 h-5" />
                        </button>

                        <Link href="/wishlist" className="p-2 hover:bg-muted rounded-full transition-colors relative hidden md:block">
                            <Heart className="w-5 h-5" />
                            {mounted && wishlistCount > 0 && (
                                <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full">
                                    {wishlistCount}
                                </span>
                            )}
                        </Link>

                        <button className="p-2 hover:bg-muted rounded-full transition-colors hidden md:block" suppressHydrationWarning>
                            <User className="w-5 h-5" />
                        </button>

                        <Link href="/cart" className="p-2 hover:bg-muted rounded-full transition-colors relative">
                            <ShoppingBag className="w-5 h-5" />
                            {mounted && cartCount > 0 && (
                                <span className="absolute top-0 right-0 w-4 h-4 bg-black dark:bg-white text-white dark:text-black text-[10px] font-bold flex items-center justify-center rounded-full">
                                    {cartCount}
                                </span>
                            )}
                        </Link>
                    </div>
                </div>
            </motion.header >

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {
                    isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: "-100%" }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: "-100%" }}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className="fixed inset-0 z-40 bg-background md:hidden flex flex-col pt-24 px-6"
                        >
                            <nav className="flex flex-col gap-6">
                                {navLinks.map((item, index) => (
                                    <motion.div
                                        key={item}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + index * 0.1 }}
                                    >
                                        <Link
                                            href={`/${item.toLowerCase()}`}
                                            className="text-4xl font-bold tracking-tight hover:text-accent transition-colors"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {item}
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="mt-auto mb-10 flex gap-4"
                            >
                                <Link href="/account" className="text-lg font-medium hover:underline">Account</Link>
                                <Link href="/contact" className="text-lg font-medium hover:underline">Contact</Link>
                            </motion.div>
                        </motion.div>
                    )
                }
            </AnimatePresence >
        </>
    )
}
