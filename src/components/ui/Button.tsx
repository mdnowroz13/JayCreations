import { ButtonHTMLAttributes, forwardRef } from "react"
import { cn } from "@/lib/utils"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost"
    size?: "sm" | "md" | "lg" | "icon"
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
                    {
                        "bg-primary text-background hover:opacity-90": variant === "primary",
                        "bg-secondary text-white hover:opacity-90": variant === "secondary",
                        "border border-primary text-primary hover:bg-primary hover:text-background": variant === "outline",
                        "hover:bg-muted text-foreground": variant === "ghost",
                        "h-9 px-4 text-sm": size === "sm",
                        "h-11 px-6 text-base": size === "md",
                        "h-14 px-8 text-lg": size === "lg",
                        "h-9 w-9 p-0": size === "icon",
                    },
                    className
                )}
                {...props}
                suppressHydrationWarning
            />
        )
    }
)
Button.displayName = "Button"

export { Button }
