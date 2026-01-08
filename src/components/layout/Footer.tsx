"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export default function Footer() {
    const pathname = usePathname()

    // Hide footer on admin pages
    if (pathname.startsWith("/admin")) return null

    return (
        <footer className="bg-muted/30 pt-20 pb-10 border-t border-border">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                    <div className="space-y-4">
                        <Link href="/" className="text-2xl font-bold tracking-tighter">
                            JAY<span className="text-accent">.</span>
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Premium clothing for the modern individual. Designed in India, worn globally.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="p-2 bg-background rounded-full hover:bg-accent hover:text-white transition-colors">
                                <Instagram className="w-4 h-4" />
                            </Link>
                            <Link href="#" className="p-2 bg-background rounded-full hover:bg-accent hover:text-white transition-colors">
                                <Facebook className="w-4 h-4" />
                            </Link>
                            <Link href="#" className="p-2 bg-background rounded-full hover:bg-accent hover:text-white transition-colors">
                                <Twitter className="w-4 h-4" />
                            </Link>
                            <Link href="#" className="p-2 bg-background rounded-full hover:bg-accent hover:text-white transition-colors">
                                <Youtube className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold mb-6">Shop</h3>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            <li><Link href="/dresses" className="hover:text-foreground transition-colors">Dresses</Link></li>
                            <li><Link href="/tops" className="hover:text-foreground transition-colors">Tops</Link></li>
                            <li><Link href="/bottoms" className="hover:text-foreground transition-colors">Bottoms</Link></li>
                            <li><Link href="/co-ords" className="hover:text-foreground transition-colors">Co-ords</Link></li>
                            <li><Link href="/new-arrivals" className="hover:text-foreground transition-colors">New Arrivals</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold mb-6">Support</h3>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            <li><Link href="/contact" className="hover:text-foreground transition-colors">Contact Us</Link></li>
                            <li><Link href="/shipping" className="hover:text-foreground transition-colors">Shipping & Returns</Link></li>
                            <li><Link href="/faqs" className="hover:text-foreground transition-colors">FAQs</Link></li>
                            <li><Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Jay Creations. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/terms" className="hover:text-foreground">Terms</Link>
                        <Link href="/privacy" className="hover:text-foreground">Privacy</Link>
                        <Link href="/cookies" className="hover:text-foreground">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
