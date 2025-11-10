'use client'

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react";
import { Sheet, SheetTrigger, SheetContent } from "@/app/components/ui/sheet"
import { Button } from "@/app/components/ui/button"
import { Menu, Crown, ShoppingBag, User, LogOut } from 'lucide-react';
import { useAuth } from "@/app/AuthContext";
import { ThemeToggle } from "@/app/components/layout/ThemeToggle";

export default function Navbar() {
    const { user, signOut } = useAuth();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm shadow-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href="/" className="flex items-center gap-2" prefetch={false}>
                            <Crown className="h-8 w-8 text-crown-gold" />
                            <span className="text-2xl font-bold text-foreground font-montserrat">CrownQuery</span>
                        </Link>
                        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                            <Link
                                href="/"
                                className="text-muted-foreground hover:text-foreground transition-colors"
                                prefetch={false}
                            >
                                Home
                            </Link>
                            <Link
                                href="/catalog"
                                className="text-muted-foreground hover:text-foreground transition-colors"
                                prefetch={false}
                            >
                                Catalog
                            </Link>
                            <Link
                                href="/style-quiz"
                                className="text-muted-foreground hover:text-foreground transition-colors"
                                prefetch={false}
                            >
                                Style Quiz
                            </Link>
                            <Link
                                href="/about"
                                className="text-muted-foreground hover:text-foreground transition-colors"
                                prefetch={false}
                            >
                                About
                            </Link>
                            <Link
                                href="/contact"
                                className="text-muted-foreground hover:text-foreground transition-colors"
                                prefetch={false}
                            >
                                Contact
                            </Link>
                        </nav>
                    </div>
                    <div className="flex items-center gap-4">
                        <ThemeToggle />
                        <Button variant="ghost" size="icon" className="hidden md:inline-flex">
                            <ShoppingBag className="h-6 w-6" />
                            <span className="sr-only">Shopping Bag</span>
                        </Button>

                        {mounted && user && (
                            <div className="flex items-center gap-2">
                                <Link href="/profile">
                                    <Button variant="ghost" className="hidden md:inline-flex items-center gap-2">
                                        {user.photoURL ? (
                                            <Image src={user.photoURL} alt="user profile" width={24} height={24} className="rounded-full" />
                                        ) : (
                                            <User className="h-6 w-6" />
                                        )}
                                        <span className="text-sm font-medium">{user.displayName}</span>
                                    </Button>
                                </Link>
                                <Button onClick={signOut} variant="ghost" size="icon" className="hidden md:inline-flex" title="Sign Out">
                                    <LogOut className="h-6 w-6" />
                                    <span className="sr-only">Sign Out</span>
                                </Button>
                            </div>
                        )}
                        {mounted && !user && (
                            <Link href="/login">
                                <Button variant="outline">
                                    Sign In
                                </Button>
                            </Link>
                        )}
                        
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="md:hidden">
                                    <Menu className="h-6 w-6" />
                                    <span className="sr-only">Toggle navigation menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right">
                                <div className="grid gap-4 p-6">
                                    <Link href="/" className="font-medium hover:text-foreground" prefetch={false}>Home</Link>
                                    <Link href="/catalog" className="font-medium hover:text-foreground" prefetch={false}>Catalog</Link>
                                    <Link href="/style-quiz" className="font-medium hover:text-foreground" prefetch={false}>Style Quiz</Link>
                                    <Link href="/about" className="font-medium hover:text-foreground" prefetch={false}>About</Link>
                                    <Link href="/contact" className="font-medium hover:text-foreground" prefetch={false}>Contact</Link>
                                    <div className="border-t pt-4 grid gap-2">
                                        <Link href="#" className="flex items-center gap-2 font-medium" prefetch={false}>
                                            <ShoppingBag className="h-5 w-5" />
                                            Shopping Bag
                                        </Link>
                                        {mounted && user && (
                                            <>
                                                <Link href="/profile" className="flex items-center gap-2 font-medium" prefetch={false}>
                                                     {user.photoURL ? (
                                                        <Image src={user.photoURL} alt="user profile" width={24} height={24} className="rounded-full" />
                                                    ) : (
                                                        <User className="h-5 w-5" />
                                                    )}
                                                    <span>{user.displayName}</span>
                                                </Link>
                                                <Button onClick={signOut} className="w-full justify-start flex items-center gap-2 font-medium" variant="ghost">
                                                    <LogOut className="h-5 w-5" />
                                                    Sign Out
                                                </Button>
                                            </>
                                        )}
                                        {mounted && !user && (
                                             <Link href="/login">
                                                <Button className="w-full">
                                                    Sign In
                                                </Button>
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    )
}
