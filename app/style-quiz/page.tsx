'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/app/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/app/components/ui/radio-group"
import { Label } from "@/app/components/ui/label"
import { Progress } from "@/app/components/ui/progress"

const quizQuestions = [
  {
    id: 'hairType',
    question: 'What is your natural hair type?',
    options: ['Straight', 'Wavy', 'Curly', 'Coily'],
  },
  {
    id: 'hairColor',
    question: 'What is your preferred hair color?',
    options: ['Black', 'Brown', 'Blonde', 'Red', 'Other'],
  },
  {
    id: 'hairLength',
    question: 'What is your preferred hair length?',
    options: ['Short', 'Medium', 'Long'],
  },
  {
    id: 'stylePreference',
    question: 'Which style best describes you?',
    options: ['Chic & Modern', 'Natural & Effortless', 'Bold & Glamorous', 'Fun & Playful'],
  },
]

export default function StyleQuizPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const router = useRouter()

  const handleNext = () => {
    if (currentStep < quizQuestions.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      // Redirect to a results page
      const queryString = new URLSearchParams(answers).toString()
      router.push(`/style-quiz/results?${queryString}`)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleAnswer = (questionId: string, answer: string) => {
    setAnswers({ ...answers, [questionId]: answer })
  }

  const currentQuestion = quizQuestions[currentStep]

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-2xl bg-card p-8 rounded-2xl shadow-2xl space-y-8">
        <div>
            <h1 className="text-4xl font-bold tracking-tight text-center mb-4 font-montserrat">Find Your Perfect Crown</h1>
            <p className="text-muted-foreground text-center">Answer a few questions to get a personalized wig recommendation.</p>
        </div>

        <Progress value={((currentStep + 1) / quizQuestions.length) * 100} className="w-full" />

        <div>
          <h2 className="text-2xl font-semibold mb-6 text-center">{currentQuestion.question}</h2>
          <RadioGroup
            value={answers[currentQuestion.id]}
            onValueChange={(value) => handleAnswer(currentQuestion.id, value)}
            className="grid grid-cols-2 gap-4"
          >
            {currentQuestion.options.map((option) => (
              <div key={option} className="flex items-center space-x-2 bg-input p-4 rounded-lg">
                <RadioGroupItem value={option} id={option} />
                <Label htmlFor={option} className="text-lg">{option}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <div className="flex justify-between">
          <Button variant="outline" onClick={handlePrevious} disabled={currentStep === 0}>
            Previous
          </Button>
          <Button onClick={handleNext} disabled={!answers[currentQuestion.id]}>
            {currentStep === quizQuestions.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </div>
      </div>
    </div>
  )
}
