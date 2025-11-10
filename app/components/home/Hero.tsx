'use client'

import { Button } from "@/app/components/ui/button";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero() {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    return (
        <div className="relative w-full h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/images/hero.jpg')"}}>
            <div className="absolute inset-0 bg-black bg-opacity-50" />
            <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8 }} 
                className="relative z-10 text-center text-white p-4"
            >
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ delay: 0.2, duration: 0.8 }} 
                    className="text-5xl md:text-7xl font-extrabold font-montserrat tracking-tight text-shadow-lg"
                >
                    Elegance in Every <span className="text-gold">Crown</span>
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ delay: 0.4, duration: 0.8 }} 
                    className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-white/90"
                >
                    From regal weddings to majestic photoshoots, find the crown that tells your story.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    {isClient && <Button size="xl" className="mt-8 bg-gold text-primary-foreground font-bold text-lg hover:bg-gold/90 transform hover:scale-105 transition-transform duration-300 shadow-xl" suppressHydrationWarning>Explore Collections</Button>}
                </motion.div>
            </motion.div>
        </div>
    )
}