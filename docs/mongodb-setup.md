# MongoDB Atlas 설정 가이드

## 1. MongoDB Atlas 계정 생성

1. [MongoDB Atlas](https://www.mongodb.com/atlas)에 접속
2. "Try Free" 클릭하여 무료 계정 생성
3. 이메일과 비밀번호로 가입

## 2. 클러스터 생성

1. **Build a Database** 클릭
2. **FREE** 플랜 선택 (M0 Sandbox)
3. **Cloud Provider & Region** 선택 (AWS, Google Cloud, Azure 중 선택)
4. **Cluster Name** 입력 (예: betu-cluster)
5. **Create** 클릭

## 3. 데이터베이스 사용자 생성

1. **Database Access** 메뉴 클릭
2. **Add New Database User** 클릭
3. **Username** 입력 (예: betu-user)
4. **Password** 생성 (안전한 비밀번호 사용)
5. **Database User Privileges** → **Read and write to any database** 선택
6. **Add User** 클릭

## 4. 네트워크 액세스 설정

1. **Network Access** 메뉴 클릭
2. **Add IP Address** 클릭
3. **Allow Access from Anywhere** 선택 (0.0.0.0/0)
4. **Confirm** 클릭

## 5. 연결 문자열 생성

1. **Database** 메뉴 클릭
2. **Connect** 버튼 클릭
3. **Connect your application** 선택
4. **Driver** → **Node.js** 선택
5. **Version** → **5.0 or later** 선택
6. 연결 문자열 복사

## 6. 환경변수 설정

### 로컬 개발 환경
```bash
# .env.local 파일 생성
MONGODB_URI=mongodb+srv://betu-user:your-password@betu-cluster.mongodb.net/betu?retryWrites=true&w=majority
```

### Vercel 배포 환경
1. Vercel 대시보드 접속
2. 프로젝트 선택
3. **Settings** → **Environment Variables**
4. **Add** 클릭
5. **Name**: `MONGODB_URI`
6. **Value**: MongoDB 연결 문자열 입력
7. **Save** 클릭

## 7. 데이터베이스 및 컬렉션 생성

MongoDB Atlas에서 자동으로 생성되지만, 수동으로 설정하려면:

1. **Browse Collections** 클릭
2. **Create Database** 클릭
3. **Database Name**: `betu`
4. **Collection Name**: `personalInfos`
5. **Create** 클릭

## 8. 연결 테스트

프로젝트에서 MongoDB 연결이 정상적으로 작동하는지 확인:

1. 개발 서버 재시작: `npm run dev`
2. 개인정보 입력 페이지에서 데이터 저장 테스트
3. 관리자 페이지에서 데이터 조회 테스트

## 문제 해결

### 연결 오류가 발생하는 경우:
1. 네트워크 액세스 설정 확인
2. 데이터베이스 사용자 권한 확인
3. 연결 문자열 형식 확인
4. 환경변수 설정 확인

### 로컬에서만 작동하는 경우:
- MongoDB 연결 실패 시 localStorage로 자동 폴백됩니다.
- 관리자 페이지에서 "MongoDB가 연결되지 않아 데이터를 불러올 수 없습니다." 메시지가 표시됩니다. 