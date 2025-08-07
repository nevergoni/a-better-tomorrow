export interface Question {
  id: number
  text: string
  scores: {
    A: number // Active (활동형)
    C: number // Calm (휴식형)
    B: number // Body (신체 중심)
    M: number // Mind (정신 중심)
    T: number // Track (루틴형)
    F: number // Flow (감각형)
    S: number // Self (스스로 회복)
    R: number // Relief (외부 의존)
  }
  answerOptions: string[]
}

export const questions: Question[] = [
  {
    id: 1,
    text: "아침 식사를 거르는 편이다.",
    scores: { A: -1, C: 1, B: -1, M: 0, T: -2, F: 1, S: 0, R: 0 },
    answerOptions: ["매일 거른다", "자주 거른다", "가끔 거른다", "거의 안 거른다"]
  },
  {
    id: 2,
    text: "하루에 물 2L 이상 마신다.",
    scores: { A: 0, C: 0, B: 1, M: 0, T: 1, F: 0, S: 0, R: 0 },
    answerOptions: ["항상 그렇다", "자주 그렇다", "가끔 그렇다", "거의 안 그렇다"]
  },
  {
    id: 3,
    text: "주 3회 이상 운동한다.",
    scores: { A: 1, C: -1, B: 1, M: 0, T: 0, F: 0, S: 0, R: 0 },
    answerOptions: ["매주 3회 이상", "주 1~2회", "월 1~2회", "거의 안 한다"]
  },
  {
    id: 4,
    text: "잠들기 전 스마트폰을 사용한다.",
    scores: { A: 0, C: 1, B: -1, M: -1, T: -1, F: 1, S: 0, R: 0 },
    answerOptions: ["매일 사용한다", "자주 사용한다", "가끔 사용한다", "거의 안 한다"]
  },
  {
    id: 5,
    text: "과일보다 단간식을 더 자주 먹는다.",
    scores: { A: 0, C: 1, B: -1, M: -1, T: -1, F: 1, S: 0, R: 0 },
    answerOptions: ["항상 그렇다", "자주 그렇다", "가끔 그렇다", "거의 안 그렇다"]
  },
  {
    id: 6,
    text: "평균 수면 시간이 6시간 미만이다.",
    scores: { A: 1, C: -1, B: -1, M: -1, T: -1, F: 0, S: 0, R: 0 },
    answerOptions: ["항상 6시간 미만", "자주 6시간 미만", "가끔 6시간 미만", "거의 6시간 이상"]
  },
  {
    id: 7,
    text: "스트레스를 많이 받으면 복통이 생긴다.",
    scores: { A: -1, C: 1, B: -1, M: 1, T: 0, F: 0, S: -1, R: 1 },
    answerOptions: ["항상 그렇다", "자주 그렇다", "가끔 그렇다", "거의 없다"]
  },
  {
    id: 8,
    text: "커피를 하루 3잔 이상 마신다.",
    scores: { A: 1, C: -1, B: 0, M: 1, T: 0, F: 1, S: 0, R: 0 },
    answerOptions: ["매일 3잔 이상", "주 3~6회", "주 1~2회", "거의 안 마신다"]
  },
  {
    id: 9,
    text: "등산이나 야외 활동을 좋아한다.",
    scores: { A: 1, C: -1, B: 0, M: 0, T: 0, F: 1, S: 0, R: 0 },
    answerOptions: ["매우 좋아한다", "좋아하는 편이다", "보통이다", "별로 안 좋아한다"]
  },
  {
    id: 10,
    text: "혈압/혈당 수치를 정기적으로 체크한다.",
    scores: { A: 0, C: 0, B: 1, M: 0, T: 1, F: -1, S: 0, R: 0 },
    answerOptions: ["정기적으로 체크한다", "가끔 체크한다", "거의 안 한다", "전혀 안 한다"]
  },
  {
    id: 11,
    text: "채소보다 고기를 더 선호한다.",
    scores: { A: 0, C: 0, B: 0, M: 0, T: 0, F: 0, S: 0, R: 0 },
    answerOptions: ["항상 고기", "고기 쪽", "비슷하다", "채소 쪽"]
  },
  {
    id: 12,
    text: "화장실에서 핸드폰을 사용한다.",
    scores: { A: 0, C: 1, B: -1, M: 0, T: -1, F: 1, S: 0, R: 0 },
    answerOptions: ["항상 사용한다", "자주 사용한다", "가끔 사용한다", "거의 안 한다"]
  },
  {
    id: 13,
    text: "비타민이나 영양제를 꾸준히 복용한다.",
    scores: { A: 0, C: 0, B: 0, M: 0, T: 1, F: 0, S: 0, R: 0 },
    answerOptions: ["매일 복용한다", "주 3~6회", "가끔 복용한다", "거의 안 한다"]
  },
  {
    id: 14,
    text: "몸이 뻐근할 때 스트레칭을 한다.",
    scores: { A: 0, C: 0, B: 0, M: 0, T: 0, F: 0, S: 0, R: 0 },
    answerOptions: ["항상 한다", "자주 한다", "가끔 한다", "거의 안 한다"]
  },
  {
    id: 15,
    text: "음식을 꼭꼭 씹어 먹는 편이다.",
    scores: { A: 0, C: 0, B: 0, M: 0, T: 0, F: 0, S: 0, R: 0 },
    answerOptions: ["항상 그렇다", "자주 그렇다", "가끔 그렇다", "거의 안 그렇다"]
  },
  {
    id: 16,
    text: "아침에 일어나면 허리가 아프다.",
    scores: { A: -1, C: 1, B: -1, M: 0, T: 0, F: 0, S: -1, R: 1 },
    answerOptions: ["매일 아프다", "자주 아프다", "가끔 아프다", "거의 안 아프다"]
  },
  {
    id: 17,
    text: "식사 후 바로 눕는 습관이 있다.",
    scores: { A: -1, C: 1, B: -1, M: 0, T: -1, F: 1, S: 0, R: 0 },
    answerOptions: ["항상 눕는다", "자주 눕는다", "가끔 눕는다", "거의 안 눕는다"]
  },
  {
    id: 18,
    text: "주말에 낮 12시 이후에 기상한다.",
    scores: { A: -1, C: 1, B: 0, M: 0, T: -1, F: 1, S: 0, R: 0 },
    answerOptions: ["항상 그렇다", "자주 그렇다", "가끔 그렇다", "거의 안 그렇다"]
  },
  {
    id: 19,
    text: "매일 10분 이상 명상한다.",
    scores: { A: -1, C: 1, B: 0, M: 1, T: 0, F: 0, S: 0, R: 0 },
    answerOptions: ["매일 한다", "주 3~6회", "가끔 한다", "거의 안 한다"]
  },
  {
    id: 20,
    text: "체중 변화에 민감하게 반응한다.",
    scores: { A: 0, C: 0, B: 0, M: 0, T: 0, F: 0, S: 0, R: 0 },
    answerOptions: ["매우 민감하다", "민감한 편이다", "보통이다", "별로 신경 안 쓴다"]
  },
  {
    id: 21,
    text: "규칙적인 식사 시간을 지킨다.",
    scores: { A: 0, C: 0, B: 0, M: 0, T: 1, F: -1, S: 0, R: 0 },
    answerOptions: ["항상 지킨다", "자주 지킨다", "가끔 지킨다", "거의 안 지킨다"]
  },
  {
    id: 22,
    text: "스트레스 해소를 위해 술을 마신다.",
    scores: { A: 0, C: 1, B: -1, M: -1, T: -1, F: 1, S: -1, R: 1 },
    answerOptions: ["항상 마신다", "자주 마신다", "가끔 마신다", "거의 안 마신다"]
  },
  {
    id: 23,
    text: "건강 검진을 정기적으로 받는다.",
    scores: { A: 0, C: 0, B: 0, M: 0, T: 1, F: -1, S: 0, R: 0 },
    answerOptions: ["정기적으로 받는다", "가끔 받는다", "거의 안 받는다", "전혀 안 받는다"]
  },
  {
    id: 24,
    text: "새로운 운동이나 다이어트를 시도한다.",
    scores: { A: 1, C: -1, B: 0, M: 0, T: 0, F: 1, S: 0, R: 0 },
    answerOptions: ["항상 시도한다", "자주 시도한다", "가끔 시도한다", "거의 안 한다"]
  },
  {
    id: 25,
    text: "건강 관련 정보를 자주 찾아본다.",
    scores: { A: 0, C: 0, B: 0, M: 0, T: 0, F: 0, S: 0, R: 0 },
    answerOptions: ["항상 찾아본다", "자주 찾아본다", "가끔 찾아본다", "거의 안 찾아본다"]
  }
] 