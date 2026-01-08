"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { ArrowLeft, Upload } from "lucide-react"
import { supabase } from "@/lib/supabase"

export default function AddProductPage() {
    const [isLoading, setIsLoading] = useState(false)

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)
        // TODO: Implement Supabase upload logic
        setTimeout(() => setIsLoading(false), 1000)
    }

    return (
        <div className="p-8 max-w-4xl mx-auto">
            <div className="mb-8">
                <Link href="/admin/products" className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-2 mb-4">
                    <ArrowLeft className="w-4 h-4" /> Back to Products
                </Link>
                <h1 className="text-3xl font-bold tracking-tight">Add New Product</h1>
                <p className="text-muted-foreground">Create a new product listing.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8 bg-white dark:bg-black p-8 rounded-xl border border-border">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-2">Product Name</label>
                            <input type="text" className="w-full bg-background border border-border rounded-lg px-4 py-2 focus:outline-none focus:border-accent" placeholder="e.g. Oversized Tee" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Price (₹)</label>
                            <input type="number" className="w-full bg-background border border-border rounded-lg px-4 py-2 focus:outline-none focus:border-accent" placeholder="1499" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Category</label>
                            <select className="w-full bg-background border border-border rounded-lg px-4 py-2 focus:outline-none focus:border-accent">
                                <option>Dresses</option>
                                <option>Tops</option>
                                <option>Bottoms</option>
                                <option>Co-ords</option>
                                <option>Outerwear</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Description</label>
                            <textarea className="w-full bg-background border border-border rounded-lg px-4 py-2 focus:outline-none focus:border-accent h-32" placeholder="Product details..." />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <label className="block text-sm font-medium mb-2">Product Images</label>
                        <div className="border-2 border-dashed border-border rounded-xl p-8 flex flex-col items-center justify-center text-center hover:bg-muted/50 transition-colors cursor-pointer">
                            <Upload className="w-8 h-8 text-muted-foreground mb-4" />
                            <p className="text-sm font-medium">Click to upload or drag and drop</p>
                            <p className="text-xs text-muted-foreground mt-1">SVG, PNG, JPG or GIF (max. 5MB)</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end gap-4 pt-4 border-t border-border">
                    <Button type="button" variant="outline" onClick={() => window.history.back()}>
                        Cancel
                    </Button>
                    <Button type="submit" disabled={isLoading}>
                        {isLoading ? "Creating..." : "Create Product"}
                    </Button>
                </div>
            </form>
        </div>
    )
}
