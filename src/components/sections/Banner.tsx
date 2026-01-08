"use client"

import Image from "next/image"

export default function Banner() {
    return (
        <section className="w-full bg-zinc-950 py-12">
            <div className="container mx-auto px-4">
                {/* 
                    Aspect Ratio 21:9 (Ultrawide) ensures it looks like a banner strip 
                    on all devices, not a full-screen hero.
                */}
                <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden">
                    <Image
                        src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop"
                        alt="Fashion Collection"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                    />
                    {/* Subtle Overlay */}
                    <div className="absolute inset-0 bg-black/10" />
                </div>
            </div>
        </section>
    )
}
