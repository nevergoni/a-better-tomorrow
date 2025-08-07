# A Better Tomorrow (베투) - 건강 성향 테스트

건강한 내일을 위한 첫걸음, 베투와 함께하세요! 🏥

## 📋 프로젝트 소개

'A Better Tomorrow(베투)'는 우리들의 생활 습관에 대한 몇가지 질문을 통해 현재 건강상태 및 영양상태, 앞으로 올 수 있는 건강위기 등을 파악할 수 있는 검사입니다.

베투는 우리들의 건강성향 분석결과를 기반으로 대표 유형 및 전체 항목에 대한 정도별 분석과 관리법을 제공하며, 우리의 맞춤형 솔루션을 받아 볼 수 있습니다.

## ✨ 주요 기능

- **25개 건강 질문**: 생활 습관에 대한 정밀한 분석
- **개인정보 수집**: 정확한 건강 분석을 위한 기본 정보 입력
- **MBTI 스타일 결과**: 4가지 차원의 건강 성향 분석
- **맞춤형 추천**: 개인별 건강 관리법과 영양 추천
- **SNS 공유**: 결과 공유를 통한 바이럴 마케팅
- **광고 연동**: 관련 건강 서비스로의 유입

## 🎯 건강 성향 유형

### 분석 기준
1. **에너지 스타일**: A(활동형) vs C(휴식형)
2. **건강 중심**: B(신체 중심) vs M(정신 중심)
3. **관리 방식**: T(루틴형) vs F(감각형)
4. **회복 방식**: S(스스로 회복) vs R(외부 의존)

### 결과 유형 예시
- **ABTS (압스)**: 활발한 신체 루틴러 + 자가 회복
- **CMFR (컴프)**: 조용한 감성 감각형 + 외부 도움
- **AMFS (암스)**: 활동형 멘탈 감각파 + 자가 관리
- **CBTR (커알)**: 신체 중심 루틴형 + 병원 의존
- **ABFR (압프)**: 근육파 + 감각형 + 도움받는 스타일
- **CMTS (컴트)**: 조용히 루틴 지키는 멘탈러

## 🚀 기술 스택

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Sharing**: React Share
- **Database**: MongoDB (선택사항)
- **Deployment**: Vercel

## 📦 설치 및 실행

### 1. 프로젝트 클론
```bash
git clone <repository-url>
cd web
```

### 2. 의존성 설치
```bash
npm install
```

### 3. 환경변수 설정
```bash
# .env.local 파일 생성
cp .env.example .env.local

# MongoDB 연결 문자열 설정 (선택사항)
# .env.local 파일에서 MONGODB_URI를 실제 연결 문자열로 변경
```

### 4. 개발 서버 실행
```bash
npm run dev
```

### 5. 브라우저에서 확인
```
http://localhost:3000
```

## 🌐 배포

### Vercel 배포 (권장)

1. **Vercel 계정 생성**: [vercel.com](https://vercel.com)에서 계정 생성

2. **GitHub 연동**: GitHub 저장소와 Vercel 연동

3. **환경변수 설정**: Vercel 대시보드에서 환경변수 설정
   - `MONGODB_URI`: MongoDB 연결 문자열

4. **자동 배포**: 코드 푸시 시 자동으로 배포됨

5. **도메인 설정**: 커스텀 도메인 설정 가능

### 수동 배포
```bash
# 빌드
npm run build

# Vercel CLI 설치
npm i -g vercel

# 배포
vercel
```

## 📱 페이지 구성

1. **홈페이지** (`/`): 프로젝트 소개 및 테스트 시작
2. **개인정보 입력** (`/personal-info`): 기본 정보 및 건강 이력 수집
3. **질문 페이지** (`/questions`): 25개 건강 관련 질문
4. **공유 페이지** (`/share`): SNS 공유를 통한 결과 확인
5. **결과 페이지** (`/result`): 개인별 건강 성향 분석 결과
6. **관리자 페이지** (`/admin`): 수집된 데이터 관리

## 🎨 디자인 시스템

- **색상**: Primary Blue (#0ea5e9), Secondary Gray (#64748b)
- **폰트**: Pretendard (한글 최적화)
- **아이콘**: Lucide React
- **애니메이션**: Framer Motion

## 📊 분석 알고리즘

각 질문은 4점 척도로 응답하며, 답변에 따라 8가지 차원(A, C, B, M, T, F, S, R)에 점수가 배분됩니다.

- **매우 그렇다**: 4점
- **그렇다**: 3점  
- **아니다**: 2점
- **매우 아니다**: 1점

최종 점수가 가장 높은 조합이 사용자의 건강 성향 유형으로 결정됩니다.

## 🔗 연동 서비스

- **영양제 추천**: [Pillyze](https://www.pillyze.com/)
- **식단 추천**: [Rankingdak](https://www.rankingdak.com/mydiet/introduction)
- **전문 코치**: [WoonDoc](https://www.woondoc.com/)

## 📈 마케팅 전략

1. **바이럴 마케팅**: SNS 공유를 통한 자연스러운 확산
2. **개인화**: 개인별 맞춤 결과 제공
3. **관련 서비스 연동**: 건강 관련 서비스로의 자연스러운 유입
4. **참여자 수 표시**: 신뢰도 향상을 위한 통계 표시

## 🛡️ 개인정보 보호

- 개인정보는 로컬 스토리지에만 저장 (MongoDB 미연결 시)
- 서버로 전송되지 않음 (MongoDB 미연결 시)
- 개인정보 활용 동의 필수
- 결과 공유 시 개인정보 제외

## 🔧 개발 가이드

### 프로젝트 구조
```
web/
├── app/
│   ├── admin/          # 관리자 페이지
│   ├── api/            # API 라우트
│   ├── data/           # 데이터 파일
│   ├── personal-info/  # 개인정보 입력
│   ├── questions/      # 질문 페이지
│   ├── result/         # 결과 페이지
│   ├── share/          # 공유 페이지
│   ├── globals.css     # 전역 스타일
│   ├── layout.tsx      # 레이아웃
│   └── page.tsx        # 홈페이지
├── public/             # 정적 파일
├── package.json        # 의존성
├── tailwind.config.js  # Tailwind 설정
└── next.config.js      # Next.js 설정
```

### 주요 파일 설명
- `app/data/questions.ts`: 25개 건강 질문 및 점수 계산
- `app/data/results.ts`: 6가지 건강 성향 유형 정의
- `app/api/save-personal-info/route.ts`: 개인정보 저장 API
- `app/admin/page.tsx`: 관리자 데이터 조회 페이지

## 📄 라이선스

© 2024 A Better Tomorrow. All rights reserved.

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 문의

프로젝트에 대한 문의사항이 있으시면 언제든 연락주세요.

---

**건강한 내일을 위한 첫걸음, 베투와 함께하세요!** 💪 