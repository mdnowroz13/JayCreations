import { DollarSign, Package, ShoppingCart, TrendingUp } from "lucide-react"
import RevenueChart from "@/components/admin/RevenueChart"

export default function AdminDashboard() {
    const stats = [
        { label: "Total Revenue", value: "₹45,231.89", icon: DollarSign, change: "+20.1% from last month" },
        { label: "Orders", value: "+2350", icon: ShoppingCart, change: "+180.1% from last month" },
        { label: "Products", value: "12", icon: Package, change: "+12% from last month" },
        { label: "Active Now", value: "+573", icon: TrendingUp, change: "+201 since last hour" },
    ]

    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
                <p className="text-muted-foreground">Overview of your store's performance.</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                    <div key={stat.label} className="p-6 bg-white dark:bg-black border border-border rounded-xl shadow-sm">
                        <div className="flex items-center justify-between space-y-0 pb-2">
                            <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                            <stat.icon className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <div className="text-2xl font-bold">{stat.value}</div>
                        <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
                    </div>
                ))}
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <div className="col-span-4 bg-white dark:bg-black border border-border rounded-xl shadow-sm p-6">
                    <h3 className="font-semibold mb-4">Recent Revenue</h3>
                    <div className="h-[300px] w-full">
                        <RevenueChart />
                    </div>
                </div>
                <div className="col-span-3 bg-white dark:bg-black border border-border rounded-xl shadow-sm p-6">
                    <h3 className="font-semibold mb-4">Recent Sales</h3>
                    <div className="space-y-4">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="flex items-center">
                                <div className="w-9 h-9 rounded-full bg-gray-200 dark:bg-gray-800" />
                                <div className="ml-4 space-y-1">
                                    <p className="text-sm font-medium leading-none">Olivia Martin</p>
                                    <p className="text-xs text-muted-foreground">olivia.martin@email.com</p>
                                </div>
                                <div className="ml-auto font-medium">+₹1,999.00</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
