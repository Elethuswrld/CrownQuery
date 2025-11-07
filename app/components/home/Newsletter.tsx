'use client'

import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";

export default function Newsletter() {
    return (
        <div className="bg-gray-50 py-12">
            <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Stay in the Know</h2>
                <p className="mt-4 text-lg text-gray-600">Sign up for our newsletter to get the latest on new arrivals, special offers, and more.</p>
                <form className="mt-8 flex max-w-md mx-auto">
                    <Input type="email" placeholder="Enter your email" className="flex-1" />
                    <Button type="submit" className="ml-4">Sign Up</Button>
                </form>
            </div>
        </div>
    )
}
