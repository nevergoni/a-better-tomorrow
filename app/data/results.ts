import { questions } from './questions'

export interface HealthType {
  code: string
  name: string
  fullName: string
  description: string
  characteristics: string[]
  weaknesses: string[]
  recommendations: string[]
  vitamins: string[]
  diet: string[]
  risks: string[]
  emoji: string
  comment: string
  visualDesc: string // 유형별 이미지/캐릭터 설명
}

export const healthTypes: HealthType[] = [
  {
    code: "ABTS",
    name: "압스",
    fullName: "활발한 신체 루틴러 + 자가 회복",
    description: "당신은 압스형! 활동적이고 체계적인 건강러입니다. 규칙적인 운동과 건강한 습관을 중요시하며, 스스로 건강을 관리하는 능력이 뛰어나요. 매일 아침 운동을 하거나 주간 운동 계획을 세우는 것을 좋아하며, 건강한 식습관과 충분한 수면을 통해 몸을 관리합니다. 체크리스트를 만들어가며 목표를 달성하는 성취감을 즐기고, 다른 사람들에게도 건강한 라이프스타일을 전파하는 리더십을 가지고 있습니다.",
    visualDesc: "운동복을 입고 체크리스트를 들고 있는 밝은 표정의 캐릭터. 헬스장이나 공원에서 스트레칭하는 모습.",
    characteristics: [
      "규칙적인 운동 습관",
      "체계적인 건강 관리",
      "자기 관리 능력이 뛰어남",
      "활동적인 생활 방식"
    ],
    weaknesses: [
      "과도한 운동으로 인한 피로",
      "완벽주의적 성향",
      "스트레스 해소 방법 부족"
    ],
    recommendations: [
      "요가나 스트레칭으로 유연성 향상",
      "명상으로 정신 건강 관리",
      "적절한 휴식 시간 확보"
    ],
    vitamins: [
      "비타민 D (뼈 건강)",
      "오메가-3 (심혈관 건강)",
      "마그네슘 (근육 회복)"
    ],
    diet: [
      "단백질이 풍부한 식사",
      "신선한 채소와 과일",
      "충분한 수분 섭취"
    ],
    risks: [
      "과도한 운동으로 인한 관절 손상",
      "스트레스성 질환",
      "수면 부족"
    ],
    emoji: "💪",
    comment: "당신은 🌟 건강 관리 마스터! 체계적이고 활동적인 건강러"
  },
  {
    code: "CMFR",
    name: "컴프",
    fullName: "조용한 감성 감각형 + 외부 도움",
    description: "당신은 컴프형! 감성적이고 직관적인 건강러입니다. 감각적으로 건강을 관리하며, 필요할 때는 전문가의 도움을 받는 것을 주저하지 않아요. 따뜻한 차를 마시며 명상하거나, 아로마테라피를 통해 스트레스를 해소하는 것을 좋아합니다. 건강 관련 책을 읽거나 상담사와 대화하며 자신의 감정 상태를 점검하는 데 시간을 투자합니다. 때로는 불규칙한 생활을 하지만, 본능적으로 자신에게 필요한 휴식과 치료를 찾아내는 능력이 뛰어납니다.",
    visualDesc: "따뜻한 담요를 두르고 차를 마시며 창밖을 바라보는 차분한 캐릭터. 옆에 건강 관련 책이나 상담사와 대화하는 모습.",
    characteristics: [
      "감성적인 건강 관리",
      "직관적인 생활 습관",
      "외부 도움을 적극 활용",
      "조용하고 차분한 성향"
    ],
    weaknesses: [
      "일관성 부족",
      "감정에 따른 건강 관리",
      "자기 관리 의지 부족"
    ],
    recommendations: [
      "규칙적인 생활 습관 형성",
      "건강한 취미 활동",
      "정기적인 건강 검진"
    ],
    vitamins: [
      "비타민 B 복합체 (스트레스 완화)",
      "비타민 C (면역력 강화)",
      "프로바이오틱스 (장 건강)"
    ],
    diet: [
      "균형 잡힌 식사",
      "따뜻한 음식 선호",
      "적절한 간식 섭취"
    ],
    risks: [
      "불규칙한 생활로 인한 건강 악화",
      "스트레스성 소화 장애",
      "면역력 저하"
    ],
    emoji: "🌸",
    comment: "당신은 🌸 감성 건강러! 직관적이고 따뜻한 건강 관리자"
  },
  {
    code: "AMFS",
    name: "암스",
    fullName: "활동형 멘탈 감각파 + 자가 관리",
    description: "당신은 암스형! 활동적이고 정신적으로 건강한 관리자입니다. 에너지가 넘치고, 감정에 민감하며, 감각적으로 건강을 관리하면서 스스로 회복하는 능력이 뛰어나요. 러닝이나 요가를 통해 몸과 마음을 동시에 단련하며, 음악을 들으며 운동하는 것을 즐깁니다. 스트레스를 받으면 즉시 운동이나 명상을 통해 해소하려고 노력하고, 자신만의 건강 루틴을 만들어가는 창의적인 접근 방식을 가지고 있습니다. 때로는 과도한 활동으로 피로를 느끼기도 하지만, 본능적으로 자신에게 필요한 휴식을 찾아내는 능력이 있습니다.",
    visualDesc: "러닝복을 입고 이어폰을 낀 채 달리거나 요가 매트 위에서 명상하는 캐릭터. 밝고 에너지 넘치는 표정.",
    characteristics: [
      "활동적인 생활 방식",
      "정신 건강에 대한 관심",
      "감각적인 건강 관리",
      "자가 회복 능력"
    ],
    weaknesses: [
      "과도한 활동으로 인한 피로",
      "감정적 스트레스",
      "일관성 부족"
    ],
    recommendations: [
      "요가, 혼자하는 러닝",
      "명상 기반 HIIT 루틴",
      "정기적인 휴식 시간"
    ],
    vitamins: [
      "비타민 B12 (에너지 생성)",
      "아연 (면역력 강화)",
      "세린 (스트레스 완화)"
    ],
    diet: [
      "에너지가 풍부한 식사",
      "항산화 물질이 많은 음식",
      "규칙적인 식사 시간"
    ],
    risks: [
      "과도한 운동으로 인한 피로",
      "스트레스성 질환",
      "수면 장애"
    ],
    emoji: "⚡",
    comment: "당신은 ⚡ 에너지 넘치는 멘탈러! 활동적이고 감각적인 건강러"
  },
  {
    code: "CBTR",
    name: "커알",
    fullName: "신체 중심 루틴형 + 병원 의존",
    description: "당신은 커알형! 신체 건강을 중요시하며 규칙적인 생활을 선호합니다. 건강 관리에 있어 전문가의 도움을 적극적으로 받는 스타일이에요. 정기적인 건강검진을 받고, 의사나 트레이너의 조언을 충실히 따르며, 건강 수첩에 모든 기록을 남기는 체계적인 관리 방식을 가지고 있습니다. 규칙적인 식사 시간과 운동 시간을 지키며, 건강한 간식과 영양제를 꾸준히 섭취합니다. 때로는 과도하게 의존적이 될 수 있지만, 전문가의 지도 하에 안전하고 효과적인 건강 관리를 할 수 있는 장점이 있습니다.",
    visualDesc: "병원이나 건강검진센터에서 진료를 받는 모습, 건강 수첩을 들고 있는 캐릭터. 하얀 가운을 입은 전문가와 함께 있는 장면.",
    characteristics: [
      "신체 건강 중시",
      "규칙적인 생활 습관",
      "전문가 의존적",
      "체계적인 관리"
    ],
    weaknesses: [
      "자기 관리 능력 부족",
      "의존적 성향",
      "비용 부담"
    ],
    recommendations: [
      "자기 관리 능력 향상",
      "건강한 생활 습관 형성",
      "예방 의학 접근"
    ],
    vitamins: [
      "칼슘 (뼈 건강)",
      "철분 (빈혈 예방)",
      "비타민 K (혈액 응고)"
    ],
    diet: [
      "영양 균형 잡힌 식사",
      "정기적인 식사 시간",
      "건강한 간식 선택"
    ],
    risks: [
      "의존성으로 인한 자기 관리 능력 저하",
      "과도한 의료 비용",
      "불필요한 약물 복용"
    ],
    emoji: "🏥",
    comment: "당신은 🏥 체계적인 건강러! 신체 중심의 규칙적인 관리자"
  },
  {
    code: "ABFR",
    name: "압프",
    fullName: "근육파 + 감각형 + 도움받는 스타일",
    description: "당신은 압프형! 활동적이고 감각적인 건강러입니다. 근육을 중요시하며, 필요할 때는 외부의 도움을 받는 것을 주저하지 않아요. 헬스장에서 근력 운동을 하거나, 트레이너와 함께 운동하며 근육 성장에 집중합니다. 고단백 식사와 영양제를 통해 근육 회복을 돕고, 운동 후 스트레칭과 마사지를 통해 몸을 관리합니다. 때로는 과도한 운동으로 피로를 느끼기도 하지만, 전문가의 조언을 받아 균형 잡힌 운동 루틴을 만들어가는 적응력이 뛰어납니다. 자신감 넘치는 외모와 건강한 몸을 통해 주변 사람들에게 긍정적인 에너지를 전파합니다.",
    visualDesc: "근육질의 캐릭터가 덤벨을 들고 운동하거나, 트레이너와 함께 운동하는 모습. 밝고 자신감 넘치는 표정.",
    characteristics: [
      "활동적인 생활 방식",
      "근육 건강 중시",
      "감각적인 관리",
      "외부 도움 활용"
    ],
    weaknesses: [
      "과도한 운동",
      "일관성 부족",
      "의존적 성향"
    ],
    recommendations: [
      "균형 잡힌 운동 루틴",
      "자기 관리 능력 향상",
      "건강한 생활 습관"
    ],
    vitamins: [
      "크레아틴 (근육 성장)",
      "BCAA (근육 회복)",
      "비타민 E (항산화)"
    ],
    diet: [
      "고단백 식사",
      "복합 탄수화물",
      "건강한 지방"
    ],
    risks: [
      "근육 손상",
      "과도한 운동으로 인한 피로",
      "영양 불균형"
    ],
    emoji: "💪",
    comment: "당신은 💪 근육 건강러! 활동적이고 감각적인 운동가"
  },
  {
    code: "CMTS",
    name: "컴트",
    fullName: "조용히 루틴 지키는 멘탈러",
    description: "당신은 컴트형! 조용하고 차분한 성향으로 정신 건강을 중요시하며, 규칙적인 생활 습관을 가지고 스스로 건강을 관리하는 능력이 뛰어나요. 매일 아침 명상이나 요가를 통해 마음을 정리하고, 일기나 다이어리를 쓰며 자신의 감정 상태를 점검합니다. 조용한 환경에서 책을 읽거나 음악을 들으며 스트레스를 해소하고, 식물이나 아로마 캔들을 통해 편안한 분위기를 만드는 것을 좋아합니다. 때로는 사회적 상호작용이 부족할 수 있지만, 자신만의 평화로운 공간에서 깊이 있는 자기 성찰을 통해 정신적 건강을 유지하는 능력이 뛰어납니다.",
    visualDesc: "책상에 앉아 다이어리를 쓰거나, 조용한 방에서 명상하는 캐릭터. 식물이나 아로마 캔들이 주변에 있는 모습.",
    characteristics: [
      "조용하고 차분한 성향",
      "정신 건강 중시",
      "규칙적인 생활",
      "자가 관리 능력"
    ],
    weaknesses: [
      "활동 부족",
      "사회적 상호작용 부족",
      "신체 건강 소홀"
    ],
    recommendations: [
      "가벼운 운동 습관",
      "사회적 활동 참여",
      "신체 건강 관리"
    ],
    vitamins: [
      "비타민 D (기분 개선)",
      "마그네슘 (스트레스 완화)",
      "오메가-3 (뇌 건강)"
    ],
    diet: [
      "균형 잡힌 식사",
      "신선한 채소와 과일",
      "견과류와 씨앗"
    ],
    risks: [
      "운동 부족으로 인한 건강 악화",
      "우울증",
      "사회적 고립"
    ],
    emoji: "🧘",
    comment: "당신은 🧘 평온한 멘탈러! 조용하고 체계적인 건강 관리자"
  }
]

export function calculateHealthType(answers: number[]): HealthType {
  // 점수 계산
  const scores = {
    A: 0, C: 0, B: 0, M: 0, T: 0, F: 0, S: 0, R: 0
  }

  console.log('=== 점수 계산 시작 ===')
  console.log('입력된 답변:', answers)

  // 각 답변에 따른 점수 계산
  answers.forEach((answer, index) => {
    if (answer !== -1) {
      const question = questions[index]
      // 답변이 1-4로 저장되므로 0-3으로 변환: 1→0, 2→1, 3→2, 4→3
      const answerIndex = answer - 1
      const scoreMultiplier = 4 - answerIndex // 1=매우그렇다(3점), 2=그렇다(2점), 3=아니다(1점), 4=매우아니다(0점)
      
      console.log(`질문 ${index + 1}: "${question.text}"`)
      console.log(`  답변=${answer}, 변환된 인덱스=${answerIndex}, 배수=${scoreMultiplier}`)
      console.log(`  질문 점수 가중치:`, question.scores)
      
      Object.keys(scores).forEach(key => {
        const questionScore = question.scores[key as keyof typeof question.scores]
        const addedScore = questionScore * scoreMultiplier
        scores[key as keyof typeof scores] += addedScore
        
        if (addedScore !== 0) {
          console.log(`    ${key}: ${questionScore} × ${scoreMultiplier} = ${addedScore}`)
        }
      })
      console.log('  현재까지 누적 점수:', { ...scores })
      console.log('---')
    }
  })

  console.log('최종 점수:', scores)

  // 유형 결정
  const energyStyle = scores.A > scores.C ? 'A' : 'C'
  const healthFocus = scores.B > scores.M ? 'B' : 'M'
  const managementStyle = scores.T > scores.F ? 'T' : 'F'
  const recoveryStyle = scores.S > scores.R ? 'S' : 'R'

  const typeCode = energyStyle + healthFocus + managementStyle + recoveryStyle
  
  console.log('유형 결정:', {
    energyStyle: `${energyStyle} (A:${scores.A}, C:${scores.C})`,
    healthFocus: `${healthFocus} (B:${scores.B}, M:${scores.M})`,
    managementStyle: `${managementStyle} (T:${scores.T}, F:${scores.F})`,
    recoveryStyle: `${recoveryStyle} (S:${scores.S}, R:${scores.R})`,
    typeCode
  })

  // 해당 유형 찾기 (정확 일치 우선)
  const exact = healthTypes.find(type => type.code === typeCode)
  if (exact) {
    console.log('찾은 유형(정확 일치):', exact.name)
    console.log('=== 점수 계산 완료 ===')
    return exact
  }

  // 등록되지 않은 코드인 경우: 가장 가까운 유형으로 보정 (해밍 유사도 최대)
  const similarity = (a: string, b: string) =>
    a.split('').reduce((acc, ch, idx) => acc + (ch === b[idx] ? 1 : 0), 0)

  let best: HealthType = healthTypes[0]
  let bestScore = -1
  for (const t of healthTypes) {
    const sim = similarity(typeCode, t.code)
    if (sim > bestScore) {
      best = t
      bestScore = sim
    }
  }

  console.log('정확 일치 없음. 가장 가까운 유형으로 보정:', { requested: typeCode, mappedTo: best.code })
  console.log('=== 점수 계산 완료 ===')
  return best
} 