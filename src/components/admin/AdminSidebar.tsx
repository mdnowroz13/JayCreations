"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Package, ShoppingCart, Users, Settings, LogOut } from "lucide-react"
import { cn } from "@/lib/utils"

export default function AdminSidebar() {
    const pathname = usePathname()

    const links = [
        { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
        { href: "/admin/products", label: "Products", icon: Package },
        { href: "/admin/orders", label: "Orders", icon: ShoppingCart },
        { href: "/admin/customers", label: "Customers", icon: Users },
    ]

    return (
        <aside className="w-64 bg-black text-white h-screen fixed left-0 top-0 hidden md:flex flex-col">
            <div className="p-6 border-b border-white/10">
                <Link href="/admin" className="text-2xl font-bold tracking-tighter">
                    JAY<span className="text-accent">.</span> <span className="text-xs font-normal opacity-50">ADMIN</span>
                </Link>
            </div>

            <nav className="flex-1 p-4 space-y-2">
                {links.map(({ href, label, icon: Icon }) => {
                    const isActive = pathname === href
                    return (
                        <Link
                            key={href}
                            href={href}
                            suppressHydrationWarning
                            className={cn(
                                "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                                isActive ? "bg-white text-black" : "text-white/70 hover:bg-white/10 hover:text-white"
                            )}
                        >
                            <Icon className="w-5 h-5" />
                            <span className="font-medium">{label}</span>
                        </Link>
                    )
                })}
            </nav>

            <div className="p-4 border-t border-white/10">
                <button className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-red-400 hover:bg-red-500/10 transition-colors">
                    <LogOut className="w-5 h-5" />
                    <span className="font-medium">Logout</span>
                </button>
            </div>
        </aside>
    )
}
