"use client"

import { Button } from "@/components/ui/Button"
import { Mail, MoreHorizontal } from "lucide-react"

const customers = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com", orders: 12, spent: "₹45,200", lastOrder: "Oct 24, 2024" },
    { id: 2, name: "Mark Smith", email: "mark@example.com", orders: 5, spent: "₹12,400", lastOrder: "Oct 23, 2024" },
    { id: 3, name: "Sophie Lee", email: "sophie@example.com", orders: 24, spent: "₹1,20,000", lastOrder: "Oct 23, 2024" },
    { id: 4, name: "Ryan Chen", email: "ryan@example.com", orders: 2, spent: "₹4,998", lastOrder: "Oct 22, 2024" },
    { id: 5, name: "Emma Wilson", email: "emma@example.com", orders: 8, spent: "₹32,150", lastOrder: "Oct 21, 2024" },
]

export default function AdminCustomersPage() {
    return (
        <div className="p-8">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Customers</h1>
                    <p className="text-muted-foreground">View and manage your customer base.</p>
                </div>
            </div>

            <div className="bg-white dark:bg-black border border-border rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-muted/50 border-b border-border">
                            <tr>
                                <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Customer</th>
                                <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Email</th>
                                <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Orders</th>
                                <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Total Spent</th>
                                <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Last Order</th>
                                <th className="text-right py-3 px-4 font-medium text-sm text-muted-foreground">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            {customers.map((customer) => (
                                <tr key={customer.id} className="group hover:bg-muted/50 transition-colors">
                                    <td className="py-3 px-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold text-xs">
                                                {customer.name.charAt(0)}
                                            </div>
                                            <span className="font-medium">{customer.name}</span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-4 text-sm text-muted-foreground">{customer.email}</td>
                                    <td className="py-3 px-4 text-sm">{customer.orders}</td>
                                    <td className="py-3 px-4 text-sm">{customer.spent}</td>
                                    <td className="py-3 px-4 text-sm text-muted-foreground">{customer.lastOrder}</td>
                                    <td className="py-3 px-4 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                                <Mail className="w-4 h-4" />
                                            </Button>
                                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                                <MoreHorizontal className="w-4 h-4" />
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
