export interface Project {
  title: string;
  period: string;
  role: string;
  description: string;
  highlights: string[];
  stat: { value: string; label: string };
}

export const projects: Project[] = [
  {
    title: "PM 부트캠프",
    period: "2023.06 ~ 2024.12",
    role: "총괄 PM (3~8기)",
    description: "PM 커리어 성장을 위한 본질 탐구, 지식 공유 문화를 기반으로 함께 성장하는 몰입형 교육 과정",
    highlights: [
      "수강생 피드백 기반 커리큘럼 개선 및 멘토링 설계",
      "현업 전문 멘토 20인+ 발굴·섭외 및 멘토링 프로세스 구축",
      "Notion·Slack·Zapier 연동 알림·문의 처리 자동화",
    ],
    stat: { value: "81%", label: "평균 수료율" },
  },
  {
    title: "캠프콘",
    period: "2023.11 ~ 2024.12",
    role: "브랜딩·기획·운영 총괄 PM",
    description: "세대와 직무를 넘어, IT 커리어라는 주제로 연결되어 함께 성장하는 커뮤니티",
    highlights: [
      "6개 직무 20인의 유수 기업 전문가와의 협업",
      "누적 참여 4,200명+, 소식 알림 700명",
      "패스트캠퍼스 긍정 이미지 전환율 92%",
    ],
    stat: { value: "4,200+", label: "누적 참여자" },
  },
  {
    title: "천스체 시즌2",
    period: "2025.01 ~ 2025.05",
    role: "서포터즈 운영 · AI 활용 공유 연사",
    description: "국내 최초 스타트업 체육대회. 스타트업 구성원들이 함께 땀을 흘리며 네트워킹을 경험하는 커뮤니티 행사",
    highlights: [
      "23개 파트너사 커뮤니케이션 및 부스 기획",
      "AI 활용 사례 공유회 645명 신청, 라이브 280명",
      "참여자 만족도 4.64/5.0",
    ],
    stat: { value: "4.64", label: "만족도 (/5.0)" },
  },
  {
    title: "풀스택 개발 과정",
    period: "2024.07 ~ 2024.11",
    role: "기획·운영 PM",
    description: "기초 구현부터 오픈소스 프로젝트, MVP 개발까지 경험할 수 있는 13주 압축 성장 교육 과정",
    highlights: [
      "재직자 대상 KDT 개발 부트캠프 시장 선도",
      "모객 KPI 달성률 110%, 수료율 62.5%",
    ],
    stat: { value: "110%", label: "KPI 달성" },
  },
];
