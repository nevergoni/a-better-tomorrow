'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Heart, ArrowLeft, Download, RefreshCw, Eye, EyeOff } from 'lucide-react'
import Link from 'next/link'

interface PersonalInfo {
  _id: string
  name: string
  birthDate: string
  phone: string
  medications: string
  medicalHistory: string
  currentConditions: string
  createdAt: string
  ipAddress: string
  userAgent: string
}

export default function AdminPage() {
  const [data, setData] = useState<PersonalInfo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [showSensitiveData, setShowSensitiveData] = useState(false)

  const fetchData = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/save-personal-info')
      const result = await response.json()

      if (result.success) {
        setData(result.data)
        if (result.source === 'localStorage') {
          setError(result.message || 'MongoDB가 연결되지 않아 데이터를 불러올 수 없습니다.')
        } else {
          setError('')
        }
      } else {
        setError(result.error || '데이터를 불러오는데 실패했습니다.')
      }
    } catch (error) {
      console.error('데이터 조회 중 오류:', error)
      setError('네트워크 오류가 발생했습니다.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const downloadCSV = () => {
    const headers = ['이름', '생년월일', '연락처', '복용약', '의료이력', '현재질병', '등록일시', 'IP주소']
    const csvContent = [
      headers.join(','),
      ...data.map(item => [
        item.name,
        item.birthDate,
        showSensitiveData ? item.phone : '***-****-' + item.phone.slice(-4),
        item.medications,
        item.medicalHistory,
        item.currentConditions,
        new Date(item.createdAt).toLocaleString('ko-KR'),
        item.ipAddress
      ].join(','))
    ].join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    const url = URL.createObjectURL(blob)
    link.setAttribute('href', url)
    link.setAttribute('download', `personal_info_${new Date().toISOString().split('T')[0]}.csv`)
    link.style.visibility = 'hidden'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
              <ArrowLeft className="h-5 w-5" />
              <span>돌아가기</span>
            </Link>
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">관리자 페이지</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg border border-gray-100 p-6"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">개인정보 데이터 관리</h2>
            <div className="flex space-x-2">
              <button
                onClick={() => setShowSensitiveData(!showSensitiveData)}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                {showSensitiveData ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                <span>{showSensitiveData ? '민감정보 숨기기' : '민감정보 보기'}</span>
              </button>
              <button
                onClick={fetchData}
                disabled={loading}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-100 hover:bg-blue-200 rounded-lg transition-colors"
              >
                <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
                <span>새로고침</span>
              </button>
              <button
                onClick={downloadCSV}
                className="flex items-center space-x-2 px-4 py-2 bg-green-100 hover:bg-green-200 rounded-lg transition-colors"
              >
                <Download className="h-4 w-4" />
                <span>CSV 다운로드</span>
              </button>
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <p className="text-red-700">{error}</p>
            </div>
          )}

          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600">데이터를 불러오는 중...</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-2 text-left">이름</th>
                    <th className="px-4 py-2 text-left">생년월일</th>
                    <th className="px-4 py-2 text-left">연락처</th>
                    <th className="px-4 py-2 text-left">복용약</th>
                    <th className="px-4 py-2 text-left">의료이력</th>
                    <th className="px-4 py-2 text-left">현재질병</th>
                    <th className="px-4 py-2 text-left">등록일시</th>
                    <th className="px-4 py-2 text-left">IP주소</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={item._id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-4 py-2 font-medium">{item.name}</td>
                      <td className="px-4 py-2">{item.birthDate}</td>
                      <td className="px-4 py-2">
                        {showSensitiveData ? item.phone : '***-****-' + item.phone.slice(-4)}
                      </td>
                      <td className="px-4 py-2 max-w-xs truncate" title={item.medications}>
                        {item.medications || '-'}
                      </td>
                      <td className="px-4 py-2 max-w-xs truncate" title={item.medicalHistory}>
                        {item.medicalHistory || '-'}
                      </td>
                      <td className="px-4 py-2 max-w-xs truncate" title={item.currentConditions}>
                        {item.currentConditions || '-'}
                      </td>
                      <td className="px-4 py-2">
                        {new Date(item.createdAt).toLocaleString('ko-KR')}
                      </td>
                      <td className="px-4 py-2 text-xs">{item.ipAddress}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <div className="mt-6 text-center text-gray-600">
            <p>총 {data.length}개의 데이터가 저장되어 있습니다.</p>
          </div>
        </motion.div>
      </main>
    </div>
  )
} 