import { siteConfig as enConfig } from "./config";

export const siteConfig = {
  ...enConfig,
  title: "서강대학교 컴퓨터공학과 박사과정 수료",
  description: "음성 인식 & AI 연구자 | 서강대학교",
  aboutMe:
    "서강대학교 컴퓨터공학과 박사과정 수료 (지도교수: 김지환). 주요 연구 분야는 End-to-End 음성 인식(ASR), 음성 분석 및 평가, 문맥 인식 및 도메인 특화 ASR, 대규모 언어 모델(LLM)과 음성 기술의 통합입니다. 강건한 저지연 스트리밍 ASR 시스템 개발과 자동 말하기 평가 프레임워크 구축에 주력하고 있습니다.",
  researchAreas: [
    { category: "음성 인식", items: ["스트리밍 ASR", "강건 ASR", "컨텍스트 바이어싱", "도메인 적응"] },
    { category: "Speech + LLM", items: ["Speech LLM", "LLM 기반 ASR", "멀티모달 AI"] },
    { category: "음성 분석", items: ["말하기 자동 평가", "마비말장애 분석", "오디오 이벤트 검출"] },
  ],
  projects: [
    {
      name: "박사 학위 논문: Adapter-Only Speech–LLM Bridging",
      description:
        "Whisper(음성 인코더)와 Gemma(LLM) 모두 동결 상태에서 전체의 0.44% 경량 어댑터만 학습. 학술 강연 4개 분야 평균 26.8% WER 감소. 자연어 도메인 프롬프팅으로 전문 어휘 F1 +7.2%p 향상. PAKDD 2026 Accepted (Oral).",
      partner: "",
      period: "2025.10 - 현재",
      skills: ["PyTorch", "Whisper", "Gemma", "Adapter", "Domain Adaptation"],
    },
    {
      name: "SEAM: 음성–LLM 시간의미론적 정렬",
      description:
        "교차 어텐션 기반 가변 속도 생성 인코더-디코더 모듈. 음성 인코더 동결 + LLM LoRA. LibriSpeech 2.6%/5.2% WER, 교차 도메인 TED-LIUM-v2 4.7% WER 달성. EACL 2026 Findings Accepted.",
      partner: "",
      period: "2025.05 - 2026.01",
      skills: ["PyTorch", "Whisper", "LLM", "LoRA", "ASR"],
    },
    {
      name: "음성/가창 변환 (SVC)",
      description:
        "so-vits-svc 및 whisper-vits-svc를 활용한 End-to-end SVC 파이프라인. 약 10시간 화자 데이터 수집, UVR5 보컬 추출, RTX A5000 학습. 음성 변환 및 가창 변환 추론 수행.",
      partner: "개인 프로젝트",
      period: "2025",
      skills: ["so-vits-svc", "Whisper", "UVR5", "SVC", "TTS"],
    },
    {
      name: "End-to-End 한국어 음성인식 프로젝트",
      description:
        "Hybrid FastConformer RNNT+CTC 기반 범용 한국어 ASR 시스템 개발. Cache-aware 스트리밍 저지연 추론 구현. 게임 도메인 어휘 컨텍스트 바이어싱 적용으로 인식 성능 향상.",
      partner: "산학협력: 스마일게이트",
      period: "2024 - 2025.04",
      skills: ["NVIDIA NeMo", "FastConformer", "RNNT", "CTC"],
    },
    {
      name: "전화망(8kHz) 환경 End-to-End 음성인식",
      description:
        "8kHz 전화망 데이터에 최적화된 스트리밍/비스트리밍 한국어 ASR 파이프라인 개발 (FastConformer-CTC). 도메인 시프트 대응 동적 컨텍스트 바이어싱 모듈 구현.",
      partner: "산학협력: 롯데이노베이트",
      period: "2024.04 - 2024.12",
      skills: ["FastConformer", "CTC", "Streaming ASR"],
    },
    {
      name: "(외국인을 위한) 2024년 한국어 평가 말하기, 쓰기 자동 채점 연구",
      description:
        "Wav2Vec 기반 멀티 태스크 학습으로 발음, 유창성, 내용을 공동 모델링하는 L2-한국어 말하기 평가 프레임워크 개발. Conformer-CTC ASR + LLaMa 결합 다측면 자동 채점.",
      partner: "주관: 문화체육관광부",
      period: "2024.05 - 2024.12",
      skills: ["Wav2Vec", "Conformer", "LLaMa"],
    },
    {
      name: "대화 기반 설명가능성을 멀티모달로 제공하는 인공지능 기술 개발",
      description:
        "마비말장애 중증도 분류를 위한 AI 프레임워크 개발. 음향/언어 특성 분석 기반 해석 가능한 진단 모듈 구현. 대화형 멀티모달 환경에서 AI 출력과 사용자 이해 간 해석 격차 완화.",
      partner: "주관: 과학기술정보통신부/IITP",
      period: "2022.04 - 현재",
      skills: ["Explainable AI", "Multi-modal", "Speech Analysis"],
    },
    {
      name: "무분별적 유해성 미디어 배포 문제 해결을 위한 지능적 분석/분류 기반 콘텐츠 등급분류 기술 개발",
      description:
        "자동 영상 등급 판정 프레임워크 내 음성인식 및 오디오 분석 담당. 음향 이벤트 검출(SED) 모델 설계. 도메인 영상 코퍼스에 맞춰 Whisper ASR 파인튜닝.",
      partner: "주관: 과학기술정보통신부",
      period: "2022 - 2024",
      skills: ["Whisper", "Sound Event Detection", "Fine-tuning"],
    },
    {
      name: "(외국인을 위한) 2023년 한국어 평가 말하기, 쓰기 자동 채점 연구",
      description:
        "Conformer-CTC ASR 출력 + BERT 기반 의미 점수화를 결합한 L2-한국어 평가 파이프라인 구축. 발음 정확도, 발화 속도, 구문적 정확성 정량화 알고리즘 개발.",
      partner: "주관: 문화체육관광부",
      period: "2023.05 - 2023.12",
      skills: ["Conformer", "CTC", "BERT"],
    },
    {
      name: "비디오 튜링 테스트를 통과할 수준의 비디오 스토리 이해 기반 질의응답 기술 개발",
      description:
        "Kaldi 문장 단위 디코더를 수정하여 실시간 비디오 QA에서 RT 1.0 미만 달성. 타깃 비디오에서 도메인 특화 코퍼스 수집/정제, 음향/언어 모델 최적화.",
      partner: "주관: 과학기술정보통신부",
      period: "2017.09 - 2019.12",
      skills: ["Kaldi", "Language Model", "Real-time ASR"],
    },
  ],
  experience: [
    {
      company: "서강대학교 Auditory Intelligence Lab",
      title: "박사 연구원",
      dateRange: "2022.03 - 현재",
      bullets: [
        "지도교수: 김지환",
        "End-to-End ASR, 음성 분석, LLM 통합 기술 연구",
        "FastConformer RNNT+CTC 기반 스트리밍 ASR 시스템 개발",
        "EACL, PAKDD, TIIS 등 국제 학술대회/저널 논문 게재",
      ],
    },
    {
      company: "서강대학교 Auditory Intelligence Lab",
      title: "석사 연구원",
      dateRange: "2017.09 - 2019.08",
      bullets: [
        "지도교수: 김지환",
        "학위 논문: 약한 레이블 말뭉치를 이용한 한국어 실시간 자동 전사 시스템",
        "Kaldi 디코더 수정으로 sub-1.0 RT 실시간 추론 달성",
        "도메인 특화 코퍼스 수집 및 음향/언어 모델 최적화",
      ],
    },
  ],
  education: [
    {
      school: "서강대학교",
      degree: "컴퓨터공학과 박사과정 수료",
      dateRange: "2022.03 - 현재",
      achievements: [
        "지도교수: 김지환",
        "연구 분야: End-to-End ASR, 음성 분석, LLM 통합",
        "PAKDD 2026 Accepted (Oral Presentation)",
        "EACL 2026 Findings Accepted",
      ],
    },
    {
      school: "서강대학교",
      degree: "컴퓨터공학과 공학석사",
      dateRange: "2017.09 - 2019.08",
      achievements: [
        "지도교수: 김지환",
        "학위 논문: 약한 레이블 말뭉치를 이용한 한국어 실시간 자동 전사 시스템",
      ],
    },
    {
      school: "서강대학교",
      degree: "컴퓨터공학과 공학학사",
      dateRange: "2010.03 - 2017.08",
      achievements: [],
    },
  ],
  teaching: [
    {
      year: "2024",
      semester: "2024년 2학기",
      role: "강의 조교",
      course: "CSE5109/CSEG109/AIEG109/AIE5109",
      title: "생성형 AI 기반 오디오인식 및 합성/변환",
      instructor: "김지환 교수",
      school: "서강대학교",
      description: "오디오 처리, 딥러닝 기초, 언어 모델, FastSpeech2 TTS 실습",
      github: "https://github.com/june-oh/2024_cseg109",
    },
    {
      year: "2023",
      semester: "2023년 여름",
      role: "강의 조교",
      course: "Samsung AI Academy",
      title: "딥러닝 기반 자동 음성 인식",
      instructor: "김지환 교수",
      school: "서강대학교 × 삼성전자",
      description: "김지환 교수 초청 강의 조교. 오디오 처리, MLP, CTC, Whisper, NeMo 파인튜닝, WFST 실습.",
      github: "https://github.com/june-oh/2023_AI_Academy_ASR",
    },
    {
      year: "2023",
      semester: "2023년 2학기",
      role: "강의 조교",
      course: "CSE5109/CSEG109/AIEG109/AIE5109",
      title: "오디오인식 및 합성변환",
      instructor: "김지환 교수",
      school: "서강대학교",
      description: "오디오 처리, PyTorch, RNN/CNN/Seq2Seq, FastSpeech2/VocGAN TTS 실습",
      github: "https://github.com/june-oh/cseg109",
    },
    {
      year: "2022",
      semester: "2022년",
      role: "강의 조교",
      course: "CSE5311/CSEG311/GITA370",
      title: "대화형 사용자 인터페이스개론",
      instructor: "김지환 교수",
      school: "서강대학교",
      description: "대화 시스템 및 대화형 AI 인터페이스 설계 실습",
      github: "",
    },
  ],
  awards: [
    {
      year: "2023",
      competition: "한국어 AI 경진대회",
      track: "Track2-1, 상담 음성인식",
      team: "상담 ONE",
      members: "오준석, 김민서, 남주형",
      award: "장려상",
      organizer: "한국지능정보사회진흥원(NIA)",
    },
    {
      year: "2022",
      competition: "한국어 인공지능 경진대회",
      track: "기업현안 (회의음성)",
      team: "SGCSE",
      members: "오준석, 김하영",
      award: "최우수상 / 네이버 대표 (1위)",
      organizer: "한국지능정보사회진흥원(NIA)",
    },
    {
      year: "2021",
      competition: "음절인식률 측정 알고리즘 개발 대회",
      track: "숫자 포함 패턴발화 음성 데이터셋 활용",
      team: "검은사케동",
      members: "박호성, 오준석, 조은수",
      award: "최우수상 (1위)",
      organizer: "KT alpha",
    },
  ],
  patents: [
    "KR 10-2699607 (B1) - 코퍼스 구축 서비스 제공 서버 및 방법 (등록: 2024.08)",
  ],
  certificates: [
    "NVIDIA Deep Learning Institute - Building Conversational AI Applications (2022)",
  ],
};
