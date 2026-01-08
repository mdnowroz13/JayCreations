"use client"

import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { Plus, Edit, Trash2 } from "lucide-react"
import { products } from "@/lib/dummy-data"

export default function AdminProductsPage() {
    return (
        <div className="p-8">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Products</h1>
                    <p className="text-muted-foreground">Manage your product inventory.</p>
                </div>
                <Link href="/admin/products/new">
                    <Button className="gap-2">
                        <Plus className="w-4 h-4" /> Add Product
                    </Button>
                </Link>
            </div>

            <div className="bg-white dark:bg-black border border-border rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-muted/50 border-b border-border">
                            <tr>
                                <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Product</th>
                                <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Category</th>
                                <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Price</th>
                                <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Stock</th>
                                <th className="text-right py-3 px-4 font-medium text-sm text-muted-foreground">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            {products.map((product) => (
                                <tr key={product.id} className="group hover:bg-muted/50 transition-colors">
                                    <td className="py-3 px-4">
                                        <div className="flex items-center gap-3">
                                            <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-muted">
                                                <img src={product.images[0]} alt={product.name} className="object-cover w-full h-full" />
                                            </div>
                                            <span className="font-medium">{product.name}</span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-4 text-sm text-muted-foreground">{product.category}</td>
                                    <td className="py-3 px-4 text-sm">₹{product.price.toLocaleString()}</td>
                                    <td className="py-3 px-4 text-sm">
                                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-500">
                                            In Stock
                                        </span>
                                    </td>
                                    <td className="py-3 px-4 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                                <Edit className="w-4 h-4" />
                                            </Button>
                                            <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-500/10">
                                                <Trash2 className="w-4 h-4" />
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
