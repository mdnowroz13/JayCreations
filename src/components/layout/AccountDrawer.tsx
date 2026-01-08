"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, Settings, HelpCircle, LogOut, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/Button"

interface AccountDrawerProps {
    isOpen: boolean
    onClose: () => void
}

export default function AccountDrawer({ isOpen, onClose }: AccountDrawerProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        drag="y"
                        dragConstraints={{ top: 0 }}
                        dragElastic={0.2}
                        onDragEnd={(_, info) => {
                            if (info.offset.y > 100) onClose()
                        }}
                        className="fixed bottom-0 left-0 right-0 z-[70] bg-zinc-900 border-t border-zinc-800 rounded-t-[2rem] p-6 pb-safe min-h-[60vh]"
                    >
                        {/* Drag Handle */}
                        <div className="w-12 h-1.5 bg-zinc-700 rounded-full mx-auto mb-8" />

                        {/* Header */}
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h2 className="text-2xl font-serif text-white mb-1" style={{ fontFamily: 'var(--font-playfair)' }}>
                                    Welcome
                                </h2>
                                <p className="text-zinc-400 text-sm">Unlock the full experience</p>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 rounded-full bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Google Sign In Button */}
                        <Button
                            className="w-full h-14 bg-white text-black hover:bg-zinc-200 rounded-xl flex items-center justify-center gap-3 text-base font-medium mb-8 group"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.84z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                />
                            </svg>
                            Connect with Google
                            <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                        </Button>

                        {/* Divider */}
                        <div className="h-px bg-zinc-800 w-full mb-8" />

                        {/* Menu Links */}
                        <div className="space-y-2">
                            {[
                                { icon: Settings, label: "Settings" },
                                { icon: HelpCircle, label: "Help & Support" },
                            ].map((item, index) => (
                                <button
                                    key={index}
                                    className="w-full flex items-center justify-between p-4 rounded-xl hover:bg-zinc-800/50 text-zinc-300 hover:text-white transition-colors group"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="p-2 rounded-lg bg-zinc-800 group-hover:bg-zinc-700 transition-colors">
                                            <item.icon size={18} />
                                        </div>
                                        <span className="font-medium">{item.label}</span>
                                    </div>
                                    <ChevronRight size={16} className="text-zinc-600 group-hover:text-white transition-colors" />
                                </button>
                            ))}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
