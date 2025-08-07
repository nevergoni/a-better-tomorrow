# Vercel 배포 가이드

## 1. Vercel 계정 생성

1. [Vercel](https://vercel.com)에 접속
2. **Sign Up** 클릭
3. GitHub, GitLab, Bitbucket 중 선택하여 계정 생성

## 2. GitHub 저장소 준비

### 새 저장소 생성
```bash
# Git 초기화
git init

# 파일 추가
git add .

# 첫 커밋
git commit -m "Initial commit"

# GitHub에 푸시
git remote add origin https://github.com/your-username/your-repo-name.git
git push -u origin main
```

### 기존 저장소 사용
```bash
# 원격 저장소 추가
git remote add origin https://github.com/your-username/your-repo-name.git
git push -u origin main
```

## 3. Vercel에서 프로젝트 배포

1. **Vercel 대시보드** 접속
2. **New Project** 클릭
3. **Import Git Repository** 선택
4. GitHub 저장소 선택
5. **Import** 클릭

## 4. 프로젝트 설정

### 기본 설정
- **Framework Preset**: Next.js
- **Root Directory**: `./` (기본값)
- **Build Command**: `npm run build` (기본값)
- **Output Directory**: `.next` (기본값)
- **Install Command**: `npm install` (기본값)

### 환경변수 설정
1. **Environment Variables** 섹션에서
2. **Add** 클릭
3. **Name**: `MONGODB_URI`
4. **Value**: MongoDB 연결 문자열
5. **Environment**: Production, Preview, Development 모두 선택
6. **Save** 클릭

## 5. 배포 실행

1. **Deploy** 버튼 클릭
2. 배포 진행 상황 모니터링
3. 배포 완료 후 제공되는 URL 확인

## 6. 커스텀 도메인 설정 (선택사항)

1. **Settings** → **Domains** 클릭
2. **Add Domain** 클릭
3. 도메인 이름 입력
4. DNS 설정 안내에 따라 도메인 제공업체에서 설정
5. **Verify** 클릭

## 7. 자동 배포 설정

- GitHub 저장소와 연동되어 자동으로 배포됩니다
- `main` 브랜치에 푸시할 때마다 자동 배포
- 다른 브랜치의 경우 Preview 배포

## 8. 환경별 설정

### Production 환경
- 메인 브랜치에서 배포
- 실제 사용자들이 접속하는 환경

### Preview 환경
- 다른 브랜치에서 배포
- 테스트용 환경

### Development 환경
- 로컬 개발 환경

## 9. 배포 후 확인사항

1. **홈페이지** 접속 확인
2. **개인정보 입력** 테스트
3. **질문 페이지** 동작 확인
4. **결과 페이지** 표시 확인
5. **관리자 페이지** 접속 확인

## 10. 문제 해결

### 빌드 오류
```bash
# 로컬에서 빌드 테스트
npm run build

# 오류 확인 후 수정
```

### 환경변수 오류
- Vercel 대시보드에서 환경변수 설정 확인
- MongoDB 연결 문자열 형식 확인

### 런타임 오류
- Vercel 대시보드의 **Functions** 탭에서 로그 확인
- 개발자 도구에서 콘솔 오류 확인

## 11. 성능 최적화

### 이미지 최적화
```javascript
// next.config.js
module.exports = {
  images: {
    domains: ['your-domain.com'],
    formats: ['image/webp', 'image/avif'],
  },
}
```

### 번들 크기 최적화
```javascript
// next.config.js
module.exports = {
  experimental: {
    optimizeCss: true,
  },
}
```

## 12. 모니터링

### Vercel Analytics
1. **Analytics** 탭에서 사용자 통계 확인
2. 페이지뷰, 방문자 수 등 모니터링

### Error Tracking
1. **Functions** 탭에서 서버 오류 확인
2. **Logs** 탭에서 상세 로그 확인

## 13. 백업 및 복구

### 데이터 백업
- MongoDB Atlas에서 데이터 백업 설정
- 정기적인 데이터베이스 백업

### 코드 백업
- GitHub에 모든 코드 저장
- 태그를 사용한 버전 관리

## 14. 보안 설정

### 환경변수 보안
- 민감한 정보는 환경변수로 관리
- `.env.local` 파일을 `.gitignore`에 추가

### HTTPS 설정
- Vercel에서 자동으로 HTTPS 제공
- 커스텀 도메인에서도 HTTPS 자동 적용 