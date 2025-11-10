import { Suspense } from 'react'
import Results from './Results'

export default function StyleQuizResultsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <Suspense fallback={<div>Loading...</div>}>
        <Results />
      </Suspense>
    </div>
  )
}
