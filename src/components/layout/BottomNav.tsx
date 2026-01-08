"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Grid, ShoppingBag, User, Heart } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import AccountDrawer from "./AccountDrawer"

export default function BottomNav() {
    const pathname = usePathname()
    const [isAccountOpen, setIsAccountOpen] = useState(false)

    // Hide bottom nav on admin pages
    if (pathname.startsWith("/admin")) return null

    const links = [
        { href: "/", label: "Home", icon: Home },
        { href: "/shop", label: "Shop", icon: Grid },
        { href: "/wishlist", label: "Wishlist", icon: Heart },
        { href: "/cart", label: "Cart", icon: ShoppingBag },
        { href: "/account", label: "Account", icon: User },
    ]

    return (
        <>
            <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-t border-border md:hidden pb-safe">
                <nav className="flex items-center justify-around h-16 px-2">
                    {links.map(({ href, label, icon: Icon }) => {
                        const isActive = pathname === href

                        // Common content for both Link and Button
                        const content = (
                            <>
                                <div className="relative">
                                    <Icon className={cn("w-5 h-5", isActive && "fill-current")} />
                                    {label === "Cart" && (
                                        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-background" />
                                    )}
                                </div>
                                <span className="text-[10px] font-medium">{label}</span>
                                {isActive && (
                                    <motion.div
                                        layoutId="bottomNavIndicator"
                                        className="absolute -top-[1px] left-0 right-0 h-[2px] bg-primary mx-4"
                                    />
                                )}
                            </>
                        )

                        // Special handling for Account button
                        if (label === "Account") {
                            return (
                                <button
                                    key={href}
                                    onClick={() => setIsAccountOpen(true)}
                                    className={cn(
                                        "flex flex-col items-center justify-center w-full h-full gap-1 transition-colors relative",
                                        isAccountOpen ? "text-primary" : "text-muted-foreground hover:text-primary"
                                    )}
                                >
                                    {content}
                                </button>
                            )
                        }

                        return (
                            <Link
                                key={href}
                                href={href}
                                className={cn(
                                    "flex flex-col items-center justify-center w-full h-full gap-1 transition-colors relative",
                                    isActive ? "text-primary" : "text-muted-foreground hover:text-primary"
                                )}
                            >
                                {content}
                            </Link>
                        )
                    })}
                </nav>
            </div>

            <AccountDrawer
                isOpen={isAccountOpen}
                onClose={() => setIsAccountOpen(false)}
            />
        </>
    )
}
