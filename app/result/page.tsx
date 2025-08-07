'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Heart, ArrowLeft, ExternalLink, Star, AlertTriangle, Pill, Apple, Activity } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { calculateHealthType, HealthType } from '../data/results'

interface PersonalInfo {
  name: string
  birthDate: string
  phone: string
  medications: string
  medicalHistory: string
  currentConditions: string
}

export default function ResultPage() {
  const router = useRouter()
  const [healthType, setHealthType] = useState<HealthType | null>(null)
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [debugInfo, setDebugInfo] = useState<any>(null)

  useEffect(() => {
    // 답변과 개인정보 확인
    const answers = localStorage.getItem('answers')
    const personalInfoStr = localStorage.getItem('personalInfo')
    
    if (!answers || !personalInfoStr) {
      router.push('/')
      return
    }

    try {
      const answersArray = JSON.parse(answers)
      const personalInfoData = JSON.parse(personalInfoStr)
      
      setPersonalInfo(personalInfoData)
      
      // 디버깅: 답변 배열 출력
      console.log('답변 배열:', answersArray)
      
      const result = calculateHealthType(answersArray)
      setHealthType(result)
      
      // 디버깅 정보 저장
      setDebugInfo({
        answers: answersArray,
        resultCode: result.code
      })
      
      // 결과 표시 애니메이션
      setTimeout(() => setShowResult(true), 500)
    } catch (error) {
      console.error('Error parsing data:', error)
      router.push('/')
    }
  }, [router])

  if (!healthType || !personalInfo) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">결과를 분석하고 있습니다...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
              <ArrowLeft className="h-5 w-5" />
              <span>홈으로</span>
            </Link>
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-primary-600" />
              <h1 className="text-2xl font-bold text-gray-900">A Better Tomorrow</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Result Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: showResult ? 1 : 0, y: showResult ? 0 : 20 }}
          transition={{ duration: 0.6 }}
          className="card text-center mb-8"
        >
          <div className="mb-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: showResult ? 1 : 0 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="text-6xl mb-4"
            >
              {healthType.emoji}
            </motion.div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {personalInfo.name}님의 건강 성향
            </h2>
            <h3 className="text-2xl font-bold text-primary-600 mb-4">
              {healthType.name}형 ({healthType.code})
            </h3>
            <p className="text-lg text-gray-600 mb-4">
              {healthType.fullName}
            </p>
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 mb-4">
              <h4 className="text-lg font-bold text-blue-600 mb-2">🎉 당신의 건강 유형 코멘트</h4>
              <p className="text-base text-blue-600 font-bold">
                {healthType.comment}
              </p>
            </div>

          </div>

          <div className="bg-gradient-to-r from-primary-50 to-blue-50 p-6 rounded-lg">
            <p className="text-xl text-gray-700 leading-relaxed">
              {healthType.description}
            </p>
            <p className="text-base text-blue-500 mt-4 font-medium">
              {healthType.visualDesc}
            </p>
          </div>
        </motion.div>

        {/* Advertisement Links - 추천 서비스 강조 및 상단 이동 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: showResult ? 1 : 0, y: showResult ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="card mb-8 border-2 border-primary-400 shadow-xl bg-gradient-to-br from-blue-50 to-white"
        >
          <h3 className="text-2xl font-extrabold text-primary-700 mb-4 text-center flex items-center justify-center gap-2">
            <span className="inline-block animate-bounce">🎁</span>
            지금 꼭! 추천 건강 서비스
          </h3>
          <p className="text-center text-base text-primary-600 mb-6 font-semibold">
            내 건강에 딱 맞는 솔루션, 아래에서 바로 확인해보세요!
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="#"
              className="group p-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl shadow-lg flex items-center justify-between hover:scale-105 transition-transform duration-200 border-2 border-blue-400 hover:border-blue-700"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">🔮</span>
                <span className="font-bold text-lg">무료로 질병예측해보기</span>
              </div>
              <span className="group-hover:translate-x-1 transition-transform"><ExternalLink className="h-6 w-6" /></span>
            </a>
            <a
              href="https://www.pillyze.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-2xl shadow-lg flex items-center justify-between hover:scale-105 transition-transform duration-200 border-2 border-green-400 hover:border-green-700"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">💊</span>
                <span className="font-bold text-lg">나를 위한 영양제 추천받기</span>
              </div>
              <span className="group-hover:translate-x-1 transition-transform"><ExternalLink className="h-6 w-6" /></span>
            </a>
            <a
              href="https://www.rankingdak.com/mydiet/introduction"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-gradient-to-r from-orange-400 to-orange-600 text-white rounded-2xl shadow-lg flex items-center justify-between hover:scale-105 transition-transform duration-200 border-2 border-orange-400 hover:border-orange-700"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">🥗</span>
                <span className="font-bold text-lg">나에게 필요한 식단 추천받기</span>
              </div>
              <span className="group-hover:translate-x-1 transition-transform"><ExternalLink className="h-6 w-6" /></span>
            </a>
            <a
              href="https://www.woondoc.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-gradient-to-r from-purple-400 to-purple-600 text-white rounded-2xl shadow-lg flex items-center justify-between hover:scale-105 transition-transform duration-200 border-2 border-purple-400 hover:border-purple-700"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">🧑‍⚕️</span>
                <span className="font-bold text-lg">1:1 전문 코치 추천받기</span>
              </div>
              <span className="group-hover:translate-x-1 transition-transform"><ExternalLink className="h-6 w-6" /></span>
            </a>
          </div>
        </motion.div>

        {/* Detailed Analysis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: showResult ? 1 : 0, y: showResult ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-2 gap-8 mb-8"
        >
          {/* Characteristics */}
          <div className="card">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Star className="h-5 w-5 mr-2 text-yellow-500" />
              주요 특징
            </h3>
            <ul className="space-y-2">
              {healthType.characteristics.map((char, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span className="text-gray-700">{char}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Weaknesses */}
          <div className="card">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2 text-orange-500" />
              주의사항
            </h3>
            <ul className="space-y-2">
              {healthType.weaknesses.map((weakness, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span className="text-gray-700">{weakness}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Recommendations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: showResult ? 1 : 0, y: showResult ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="card mb-8"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <Activity className="h-5 w-5 mr-2 text-green-500" />
            추천 관리법
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {healthType.recommendations.map((rec, index) => (
              <div key={index} className="bg-green-50 p-4 rounded-lg">
                <span className="text-green-700 font-medium">{rec}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Nutrition & Health */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: showResult ? 1 : 0, y: showResult ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid md:grid-cols-3 gap-8 mb-8"
        >
          {/* Vitamins */}
          <div className="card">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Pill className="h-5 w-5 mr-2 text-purple-500" />
              추천 비타민
            </h3>
            <ul className="space-y-2">
              {healthType.vitamins.map((vitamin, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span className="text-gray-700">{vitamin}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Diet */}
          <div className="card">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Apple className="h-5 w-5 mr-2 text-green-500" />
              식단 추천
            </h3>
            <ul className="space-y-2">
              {healthType.diet.map((diet, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span className="text-gray-700">{diet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Risks */}
          <div className="card">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2 text-red-500" />
              주의 질병
            </h3>
            <ul className="space-y-2">
              {healthType.risks.map((risk, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span className="text-gray-700">{risk}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>



        {/* 디버깅 정보 (개발용) */}
        {debugInfo && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: showResult ? 1 : 0, y: showResult ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="card bg-yellow-50 border-yellow-200"
          >
            <h3 className="text-lg font-bold text-yellow-800 mb-4">🔍 디버깅 정보</h3>
            <div className="text-sm text-yellow-700 space-y-2">
              <p><strong>결과 코드:</strong> {debugInfo.resultCode}</p>
              <p><strong>답변 개수:</strong> {debugInfo.answers.filter((a: number) => a !== -1).length}/25</p>
              <details className="mt-4">
                <summary className="cursor-pointer font-medium">답변 상세 보기</summary>
                <div className="mt-2 p-3 bg-yellow-100 rounded text-xs">
                  <pre>{JSON.stringify(debugInfo.answers, null, 2)}</pre>
                </div>
              </details>
            </div>
          </motion.div>
        )}

        {/* Health Type Reference Table - 맨 아래로 이동 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: showResult ? 1 : 0, y: showResult ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="card"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4">건강 성향 유형 참고표</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-2 text-left">자리</th>
                  <th className="px-4 py-2 text-left">의미</th>
                  <th className="px-4 py-2 text-left">선택지1</th>
                  <th className="px-4 py-2 text-left">선택지2</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 font-medium">①</td>
                  <td className="px-4 py-2">에너지 스타일</td>
                  <td className="px-4 py-2">A = Active (활동형)</td>
                  <td className="px-4 py-2">C = Calm (휴식형)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-medium">②</td>
                  <td className="px-4 py-2">건강 중심</td>
                  <td className="px-4 py-2">B = Body (신체 중심)</td>
                  <td className="px-4 py-2">M = Mind (정신 중심)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-medium">③</td>
                  <td className="px-4 py-2">관리 방식</td>
                  <td className="px-4 py-2">T = Track (루틴형)</td>
                  <td className="px-4 py-2">F = Flow (감각형)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-medium">④</td>
                  <td className="px-4 py-2">회복 방식</td>
                  <td className="px-4 py-2">S = Self (스스로 회복)</td>
                  <td className="px-4 py-2">R = Relief (외부 의존)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p>&copy; 2024 A Better Tomorrow. All rights reserved.</p>
            <p className="text-sm mt-2">건강한 내일을 위한 첫걸음, 베투와 함께하세요.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 