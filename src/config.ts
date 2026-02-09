export const siteConfig = {
  name: "Junseok Oh (오준석)",
  nickname: "june-oh / RiceBerry",
  // Author name patterns to highlight in publications
  authorHighlight: ["J. Oh", "오준석"],
  title: "Ph.D. Candidate in Computer Science and Engineering",
  description: "Speech Recognition & AI Researcher at Sogang University",
  accentColor: "#0ea5e9", // sky-500 for a clean, professional feel
  social: {
    email: "ohjs@sogang.ac.kr",
    github: "https://github.com/june-oh",
    linkedin: "https://www.linkedin.com/in/junseokoh-riceberry",
    scholar: "https://scholar.google.com/citations?user=W3GNCfgAAAAJ",
    cv: "/june-oh/cv.pdf",
  },
  aboutMe:
    "I am a Ph.D. candidate in Computer Science and Engineering at Sogang University, advised by Prof. Ji-Hwan Kim. My research focuses on End-to-End Automatic Speech Recognition (ASR), Speech Analytics & Assessment, Context-aware & Domain-specific ASR, and the integration of Large Language Models (LLMs) in Speech Technology. I am passionate about building robust, low-latency streaming ASR systems and developing automated speaking assessment frameworks.",
  // Skill icons from skillicons.dev (general programming tools)
  skillIcons: ["py", "c", "pytorch", "linux", "bash", "git", "github", "gitlab", "docker", "vscode"],
  // Speech/ML specific tools (displayed as text badges)
  speechTools: [
    "NVIDIA NeMo",
    "Kaldi",
    "KenLM",
    "Hugging Face Transformers & PEFT",
    "Whisper",
    "Wav2Vec",
    "FastConformer",
  ],
  // Research areas - actual research interests
  researchAreas: [
    { category: "ASR", items: ["Streaming ASR", "Robust ASR", "Context-biasing", "Domain Adaptation"] },
    { category: "Speech + LLM", items: ["Speech LLM", "LLM-based ASR", "Multimodal AI"] },
    { category: "Speech Analytics", items: ["Speaking Assessment", "Dysarthria Analysis", "Audio Event Detection"] },
  ],
  projects: [
    {
      name: "Adapter-Only Speech-LLM Bridging (PhD Dissertation)",
      description:
        "Fully frozen Whisper + Gemma with lightweight adapter-only bridging (0.44% params). 26.8% WER reduction on academic domains via inference-time domain prompting. PAKDD 2026 Accepted (Oral).",
      partner: "MSIT / IITP",
      period: "Oct 2025 - Present",
      skills: ["PyTorch", "Whisper", "Gemma", "Adapter", "Domain Adaptation"],
    },
    {
      name: "SEAM: Temporal-Semantic Bridging for Speech-LLM",
      description:
        "Encoder-decoder architecture with variable-rate generation via cross-attention. Frozen speech encoder + LLM LoRA. Achieves 2.6%/5.2% WER on LibriSpeech and 4.7% on TED-LIUM-v2. EACL 2026 Findings.",
      partner: "MSIT / IITP",
      period: "May 2025 - Jan 2026",
      skills: ["PyTorch", "Whisper", "LLM", "LoRA", "ASR"],
    },
    {
      name: "End-to-End Korean ASR for Gaming",
      description:
        "Developed a universal Korean ASR system using hybrid FastConformer RNN-Transducer + CTC model with cache-aware streaming and context biasing for gaming terminology.",
      partner: "Smilegate",
      period: "2024 - Apr 2025",
      skills: ["NVIDIA NeMo", "FastConformer", "RNNT", "CTC"],
    },
    {
      name: "Telephony ASR System",
      description:
        "Developed streaming and non-streaming Korean ASR pipelines optimized for 8 kHz telephony data using FastConformer-CTC architecture with context-biasing modules.",
      partner: "LOTTE INNOVATE",
      period: "Apr 2024 - Dec 2024",
      skills: ["FastConformer", "CTC", "Streaming ASR"],
    },
    {
      name: "Automated Korean Speaking Assessment (2024)",
      description:
        "Multi-task learning framework using Wav2Vec to jointly model pronunciation, fluency, and content for L2-Korean assessment, integrated with Conformer-CTC ASR and LLM for automated multi-aspect scoring.",
      partner: "Ministry of Culture, Sports and Tourism",
      period: "May 2024 - Dec 2024",
      skills: ["Wav2Vec", "Conformer", "LLM"],
    },
    {
      name: "Automated Korean Speaking Assessment (2023)",
      description:
        "Built an end-to-end evaluation pipeline for L2 Korean speakers by combining Conformer-CTC ASR outputs with BERT-based semantic scoring. Developed algorithms to quantify pronunciation accuracy, speech rate, and syntactic correctness.",
      partner: "Ministry of Culture, Sports and Tourism",
      period: "May 2023 - Dec 2023",
      skills: ["Conformer", "CTC", "BERT"],
    },
    {
      name: "Dialog-based Multi-modal Explainable AI",
      description:
        "AI-based framework for dysarthria severity classification, providing multi-modal explanations to support diagnostic decision-making.",
      partner: "MSIT / IITP",
      period: "Apr 2022 - Present",
      skills: ["Explainable AI", "Multi-modal", "Speech Analysis"],
    },
    {
      name: "Intelligent Audio Content Rating",
      description:
        "Led audio analytics submodule within automated video content rating framework. Fine-tuned Whisper ASR for domain-specific video corpora.",
      partner: "MSIT",
      period: "2022 - 2024",
      skills: ["Whisper", "Sound Event Detection", "Fine-tuning"],
    },
    {
      name: "Video Story Understanding-based QA System",
      description:
        "Modified Kaldi's sentence-level decoder to achieve sub-1.0 RT for real-time video QA applications. Collected and curated domain-specific audio/text corpora to optimize acoustic and language models.",
      partner: "MSIT",
      period: "Sep 2017 - Dec 2019",
      skills: ["Kaldi", "Language Model", "Real-time ASR"],
    },
  ],
  experience: [
    {
      company: "Sogang University - Auditory Intelligence Lab",
      title: "Ph.D. Student",
      dateRange: "Mar 2022 - Present",
      bullets: [
        "Advisor: Prof. Ji-Hwan Kim",
        "Research on End-to-End ASR, Speech Analytics, and LLM integration in Speech Technology",
        "Developed streaming ASR systems with FastConformer RNNT+CTC architecture",
        "Published papers in EACL, EURASIP JASM, and TIIS journals",
      ],
    },
    {
      company: "Sogang University - Auditory Intelligence Lab",
      title: "M.E. Student",
      dateRange: "Sep 2017 - Aug 2019",
      bullets: [
        "Advisor: Prof. Ji-Hwan Kim",
        "Thesis: Korean Real-Time Automatic Transcription System Using Weakly Labeled Corpus",
        "Modified Kaldi decoder for sub-1.0 RT real-time video QA applications",
        "Collected and curated domain-specific audio/text corpora for ASR optimization",
      ],
    },
  ],
  education: [
    {
      school: "Sogang University",
      degree: "Ph.D. Candidate in Computer Science and Engineering",
      dateRange: "Mar 2022 - Present",
      achievements: [
        "Advisor: Prof. Ji-Hwan Kim",
        "Research Focus: End-to-End ASR, Speech Analytics, LLM Integration",
        "PAKDD 2026 Accepted, Oral Presentation",
        "EACL 2026 Findings Accepted (SEAM)",
      ],
    },
    {
      school: "Sogang University",
      degree: "Master of Engineering in Computer Science and Engineering",
      dateRange: "Sep 2017 - Aug 2019",
      achievements: [
        "Advisor: Prof. Ji-Hwan Kim",
        "Thesis: Korean Real-Time Automatic Transcription System Using Weakly Labeled Corpus",
      ],
    },
    {
      school: "Sogang University",
      degree: "Bachelor of Engineering in Computer Science and Engineering",
      dateRange: "Mar 2010 - Aug 2017",
      achievements: [],
    },
  ],
  // Publications - structured by type
  publications: {
    journals: [
      {
        authors: "J. Oh, J. Nam, and J.-H. Kim",
        title: "HiTCA: Fusing Hierarchical Text and Contextual Audio for Accurate VCR",
        venue: "EURASIP Journal on Audio, Speech, and Music Processing",
        year: "2025",
        note: "SCIE, Under Review",
      },
      {
        authors: "S. Ma, J. Oh, M. Kim, and J.-H. Kim",
        title: "Survey on Deep Learning-based Speech Technologies in Voice Chatbot Systems",
        venue: "KSII Transactions on Internet & Information Systems (TIIS)",
        year: "2025",
        volume: "vol. 19, no. 5, pp. 1406-1440",
        note: "SCIE",
      },
      {
        authors: "J. Oh, E. Cho, and J.-H. Kim",
        title: "Integration of WFST language model in pre-trained Korean E2E ASR model",
        venue: "KSII Transactions on Internet and Information Systems (TIIS)",
        year: "2024",
        volume: "vol. 18, no. 6, pp. 1692–1705",
        note: "SCIE",
      },
      {
        authors: "S. Seo, J. Oh, E. Cho, H. Park, G. Kim, and J.-H. Kim",
        title: "TP-MobNet: A Two-pass Mobile Network for Low-complexity Classification of Acoustic Scene",
        venue: "Computers, Materials & Continua",
        year: "2022",
        volume: "vol. 73, no. 2",
        note: "SCIE",
      },
      {
        authors: "M. Lim, D. Lee, H. Park, Y. Kang, J. Oh, J.-S. Park, G.-J. Jang, and J.-H. Kim",
        title: "Convolutional neural network based audio event classification",
        venue: "KSII Transactions on Internet and Information Systems (TIIS)",
        year: "2018",
        volume: "vol. 12, no. 6, pp. 2748–2760",
        note: "SCIE",
      },
    ],
    conferences: [
      {
        authors: "J. Oh and J.-H. Kim",
        title: "Adapter-Only Bridging of Frozen Speech Encoder and Frozen LLM for ASR",
        venue: "Pacific-Asia Conference on Knowledge Discovery and Data Mining (PAKDD)",
        year: "2026",
        note: "Accepted, Oral",
      },
      {
        authors: "J. Oh and J.-H. Kim",
        title: "SEAM: Bridging the Semantic-Temporal Granularity Gap for LLM-based Speech Recognition",
        venue: "Findings of the 18th Conference of the European Chapter of the Association for Computational Linguistics (EACL)",
        year: "2026",
        note: "Accepted",
      },
      {
        authors: "J. Oh, H. Park, and J.-H. Kim",
        title: "Speech Intelligibility Prediction of Dysarthria Using Deep Convolutional Networks",
        venue: "Proc. APIC-IST 2023",
        year: "2023",
        volume: "pp. 236–237",
      },
      {
        authors: "M. Kim, J. Oh, and J.-H. Kim",
        title: "Automated Dysarthria Severity Classification Using Diadochokinetic test and Speech Intelligibility Based on LightGBM",
        venue: "Proc. APIC-IST 2023",
        year: "2023",
        volume: "pp. 12–13",
      },
      {
        authors: "S. Seo, M. Lim, D. Lee, H. Park, J. Oh, D. J. Rim, and J.-H. Kim",
        title: "Environmental noise robustness for Korean fricatives using speech enhancement generative adversarial networks",
        venue: "Proc. IEEE Int. Conf. Big Data and Smart Computing (BigComp)",
        year: "2019",
        volume: "pp. 1–4",
      },
      {
        authors: "S. Seo, D. J. Rim, M. Lim, D. Lee, H. Park, J. Oh, C. Kim, and J.-H. Kim",
        title: "Shortcut connections based deep speaker embeddings for end-to-end speaker verification system",
        venue: "Proc. Interspeech",
        year: "2019",
        volume: "pp. 17",
      },
    ],
    domestic: [
      {
        authors: "이정필, 장재후, 김지현, 김민섭, 김성준, 김민서, 김하영, 오준석, 정원, 김장연 외",
        title: "음성에 기반한 마비말장애 진단과 설명이 가능한 시스템",
        venue: "정보과학회지",
        year: "2024",
        volume: "vol. 42, no. 4, pp. 45–56",
        note: "KCI",
      },
      {
        authors: "H. Park, Y. Kang, M. Lim, D. Lee, J. Oh, and J.-H. Kim",
        title: "LFMMI-based acoustic modeling by using external knowledge",
        venue: "The Journal of the Acoustical Society of Korea",
        year: "2019",
        volume: "vol. 38, no. 5, pp. 607–613",
        note: "KCI",
      },
    ],
  },
  awards: [
    {
      year: "2023",
      competition: "한국어 AI 경진대회",
      track: "Track2-1, 상담 음성인식",
      team: "상담 ONE",
      members: "오준석, 김민서, 남주형",
      award: "장려상",
      organizer: "NIA (한국지능정보사회진흥원)",
    },
    {
      year: "2022",
      competition: "한국어 인공지능 경진대회",
      track: "기업현안 (회의음성)",
      team: "SGCSE",
      members: "오준석, 김하영",
      award: "최우수상 / 네이버 대표 (1위)",
      organizer: "NIA (한국지능정보사회진흥원)",
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
    "KR 10-2699607 (B1) - Corpus Construction Service Provision Server and Method (Granted: Aug 2024)",
  ],
  certificates: [
    "NVIDIA Deep Learning Institute - Building Conversational AI Applications (2022)",
  ],
};
