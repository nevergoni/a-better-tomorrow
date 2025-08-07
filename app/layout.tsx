import type { Metadata, Viewport } from 'next'
import './globals.css'
import GoogleAnalytics from './components/GoogleAnalytics'

export const metadata: Metadata = {
  title: 'A Better Tomorrow - 건강 성향 테스트',
  description: '베투(A Better Tomorrow)는 생활 습관에 대한 질문을 통해 현재 건강상태와 영양상태, 앞으로 올 수 있는 건강위기를 파악할 수 있는 검사입니다.',
  keywords: '건강테스트, 건강성향, 영양상태, 생활습관, 건강관리',
  authors: [{ name: 'A Better Tomorrow Team' }],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col">
        <div className="flex-1 flex flex-col">
          {children}
        </div>
        <footer className="w-full bg-gray-50 border-t border-gray-200 py-4 text-center text-xs text-gray-500">
          Copyright 2025.07.28(주식회사 하늘 / 대표 유 길곤 ) all rights reserved.
        </footer>
        {/* Google Analytics - 환경변수에서 GA ID를 가져옵니다 */}
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}
      </body>
    </html>
  )
} 