"use client"

import { useState } from "react"
import { Button } from "@/components/ui/Button"
import { Eye } from "lucide-react"

const initialOrders = [
    { id: "#ORD-7829", customer: "Alice Johnson", date: "Oct 24, 2024", total: "₹4,599", status: "Delivered", items: 3 },
    { id: "#ORD-7828", customer: "Mark Smith", date: "Oct 23, 2024", total: "₹1,299", status: "Processing", items: 1 },
    { id: "#ORD-7827", customer: "Sophie Lee", date: "Oct 23, 2024", total: "₹8,999", status: "Shipped", items: 5 },
    { id: "#ORD-7826", customer: "Ryan Chen", date: "Oct 22, 2024", total: "₹2,499", status: "Delivered", items: 2 },
    { id: "#ORD-7825", customer: "Emma Wilson", date: "Oct 21, 2024", total: "₹12,499", status: "Cancelled", items: 4 },
]

export default function AdminOrdersPage() {
    const [orders, setOrders] = useState(initialOrders)

    const handleStatusChange = (id: string, newStatus: string) => {
        setOrders(orders.map(order =>
            order.id === id ? { ...order, status: newStatus } : order
        ))
    }

    const getStatusColor = (status: string) => {
        switch (status) {
            case "Delivered": return "bg-green-500/10 text-green-500 border-green-500/20"
            case "Processing": return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
            case "Shipped": return "bg-blue-500/10 text-blue-500 border-blue-500/20"
            case "Cancelled": return "bg-red-500/10 text-red-500 border-red-500/20"
            default: return "bg-gray-500/10 text-gray-500 border-gray-500/20"
        }
    }

    return (
        <div className="p-8">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Orders</h1>
                    <p className="text-muted-foreground">Manage and track customer orders.</p>
                </div>
            </div>

            <div className="bg-white dark:bg-black border border-border rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-muted/50 border-b border-border">
                            <tr>
                                <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Order ID</th>
                                <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Customer</th>
                                <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Date</th>
                                <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Total</th>
                                <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Status</th>
                                <th className="text-right py-3 px-4 font-medium text-sm text-muted-foreground">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            {orders.map((order) => (
                                <tr key={order.id} className="group hover:bg-muted/50 transition-colors">
                                    <td className="py-3 px-4 font-medium">{order.id}</td>
                                    <td className="py-3 px-4 text-sm">{order.customer}</td>
                                    <td className="py-3 px-4 text-sm text-muted-foreground">{order.date}</td>
                                    <td className="py-3 px-4 text-sm">{order.total}</td>
                                    <td className="py-3 px-4 text-sm">
                                        <select
                                            value={order.status}
                                            onChange={(e) => handleStatusChange(order.id, e.target.value)}
                                            className={`px-2 py-1 rounded-full text-xs font-medium border cursor-pointer focus:outline-none focus:ring-2 focus:ring-ring ${getStatusColor(order.status)}`}
                                        >
                                            <option value="Processing">Processing</option>
                                            <option value="Shipped">Shipped</option>
                                            <option value="Delivered">Delivered</option>
                                            <option value="Cancelled">Cancelled</option>
                                        </select>
                                    </td>
                                    <td className="py-3 px-4 text-right">
                                        <Button variant="ghost" size="icon" className="h-8 w-8">
                                            <Eye className="w-4 h-4" />
                                        </Button>
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
