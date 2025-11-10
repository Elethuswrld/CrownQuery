'use client'

import { useSearchParams } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"

export default function Results() {
  const searchParams = useSearchParams()

  // In a real application, you would fetch personalized wig recommendations
  // based on these answers.

  return (
    <div className="w-full max-w-4xl p-8 rounded-2xl shadow-2xl space-y-8">
        <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-4 font-montserrat">Your Personalized Results</h1>
            <p className="text-muted-foreground">Based on your answers, here are your personalized recommendations.</p>
        </div>

        <Card>
            <CardHeader>
                <CardTitle>Your Quiz Answers</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
                <div>
                    <p><strong>Hair Type:</strong> {searchParams.get('hairType')}</p>
                    <p><strong>Hair Color:</strong> {search_params.get('hairColor')}</p>
                </div>
                <div>
                    <p><strong>Hair Length:</strong> {searchParams.get('hairLength')}</p>
                    <p><strong>Style Preference:</strong> {searchParams.get('stylePreference')}</p>
                </div>
            </CardContent>
        </Card>

        {/* Placeholder for personalized wig recommendations */}
        <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">Personalized wig recommendations coming soon!</p>
        </div>
    </div>
  )
}
