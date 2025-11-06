'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';

const quizQuestions = [
  {
    question: "What's your go-to hairstyle?",
    answers: [
      "Long and flowing",
      "Short and sassy",
      "Elegant updos",
      "Braids or twists",
    ],
  },
  {
    question: "Which color palette speaks to you?",
    answers: [
      "Natural and earthy tones",
      "Bold and vibrant colors",
      "Soft pastels",
      "Classic black and white",
    ],
  },
  {
    question: "What's your typical weekend like?",
    answers: [
      "Relaxing at a coffee shop",
      "Out on an adventure",
      "Attending a fancy event",
      "Trying a new creative project",
    ],
  },
];

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const router = useRouter();

  const handleAnswer = (answer: string) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answer;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const encodedAnswers = encodeURIComponent(JSON.stringify(selectedAnswers));
      router.push(`/quiz/results?answers=${encodedAnswers}`);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;
  const isLastQuestion = currentQuestion === quizQuestions.length - 1;

  return (
    <div className="bg-background text-primary min-h-screen flex items-center justify-center font-inter bg-noise p-4">
        <div className="relative isolate px-6 pt-14 lg:px-8 w-full max-w-2xl text-center">
            <div
              className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-highlight to-accent opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
              />
            </div>

            <h1 className="font-montserrat text-4xl font-bold tracking-tight text-primary sm:text-5xl mb-12">
              Style Discovery Quiz
            </h1>

            <div className="w-full bg-muted rounded-full h-2.5 mb-8">
              <div className="bg-accent h-2.5 rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
            </div>

            <div className="bg-muted/50 rounded-2xl shadow-lifted p-8 backdrop-blur-sm">
              <h2 className="font-montserrat text-2xl font-bold text-primary mb-6">
                {quizQuestions[currentQuestion].question}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {quizQuestions[currentQuestion].answers.map((answer) => (
                  <button
                    key={answer}
                    onClick={() => handleAnswer(answer)}
                    className={`font-inter text-lg text-left p-4 border-2 rounded-xl transition-all duration-200  ${
                      selectedAnswers[currentQuestion] === answer
                        ? 'bg-accent/80 text-white border-accent shadow-glow'
                        : 'border-muted hover:bg-muted/70 hover:border-secondary'
                    }`}>
                    <span className='flex items-center'>
                      {selectedAnswers[currentQuestion] === answer && <Check className="w-5 h-5 mr-3"/>}
                      {answer}
                    </span>
                  </button>
                ))}
              </div>
              
            </div>
            <div className="flex justify-between items-center mt-8">
                <button
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0}
                  className="font-poppins text-lg font-bold text-secondary flex items-center disabled:opacity-30 transition-opacity hover:text-primary">
                  <ChevronLeft className="mr-2" />
                  Previous
                </button>
                <button
                  onClick={handleNext}
                  className="font-poppins text-lg font-bold text-white bg-accent px-8 py-3 rounded-full shadow-glow transition-all hover:scale-105 hover:shadow-deep-glow disabled:opacity-50"
                  disabled={!selectedAnswers[currentQuestion]}
                  >
                  <span className="flex items-center">
                    {isLastQuestion ? 'Finish' : 'Next'}
                    {!isLastQuestion && <ChevronRight className="ml-2" />}
                  </span>
                </button>
            </div>
        </div>
    </div>
  );
}
