"use client";

import { motion } from "framer-motion";
import { Bot, Sparkles, X } from "lucide-react";

interface ZaraButtonProps {
    open: boolean;
    onToggle: () => void;
}

export default function ZaraButton({
    open,
    onToggle,
}: ZaraButtonProps) {
    return (
        <motion.button
            onClick={onToggle}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35 }}
            className="fixed bottom-6 right-6 z-[9999] flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-gradient-to-br from-violet-600 to-indigo-600 text-white shadow-2xl backdrop-blur-lg"
            aria-label="Open Zara AI Assistant"
        >
            {open ? (
                <X className="h-6 w-6" />
            ) : (
                <>
                    <Bot className="h-7 w-7" />

                    <motion.span
                        className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-yellow-400 text-black"
                        animate={{
                            scale: [1, 1.15, 1],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 2,
                        }}
                    >
                        <Sparkles size={12} />
                    </motion.span>
                </>
            )}
        </motion.button>
    );
}