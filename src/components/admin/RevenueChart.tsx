"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const data = [
    { month: "Jan", revenue: 12000 },
    { month: "Feb", revenue: 19000 },
    { month: "Mar", revenue: 15000 },
    { month: "Apr", revenue: 22000 },
    { month: "May", revenue: 28000 },
    { month: "Jun", revenue: 25000 },
    { month: "Jul", revenue: 35000 },
    { month: "Aug", revenue: 29000 },
    { month: "Sep", revenue: 42000 },
    { month: "Oct", revenue: 38000 },
    { month: "Nov", revenue: 45000 },
    { month: "Dec", revenue: 52000 },
]

export default function RevenueChart() {
    const maxRevenue = Math.max(...data.map(d => d.revenue))
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    return (
        <div className="w-full h-full flex flex-col justify-end">
            <div className="flex items-end justify-between gap-2 h-[250px] w-full px-2">
                {data.map((item, index) => {
                    const heightPercentage = (item.revenue / maxRevenue) * 100
                    return (
                        <div
                            key={item.month}
                            className="flex flex-col items-center justify-end h-full w-full group relative"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {/* Tooltip */}
                            {hoveredIndex === index && (
                                <div className="absolute -top-10 bg-black text-white text-xs py-1 px-2 rounded shadow-lg z-10 whitespace-nowrap">
                                    ₹{item.revenue.toLocaleString()}
                                </div>
                            )}

                            {/* Bar */}
                            <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: `${heightPercentage}%` }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                className={`w-full max-w-[30px] rounded-t-md transition-colors duration-300 ${hoveredIndex === index ? "bg-accent" : "bg-black/80 dark:bg-white/90"
                                    }`}
                            />

                            {/* Label */}
                            <span className="text-[10px] text-muted-foreground mt-2 font-medium">
                                {item.month}
                            </span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
