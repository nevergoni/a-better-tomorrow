'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Heart, Share2, Facebook, Instagram, Twitter, MessageCircle, Copy, Check, Download, Camera } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { 
  FacebookShareButton, 
  TwitterShareButton, 
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon
} from 'react-share'

export default function SharePage() {
  const router = useRouter()
  const [hasShared, setHasShared] = useState(false)
  const [shareUrl] = useState('https://a-better-tomorrow.vercel.app')
  const [shareTitle] = useState('나의 건강 성향 테스트 결과를 확인해보세요! 🏥')
  const [shareText] = useState('베투(A Better Tomorrow)에서 내 건강 성향을 테스트해봤어요! 당신도 테스트해보세요!')
  const [copied, setCopied] = useState(false)
  const [showInstagramGuide, setShowInstagramGuide] = useState(false)
  const resultRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // 답변이 없으면 홈으로 리다이렉트
    const answers = localStorage.getItem('answers')
    if (!answers) {
      router.push('/')
      return
    }
  }, [router])

  const handleShare = (platform: string) => {
    console.log(`Shared on ${platform}`)
    setHasShared(true)
    
    // 2초 후 결과 페이지로 이동
    setTimeout(() => {
      router.push('/result')
    }, 2000)
  }

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(`${shareTitle}\n${shareText}\n${shareUrl}`)
      setCopied(true)
      setHasShared(true)
      setTimeout(() => {
        router.push('/result')
      }, 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
      alert('링크 복사에 실패했습니다. 다시 시도해주세요.')
    }
  }

  const handleInstagramShare = () => {
    setShowInstagramGuide(true)
    setHasShared(true)
    
    // 5초 후 결과 페이지로 이동 (가이드 읽을 시간)
    setTimeout(() => {
      router.push('/result')
    }, 5000)
  }

  const downloadScreenshot = async () => {
    if (!resultRef.current) return
    
    try {
      // html2canvas 라이브러리를 사용하여 스크린샷 생성
      const html2canvas = (await import('html2canvas')).default
      const canvas = await html2canvas(resultRef.current, {
        background: '#f8fafc',
        // @ts-expect-error
        scale: 2,
        useCORS: true
      })
      
      const link = document.createElement('a')
      link.download = '건강성향테스트결과.png'
      link.href = canvas.toDataURL()
      link.click()
    } catch (error) {
      console.error('스크린샷 생성 실패:', error)
      alert('스크린샷 생성에 실패했습니다. 수동으로 스크린샷을 찍어주세요.')
    }
  }

  const shareButtons = [
    {
      name: '페이스북',
      icon: Facebook,
      color: 'bg-blue-600 hover:bg-blue-700',
      shareButton: FacebookShareButton,
      shareIcon: FacebookIcon,
      hashtags: ['건강테스트', '베투', '건강성향']
    },
    {
      name: 'X(트위터)',
      icon: Twitter,
      color: 'bg-black hover:bg-gray-800',
      shareButton: TwitterShareButton,
      shareIcon: TwitterIcon,
      hashtags: ['건강테스트', '베투', '건강성향']
    },
    {
      name: '카카오톡',
      icon: MessageCircle,
      color: 'bg-yellow-400 hover:bg-yellow-500',
      shareButton: WhatsappShareButton,
      shareIcon: WhatsappIcon,
      hashtags: ['건강테스트', '베투', '건강성향']
    },
    {
      name: '링크 복사',
      icon: copied ? Check : Copy,
      color: copied ? 'bg-green-600' : 'bg-gray-600 hover:bg-gray-700',
      onClick: handleCopyLink,
      isCopy: true
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center py-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-primary-600" />
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
          className="card text-center"
        >
          <div className="mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Share2 className="h-10 w-10 text-primary-600" />
            </motion.div>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              결과지를 확인하려면
            </h2>
            <p className="text-xl text-gray-600 mb-2">
              SNS 공유하기를 필수로 진행해주세요
            </p>
            <p className="text-sm text-gray-500">
              친구들과 함께 건강한 내일을 만들어가요! 💪
            </p>
          </div>

          {/* Share Buttons */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {/* Instagram - 개선된 버전 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <button
                onClick={handleInstagramShare}
                className="w-full p-4 rounded-lg text-white font-semibold transition-all duration-200 hover:scale-105 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 flex items-center justify-center space-x-2"
              >
                <Instagram className="h-6 w-6" />
                <span>인스타그램 공유</span>
              </button>
            </motion.div>

            {/* Facebook */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <FacebookShareButton
                url={shareUrl}
                title={shareTitle}
                hashtag="#건강테스트 #베투 #건강성향"
                onClick={() => handleShare('페이스북')}
                className="w-full p-4 rounded-lg text-white font-semibold transition-all duration-200 hover:scale-105 bg-blue-600 hover:bg-blue-700"
              >
                <div className="flex items-center justify-center space-x-2">
                  <Facebook className="h-6 w-6" />
                  <span>페이스북</span>
                </div>
              </FacebookShareButton>
            </motion.div>

            {/* Twitter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <TwitterShareButton
                url={shareUrl}
                title={shareTitle}
                hashtags={['건강테스트', '베투', '건강성향']}
                onClick={() => handleShare('X(트위터)')}
                className="w-full p-4 rounded-lg text-white font-semibold transition-all duration-200 hover:scale-105 bg-black hover:bg-gray-800"
              >
                <div className="flex items-center justify-center space-x-2">
                  <Twitter className="h-6 w-6" />
                  <span>X(트위터)</span>
                </div>
              </TwitterShareButton>
            </motion.div>

            {/* KakaoTalk */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <WhatsappShareButton
                url={shareUrl}
                title={shareTitle}
                onClick={() => handleShare('카카오톡')}
                className="w-full p-4 rounded-lg text-white font-semibold transition-all duration-200 hover:scale-105 bg-yellow-400 hover:bg-yellow-500"
              >
                <div className="flex items-center justify-center space-x-2">
                  <MessageCircle className="h-6 w-6" />
                  <span>카카오톡</span>
                </div>
              </WhatsappShareButton>
            </motion.div>

            {/* Copy Link */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <button
                onClick={handleCopyLink}
                className={`w-full p-4 rounded-lg text-white font-semibold transition-all duration-200 hover:scale-105 ${
                  copied ? 'bg-green-600' : 'bg-gray-600 hover:bg-gray-700'
                }`}
              >
                <div className="flex items-center justify-center space-x-2">
                  {copied ? <Check className="h-6 w-6" /> : <Copy className="h-6 w-6" />}
                  <span>{copied ? '복사 완료!' : '링크 복사'}</span>
                </div>
              </button>
            </motion.div>

            {/* Screenshot Download */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <button
                onClick={downloadScreenshot}
                className="w-full p-4 rounded-lg text-white font-semibold transition-all duration-200 hover:scale-105 bg-purple-600 hover:bg-purple-700 flex items-center justify-center space-x-2"
              >
                <Download className="h-6 w-6" />
                <span>결과 이미지 다운로드</span>
              </button>
            </motion.div>
          </div>

          {/* Instagram Guide Modal */}
          {showInstagramGuide && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            >
              <div className="bg-white rounded-2xl p-6 max-w-md w-full">
                <div className="text-center">
                  <Instagram className="h-12 w-12 text-pink-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    인스타그램 공유 가이드
                  </h3>
                  <div className="text-left space-y-3 text-gray-700">
                    <div className="flex items-start space-x-3">
                      <span className="bg-pink-100 text-pink-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                      <p>위의 "결과 이미지 다운로드" 버튼을 클릭하세요</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="bg-pink-100 text-pink-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                      <p>다운로드된 이미지를 인스타그램 앱에서 업로드하세요</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="bg-pink-100 text-pink-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                      <p>해시태그 추가: #건강테스트 #베투 #건강성향</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowInstagramGuide(false)}
                    className="mt-6 bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition-colors"
                  >
                    확인
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Success Message */}
          {hasShared && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6"
            >
              <div className="flex items-center justify-center space-x-2 text-green-700">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="font-semibold">공유 완료! 결과 페이지로 이동합니다...</span>
              </div>
            </motion.div>
          )}

          {/* Info */}
          <div className="text-sm text-gray-500">
            <p>• 공유 후 자동으로 결과 페이지로 이동됩니다</p>
            <p>• 개인정보는 안전하게 보호됩니다</p>
            <p>• 공유는 필수입니다 - 결과 확인을 위해 꼭 공유해주세요!</p>
            <p>• 인스타그램 공유는 이미지 다운로드 후 수동 업로드가 필요합니다</p>
          </div>
        </motion.div>
      </main>

      {/* Hidden result preview for screenshot */}
      <div ref={resultRef} className="hidden">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
          <div className="text-center">
            <div className="text-4xl mb-4">🏥</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">건강 성향 테스트</h2>
            <p className="text-lg text-gray-600 mb-4">A Better Tomorrow</p>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg">
              <p className="text-gray-700">나의 건강 성향을 확인해보세요!</p>
              <p className="text-blue-600 font-medium mt-2">#건강테스트 #베투 #건강성향</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 