export interface Product {
    id: string;
    slug: string;
    name: string;
    price: number;
    originalPrice?: number;
    rating: number;
    reviewCount: number;
    description: string;
    category: string;
    details: string[];
    images: string[];
    sizes: string[];
    colors: { name: string; value: string }[];
    reviews: {
        id: string;
        user: string;
        rating: number;
        date: string;
        title: string;
        content: string;
        verified: boolean;
    }[];
}

export const products: Product[] = [
    {
        id: "1",
        slug: "midnight-velvet-evening-gown",
        name: "The Midnight Velvet Gown",
        price: 295,
        originalPrice: 450,
        rating: 4.8,
        reviewCount: 124,
        description: "Crafted from Italian silk velvet, this floor-length gown features a daring plunge neckline and a silhouette that celebrates the feminine form. Perfect for black-tie events and evening soirées, it embodies timeless elegance with a modern edge.",
        category: "Dresses",
        details: [
            "100% Italian Silk Velvet",
            "Deep V-neckline",
            "Concealed back zipper",
            "Fully lined in silk satin",
            "Dry clean only",
            "Made in Italy"
        ],
        images: [
            "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1908&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=1887&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=1887&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1504198458649-3128b932f49e?q=80&w=1887&auto=format&fit=crop",
        ],
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: [
            { name: "Midnight Black", value: "#000000" },
            { name: "Royal Burgundy", value: "#4a0404" },
            { name: "Emerald Deep", value: "#023020" }
        ],
        reviews: [
            {
                id: "r1",
                user: "Sarah M.",
                rating: 5,
                date: "2 days ago",
                title: "Absolutely stunning",
                content: "The quality of the velvet is unmatched. It fits like a glove and I received so many compliments at the gala.",
                verified: true
            },
            {
                id: "r2",
                user: "Jessica K.",
                rating: 5,
                date: "1 week ago",
                title: "Worth every penny",
                content: "I was hesitant about the price, but the craftsmanship is incredible. The lining feels so luxurious against the skin.",
                verified: true
            }
        ]
    },
    {
        id: "2",
        slug: "ethereal-silk-blouse",
        name: "Ethereal Silk Blouse",
        price: 180,
        rating: 4.9,
        reviewCount: 85,
        description: "A semi-sheer silk chiffon blouse with billowy sleeves and a delicate tie-neck. This piece transitions effortlessly from office elegance to evening allure.",
        category: "Tops",
        details: [
            "100% Silk Chiffon",
            "Tie-neck detail",
            "Button cuffs",
            "Camisole included"
        ],
        images: [
            "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?q=80&w=1887&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=1887&auto=format&fit=crop"
        ],
        sizes: ["XS", "S", "M", "L"],
        colors: [
            { name: "Ivory", value: "#FFFFF0" },
            { name: "Blush", value: "#FFE4E1" }
        ],
        reviews: [
            {
                id: "r2-1",
                user: "Emily R.",
                rating: 5,
                date: "3 days ago",
                title: "So elegant!",
                content: "This blouse is a dream. The silk is so soft and the fit is perfect.",
                verified: true
            }
        ]
    },
    {
        id: "3",
        slug: "noir-wide-leg-trousers",
        name: "Noir Wide-Leg Trousers",
        price: 220,
        originalPrice: 250,
        rating: 4.7,
        reviewCount: 62,
        description: "Tailored from premium wool crepe, these high-waisted trousers feature a dramatic wide leg that elongates the silhouette. A staple for the modern power wardrobe.",
        category: "Bottoms",
        details: [
            "100% Wool Crepe",
            "High-waisted fit",
            "Side pockets",
            "Hook and eye closure"
        ],
        images: [
            "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1887&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?q=80&w=1887&auto=format&fit=crop"
        ],
        sizes: ["2", "4", "6", "8", "10"],
        colors: [
            { name: "Black", value: "#000000" },
            { name: "Charcoal", value: "#36454F" }
        ],
        reviews: [
            {
                id: "r3-1",
                user: "Anna K.",
                rating: 5,
                date: "1 week ago",
                title: "Perfect fit",
                content: "Finally trousers that fit my waist and hips perfectly. Worth the investment.",
                verified: true
            }
        ]
    },
    {
        id: "4",
        slug: "luxe-knit-coord-set",
        name: "Luxe Knit Co-ord Set",
        price: 350,
        rating: 5.0,
        reviewCount: 45,
        description: "Experience unparalleled comfort with this cashmere-blend ribbed knit set. Featuring a slouchy oversized sweater and matching wide-leg pants for the ultimate chic lounge look.",
        category: "Co-ords",
        details: [
            "Cashmere/Wool Blend",
            "Ribbed texture",
            "Elastic waistband",
            "Oversized fit"
        ],
        images: [
            "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1887&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1964&auto=format&fit=crop"
        ],
        sizes: ["XS/S", "M/L"],
        colors: [
            { name: "Oatmeal", value: "#E0DCC8" },
            { name: "Grey Marl", value: "#808080" }
        ],
        reviews: [
            {
                id: "r4-1",
                user: "Sophie L.",
                rating: 5,
                date: "2 days ago",
                title: "Obsessed",
                content: "I live in this set now. It's so chic yet comfortable.",
                verified: true
            }
        ]
    },
    {
        id: "5",
        slug: "scarlet-satin-midi-dress",
        name: "Scarlet Satin Midi Dress",
        price: 210,
        rating: 4.6,
        reviewCount: 98,
        description: "A bias-cut satin midi dress that drapes beautifully over the body. The cowl neckline and open back add a touch of 90s minimalism to this striking piece.",
        category: "Dresses",
        details: [
            "Heavyweight Satin",
            "Bias cut",
            "Cowl neck",
            "Adjustable straps"
        ],
        images: [
            "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1983&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1908&auto=format&fit=crop"
        ],
        sizes: ["XS", "S", "M", "L"],
        colors: [
            { name: "Scarlet", value: "#FF2400" },
            { name: "Champagne", value: "#F7E7CE" }
        ],
        reviews: [
            {
                id: "r5-1",
                user: "Olivia P.",
                rating: 4,
                date: "5 days ago",
                title: "Stunning color",
                content: "The red is even more vibrant in person. Fits slightly small though.",
                verified: true
            }
        ]
    },
    {
        id: "6",
        slug: "ivory-structured-corset",
        name: "Ivory Structured Corset",
        price: 150,
        rating: 4.8,
        reviewCount: 30,
        description: "A modern take on the classic corset, featuring structured boning and a curved hem. Pairs perfectly with tailored trousers or a flowing skirt.",
        category: "Tops",
        details: [
            "Cotton Blend",
            "Internal boning",
            "Back zipper",
            "Fully lined"
        ],
        images: [
            "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?q=80&w=1887&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1503342394128-c104d54dba01?q=80&w=1887&auto=format&fit=crop"
        ],
        sizes: ["XS", "S", "M", "L"],
        colors: [
            { name: "Ivory", value: "#FFFFF0" },
            { name: "Black", value: "#000000" }
        ],
        reviews: [
            {
                id: "r6-1",
                user: "Mia T.",
                rating: 5,
                date: "1 day ago",
                title: "Structured perfection",
                content: "Gives such a nice shape. I wear it with everything.",
                verified: true
            }
        ]
    },
    {
        id: "7",
        slug: "leather-pencil-skirt",
        name: "Leather Pencil Skirt",
        price: 280,
        rating: 4.7,
        reviewCount: 55,
        description: "Cut from buttery soft vegan leather, this pencil skirt features a high slit and a sleek, form-fitting silhouette. Edgy yet sophisticated.",
        category: "Bottoms",
        details: [
            "Premium Vegan Leather",
            "High slit",
            "Back zipper",
            "Midi length"
        ],
        images: [
            "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1887&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?q=80&w=1887&auto=format&fit=crop"
        ],
        sizes: ["XS", "S", "M", "L"],
        colors: [
            { name: "Black", value: "#000000" },
            { name: "Burgundy", value: "#800020" }
        ],
        reviews: [
            {
                id: "r7-1",
                user: "Chloe B.",
                rating: 4,
                date: "2 weeks ago",
                title: "Great quality",
                content: "The leather feels real. A bit tight on the waist though.",
                verified: true
            }
        ]
    },
    {
        id: "8",
        slug: "velvet-blazer-pant-set",
        name: "Velvet Blazer & Pant Set",
        price: 420,
        rating: 4.9,
        reviewCount: 20,
        description: "Make a statement in this plush velvet suit. The tailored blazer and matching trousers offer a powerful yet feminine look for special occasions.",
        category: "Co-ords",
        details: [
            "Cotton Velvet",
            "Single button blazer",
            "Straight leg trousers",
            "Satin lapels"
        ],
        images: [
            "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1887&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=1964&auto=format&fit=crop"
        ],
        sizes: ["XS", "S", "M", "L"],
        colors: [
            { name: "Navy", value: "#000080" },
            { name: "Emerald", value: "#50C878" }
        ],
        reviews: [
            {
                id: "r8-1",
                user: "Isabella G.",
                rating: 5,
                date: "3 days ago",
                title: "Power suit",
                content: "I felt so confident wearing this. The velvet is lush.",
                verified: true
            }
        ]
    },
    {
        id: "9",
        slug: "sapphire-wrap-dress",
        name: "Sapphire Wrap Dress",
        price: 195,
        rating: 4.5,
        reviewCount: 78,
        description: "A universally flattering wrap dress in a rich sapphire hue. The flutter sleeves and adjustable waist tie make it comfortable and chic.",
        category: "Dresses",
        details: [
            "Viscose Crepe",
            "Wrap closure",
            "Flutter sleeves",
            "Midi length"
        ],
        images: [
            "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1946&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1908&auto=format&fit=crop"
        ],
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: [
            { name: "Sapphire", value: "#0F52BA" },
            { name: "Black", value: "#000000" }
        ],
        reviews: [
            {
                id: "r9-1",
                user: "Grace H.",
                rating: 5,
                date: "4 days ago",
                title: "Beautiful dress",
                content: "The color is exactly as shown. Very flattering.",
                verified: true
            }
        ]
    },
    {
        id: "10",
        slug: "sheer-organza-shirt",
        name: "Sheer Organza Shirt",
        price: 165,
        rating: 4.4,
        reviewCount: 40,
        description: "Play with transparency in this crisp organza shirt. Layer it over a camisole or bralette for a bold, contemporary look.",
        category: "Tops",
        details: [
            "100% Polyester Organza",
            "Oversized fit",
            "Classic collar",
            "Button front"
        ],
        images: [
            "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?q=80&w=1887&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1503342394128-c104d54dba01?q=80&w=1887&auto=format&fit=crop"
        ],
        sizes: ["XS", "S", "M", "L"],
        colors: [
            { name: "White", value: "#FFFFFF" },
            { name: "Pale Pink", value: "#FADADD" }
        ],
        reviews: [
            {
                id: "r10-1",
                user: "Lily M.",
                rating: 4,
                date: "1 week ago",
                title: "Unique piece",
                content: "Love the transparency. Requires a camisole underneath.",
                verified: true
            }
        ]
    }
];
