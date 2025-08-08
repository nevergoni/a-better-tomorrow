'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { questions, Question } from '../data/questions'

export default function QuestionsPage() {
  const router = useRouter()
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<number[]>(new Array(questions.length).fill(-1))
  const [showProgress, setShowProgress] = useState(false)

  useEffect(() => {
    // 개인정보가 없으면 홈으로 리다이렉트
    const personalInfo = localStorage.getItem('personalInfo')
    if (!personalInfo) {
      router.push('/')
      return
    }
    
    // 진행률 표시
    setTimeout(() => setShowProgress(true), 500)
  }, [router])

  const handleAnswer = (answer: number) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestionIndex] = answer
    setAnswers(newAnswers)

    // 다음 질문으로 이동
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1)
      } else {
        // 모든 질문 완료
        localStorage.setItem('answers', JSON.stringify(newAnswers))
        router.push('/share')
      }
    }, 300)
  }

  const currentQuestion = questions[currentQuestionIndex]
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100
  const answeredCount = answers.filter(answer => answer !== -1).length
  // 답변 선택 여부
  const isAnswered = answers[currentQuestionIndex] !== -1

  // 각 질문별로 커스텀 답변 옵션 사용
  const answerOptions = currentQuestion.answerOptions.map((label, idx) => ({
    value: idx + 1,
    label,
    color: ["bg-red-500", "bg-orange-500", "bg-blue-500", "bg-green-500"][idx]
  }))

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/personal-info" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
              <ArrowLeft className="h-5 w-5" />
              <span>돌아가기</span>
            </Link>
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-primary-600" />
              <h1 className="text-2xl font-bold text-gray-900">A Better Tomorrow</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: showProgress ? 1 : 0, y: showProgress ? 0 : -20 }}
          className="mb-8"
        >
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">
              {currentQuestionIndex + 1} / {questions.length}
            </span>
            <span className="text-sm text-gray-600">
              {Math.round(progress)}% 완료
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div
              className="bg-primary-600 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </motion.div>

        {/* Question Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestionIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="card"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                질문 {currentQuestionIndex + 1}
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                {currentQuestion.text}
              </p>
            </div>

            {/* Answer Options */}
            <div className="space-y-4">
              {answerOptions.map((option, index) => (
                <motion.button
                  key={option.value}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleAnswer(option.value)}
                  className={`w-full p-4 rounded-lg border-2 transition-all duration-200 hover:scale-105 text-lg font-medium
                    ${answers[currentQuestionIndex] === option.value
                      ? 'border-primary-600 bg-primary-600 text-white'
                      : 'border-gray-200 bg-white text-gray-900 hover:border-primary-300 hover:bg-primary-50'}
                  `}
                >
                  <div className="flex items-center justify-between">
                    <span>{option.label}</span>
                    {answers[currentQuestionIndex] === option.value && (
                      <CheckCircle className="h-6 w-6 text-white" />
                    )}
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
              <button
                onClick={() => setCurrentQuestionIndex(Math.max(0, currentQuestionIndex - 1))}
                disabled={currentQuestionIndex === 0}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                  currentQuestionIndex === 0
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <ArrowLeft className="h-4 w-4" />
                <span>이전</span>
              </button>

              <span className="text-sm text-gray-500">
                {answeredCount} / {questions.length} 답변 완료
              </span>

              {currentQuestionIndex < questions.length - 1 ? (
                <button
                  onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
                  disabled={!isAnswered}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                    !isAnswered
                      ? 'text-gray-400 cursor-not-allowed bg-gray-100'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <span>다음</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              ) : (
                isAnswered && (
                  <button
                    onClick={() => {
                      localStorage.setItem('answers', JSON.stringify(answers))
                      router.push('/share')
                    }}
                    className="btn-primary inline-flex items-center space-x-2 text-lg px-8 py-4"
                  >
                    <span>결과 확인하기</span>
                    <ArrowRight className="h-5 w-5" />
                  </button>
                )
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  )
} 