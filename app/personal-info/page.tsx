'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, ArrowLeft, ArrowRight, User, Calendar, Phone, Pill, Activity, AlertTriangle, X } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface PersonalInfo {
  name: string
  birthDate: string
  phone: string
  medications: string
  medicalHistory: string
  currentConditions: string
}

export default function PersonalInfoPage() {
  const router = useRouter()
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    name: '',
    birthDate: '',
    phone: '',
    medications: '',
    medicalHistory: '',
    currentConditions: ''
  })
  const [privacyAgreement, setPrivacyAgreement] = useState(true)
  const [showPrivacyModal, setShowPrivacyModal] = useState(false)

  const handleInputChange = (field: keyof PersonalInfo, value: string) => {
    setPersonalInfo(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!privacyAgreement) {
      alert('개인정보 활용 동의에 체크해주세요.')
      return
    }
    
    try {
      // API로 개인정보 저장
      const response = await fetch('/api/save-personal-info', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(personalInfo)
      })

      const result = await response.json()

      if (result.success) {
        // 성공 시 localStorage에도 저장 (기존 기능 유지)
        localStorage.setItem('personalInfo', JSON.stringify(personalInfo))
        
        // 저장 방식에 따른 메시지 표시
        if (result.savedToDB) {
          alert('개인정보가 성공적으로 저장되었습니다!')
        } else {
          alert('개인정보가 로컬에 저장되었습니다. (MongoDB 연결 없음)')
        }
        
        router.push('/questions')
      } else {
        alert(result.error || '저장 중 오류가 발생했습니다.')
      }
    } catch (error) {
      console.error('API 호출 중 오류:', error)
      // API 호출 실패 시에도 localStorage로 진행
      localStorage.setItem('personalInfo', JSON.stringify(personalInfo))
      alert('네트워크 오류로 로컬에 저장되었습니다. 테스트를 계속 진행합니다.')
      router.push('/questions')
    }
  }

  const isFormValid = () => {
    return personalInfo.name && personalInfo.birthDate && personalInfo.phone && privacyAgreement
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
              <ArrowLeft className="h-5 w-5" />
              <span>돌아가기</span>
            </Link>
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">A Better Tomorrow</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg border border-gray-100 p-6"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">개인정보 입력</h2>
            <p className="text-gray-600">정확한 건강 분석을 위해 기본 정보를 입력해주세요</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 기본 정보 */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <User className="h-5 w-5 mr-2" />
                기본 정보
              </h3>
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  이름 *
                </label>
                <input
                  type="text"
                  id="name"
                  value={personalInfo.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="홍길동"
                  required
                />
              </div>

              <div>
                <label htmlFor="birthDate" className="block text-sm font-medium text-gray-700 mb-2">
                  생년월일 *
                </label>
                <input
                  type="date"
                  id="birthDate"
                  value={personalInfo.birthDate}
                  onChange={(e) => handleInputChange('birthDate', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  연락처 *
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={personalInfo.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="010-1234-5678"
                  required
                />
              </div>
            </div>

            {/* 건강 정보 */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <Activity className="h-5 w-5 mr-2" />
                건강 정보
              </h3>
              
              <div>
                <label htmlFor="medications" className="block text-sm font-medium text-gray-700 mb-2">
                  평소 복용 중인 약
                </label>
                <input
                  type="text"
                  id="medications"
                  value={personalInfo.medications}
                  onChange={(e) => handleInputChange('medications', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="*예시 - 타이레놀 복용중"
                  onFocus={(e) => {
                    if (e.target.placeholder.includes('*예시')) {
                      e.target.placeholder = ''
                    }
                  }}
                  onBlur={(e) => {
                    if (!e.target.value) {
                      e.target.placeholder = '*예시 - 타이레놀 복용중'
                    }
                  }}
                />
              </div>

              <div>
                <label htmlFor="medicalHistory" className="block text-sm font-medium text-gray-700 mb-2">
                  최근 5년 이내 큰 질병 또는 입원 경력
                </label>
                <textarea
                  id="medicalHistory"
                  value={personalInfo.medicalHistory}
                  onChange={(e) => handleInputChange('medicalHistory', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  rows={3}
                  placeholder="입원 경험이나 큰 질병이 있다면 입력해주세요"
                />
              </div>

              <div>
                <label htmlFor="currentConditions" className="block text-sm font-medium text-gray-700 mb-2">
                  현재 투병 중인 질병
                </label>
                <textarea
                  id="currentConditions"
                  value={personalInfo.currentConditions}
                  onChange={(e) => handleInputChange('currentConditions', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  rows={3}
                  placeholder="현재 치료 중인 질병이 있다면 입력해주세요"
                />
              </div>
            </div>

            {/* 개인정보 동의 */}
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="privacyAgreement"
                  checked={privacyAgreement}
                  onChange={(e) => setPrivacyAgreement(e.target.checked)}
                  className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="privacyAgreement" className="text-sm text-gray-700">
                  개인정보 활용에 동의합니다. 입력하신 정보는 건강 성향 분석 목적으로만 사용되며, 
                  안전하게 보호됩니다.{' '}
                  <button
                    type="button"
                    onClick={() => setShowPrivacyModal(true)}
                    className="text-blue-600 hover:text-blue-800 underline font-medium"
                  >
                    (보기)
                  </button>
                </label>
              </div>
            </div>

            {/* 제출 버튼 */}
            <div className="flex justify-center pt-6">
              <button
                type="submit"
                disabled={!isFormValid()}
                className={`bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center space-x-2 text-lg px-8 py-4 ${
                  !isFormValid() ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <span>테스트 진행하기</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </form>
        </motion.div>
      </main>

      {/* 개인정보처리방침 모달 */}
      {showPrivacyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">개인정보처리방침</h2>
              <button
                onClick={() => setShowPrivacyModal(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="p-6 space-y-6 text-sm leading-relaxed">
              <div>
                <p className="mb-4">
                  본 사이트(이하 "주식회사 하늘"라 한다)는 고객님의 개인정보를 중요시하며, 
                  "정보통신망 이용촉진 및 정보보호"에 관한 법률을 준수하고 있습니다.
                </p>
                <p className="mb-4">
                  회사는 개인정보취급방침을 통하여 고객님께서 제공하시는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며, 
                  개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.
                </p>
                <p className="mb-4">
                  회사는 개인정보취급방침을 개정하는 경우 웹사이트 공지사항(또는 개별공지)을 통하여 공지할 것입니다.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">■ 수집하는 개인정보 항목</h3>
                <p className="mb-3">
                  회사는 회원가입, 상담, 서비스 신청 등등을 위해 아래와 같은 개인정보를 수집하고 있습니다.
                </p>
                <p className="mb-2">
                  ο 수집항목 : 이름, 생년월일, 성별, 로그인ID, 비밀번호, 비밀번호 질문과 답변, 이메일, 
                  서비스 이용기록, 접속 로그, 쿠키, 접속 IP 정보
                </p>
                <p>
                  ο 개인정보 수집방법 : 홈페이지(회원가입,게시판)
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">■ 개인정보의 수집 및 이용목적</h3>
                <p className="mb-3">회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.</p>
                <ul className="space-y-1 list-disc list-inside">
                  <li>ο 서비스 제공에 관한 계약 이행</li>
                  <li>ο 회원 관리 – 회원제 서비스 이용에 따른 본인확인, 개인 식별, 불량회원의 부정 이용 방지와 비인가 사용 방지, 가입 의사 확인, 연령확인, 만14세 미만 아동 개인정보 수집 시 법정 대리인 동의여부 확인</li>
                  <li>ο 보험 점검 서비스 안내</li>
                  <li>ο 마케팅 및 광고에 활용</li>
                  <li>ο 접속 빈도 파악 또는 회원의 서비스 이용에 대한 통계</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">■ 개인정보의 보유 및 이용기간</h3>
                <p className="mb-4">
                  원칙적으로, 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 
                  단, 관계법령의 규정에 의하여 보존할 필요가 있는 경우 회사는 아래와 같이 관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다.
                </p>
                
                <div className="space-y-3">
                  <div>
                    <p className="font-medium">보존 항목 : 로그인ID, 결제기록</p>
                    <p>보존 근거 : 신용정보의 이용 및 보호에 관한 법률</p>
                    <p>보존 기간 : 3년</p>
                  </div>
                  
                  <div>
                    <p className="font-medium">표시/광고에 관한 기록 : 6개월</p>
                    <p>근거 : 전자상거래등에서의 소비자보호에 관한 법률</p>
                  </div>
                  
                  <div>
                    <p className="font-medium">계약 또는 청약철회 등에 관한 기록 : 5년</p>
                    <p>근거 : 전자상거래등에서의 소비자보호에 관한 법률</p>
                  </div>
                  
                  <div>
                    <p className="font-medium">대금결제 및 재화 등의 공급에 관한 기록 : 5년</p>
                    <p>근거 : 전자상거래등에서의 소비자보호에 관한 법률</p>
                  </div>
                  
                  <div>
                    <p className="font-medium">소비자의 불만 또는 분쟁처리에 관한 기록 : 3년</p>
                    <p>근거 : 전자상거래등에서의 소비자보호에 관한 법률</p>
                  </div>
                  
                  <div>
                    <p className="font-medium">신용정보의 수집/처리 및 이용 등에 관한 기록 : 3년</p>
                    <p>근거 : 신용정보의 이용 및 보호에 관한 법률</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 p-6 flex justify-center">
              <button
                onClick={() => setShowPrivacyModal(false)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
              >
                확인
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
} 