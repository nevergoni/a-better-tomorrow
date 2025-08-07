'use client'

import { Heart, ArrowRight, Users, Clock, Star, Shield } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  const features = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "25개 정밀 질문",
      description: "생활 습관에 대한 체계적인 분석"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "5분 소요",
      description: "빠르고 간편한 건강 성향 테스트"
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "6가지 유형",
      description: "개인별 맞춤 건강 성향 분석"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "개인정보 보호",
      description: "안전한 데이터 처리 및 보호"
    }
  ]

  const healthTypes = [
    { code: "ABTS", name: "압스형", desc: "활발한 신체 루틴러" },
    { code: "CMFR", name: "컴프형", desc: "조용한 감성 감각형" },
    { code: "AMFS", name: "암스형", desc: "활동형 멘탈 감각파" },
    { code: "CBTR", name: "커알형", desc: "신체 중심 루틴형" },
    { code: "ABFR", name: "압프형", desc: "근육파 감각형" },
    { code: "CMTS", name: "컴트형", desc: "조용히 루틴 지키는 멘탈러" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">A Better Tomorrow</h1>
            </div>
            <Link 
              href="/admin" 
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              관리자
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <Heart className="h-12 w-12 text-blue-600" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            건강한 내일을 위한
            <br />
            <span className="text-blue-600">첫걸음</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            베투(A Better Tomorrow)는 생활 습관에 대한 질문을 통해 
            현재 건강상태와 영양상태, 앞으로 올 수 있는 건강위기를 파악할 수 있는 검사입니다.
          </p>

          <div className="mb-8">
            <Link
              href="/personal-info"
              className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-200 hover:scale-105 shadow-lg"
            >
              <span>건강 성향 테스트 시작하기</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 text-blue-600">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Health Types Preview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            건강 성향 유형
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {healthTypes.map((type, index) => (
              <div
                key={type.code}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{type.name}</h3>
                  <span className="text-sm font-mono text-blue-600 bg-blue-50 px-2 py-1 rounded">
                    {type.code}
                  </span>
                </div>
                <p className="text-gray-600">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How it works */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            테스트 진행 과정
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600 font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">개인정보 입력</h3>
              <p className="text-gray-600">정확한 건강 분석을 위한 기본 정보를 입력해주세요</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600 font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">25개 질문 답변</h3>
              <p className="text-gray-600">생활 습관에 대한 질문에 솔직하게 답변해주세요</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600 font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">맞춤 결과 확인</h3>
              <p className="text-gray-600">개인별 건강 성향과 추천사항을 확인하세요</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            지금 바로 시작하세요!
          </h2>
          <p className="text-xl mb-8 opacity-90">
            당신만의 건강 성향을 알아보고 맞춤형 건강 관리법을 받아보세요
          </p>
          <Link
            href="/personal-info"
            className="inline-flex items-center space-x-2 bg-white text-blue-600 font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-200 hover:scale-105 shadow-lg"
          >
            <span>무료 테스트 시작하기</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p>&copy; 2024 A Better Tomorrow. All rights reserved.</p>
            <p className="text-sm mt-2">건강한 내일을 위한 첫걸음, 베투와 함께하세요.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 