export interface CareerNode {
  year: string;
  company: string;
  role: string;
  detail: string;
}

export const career: CareerNode[] = [
  {
    year: "2020",
    company: "42Seoul",
    role: "개발 교육",
    detail: "또래 학습 기반 소프트웨어 교육 과정. '함께 성장하는 즐거움'의 시작점.",
  },
  {
    year: "2022",
    company: "LINE",
    role: "서버 개발",
    detail: "Contents Service Dev 서버 개발자. Keep 기능 및 공식계정(OA) 개발/운영.",
  },
  {
    year: "2023",
    company: "데이원컴퍼니",
    role: "교육 PM",
    detail: "패스트캠퍼스 PM 부트캠프 총괄, 캠프콘 기획·운영, 풀스택 개발 과정 PM.",
  },
  {
    year: "2025",
    company: "셀피쉬클럽",
    role: "AX / AI Agent",
    detail: "천스체2 기획단, AX 비즈니스 교육, AI Agent Team에서 Claude Code 기반 프로덕트 산출.",
  },
];
