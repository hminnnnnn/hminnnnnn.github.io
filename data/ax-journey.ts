export interface AxItem {
  title: string;
  description: string;
  tags: string[];
}

export const axWhy = "교육 현장에서 확인한 사람과 환경의 중요성을 조직 전체의 성장을 돕는 HR 영역으로 확장하고자 합니다. 단순한 제도 운영을 넘어, 구성원들이 몰입할 수 있는 문화와 시스템을 설계하는 전문가가 되고 싶습니다.";

export const axItems: AxItem[] = [
  {
    title: "AI Agent Team",
    description: "Claude Code 중심의 AI Agent 스터디 및 프로덕트 산출 활동. 멀티에이전트 시스템 설계와 프롬프트 엔지니어링 실전 경험.",
    tags: ["Claude Code", "멀티에이전트", "프롬프트 엔지니어링"],
  },
  {
    title: "AX 교육 및 챌린지",
    description: "AI 마케팅 영상 제작 챌린지, AI Blog 수익화 챌린지 운영. AI를 활용한 실무형 교육 프로그램 설계와 운영.",
    tags: ["AX 교육", "챌린지 운영", "실무 적용"],
  },
  {
    title: "Personal Tycoon",
    description: "개인의 사고와 외부 지식을 분리 축적하고, 그 교차점에서 콘텐츠를 만드는 3레이어 아키텍처. 사고→지식→퍼블리싱의 복리 구조.",
    tags: ["시스템 설계", "지식 그래프", "콘텐츠 파이프라인"],
  },
];

export const axInsights = [
  "\"겹치는 것 같다\"는 프레이밍 문제일 수 있다 — 본질을 재정의하면 겹침이 사라진다",
  "영리한 판단보다 판단이 필요 없는 구조가 견고하다",
  "자동화하지 않는 결정도 아키텍처의 일부다",
];
