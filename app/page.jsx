import SiteHeader from './SiteHeader';

const portfolioPdf = '/최인규_포트폴리오.pdf';

const projects = [
  {
    title: 'DOGTOR',
    label: 'Team · 2025.08 - 2025.12',
    summary: '온디바이스 AI 기반 애완견 케어 서비스',
    context: 'OceanLight와 협업한 캡스톤 프로젝트로, 반려견 케어와 동물병원 연계를 돕는 AI 서비스를 구현했습니다. 2026 AI Expo Korea 국제인공지능대전에 출품되었습니다.',
    role: 'AI · AIBE · Infra',
    impact: '7B 모델 15GB를 4.1GB GGUF로 경량화하고 FastAPI inference 서버에서 preload 구조를 적용했습니다.',
    evidence: [
      ['Problem', '대형 LLM을 제한된 실행 환경에서 반복 호출해야 하는 구조'],
      ['Solution', '4bit GGUF 양자화와 FastAPI lifespan preload로 추론 서버 구성'],
      ['Result', '모델 용량 15GB에서 4.1GB로 축소, API 요청 시 재로드 비용 제거']
    ],
    points: [
      'Qwen2.5-7B-Instruct 모델을 llama.cpp 기반 4bit GGUF로 양자화',
      '수의사 대화 QA 데이터 전처리, paraphrasing, 역번역 증강',
      'API 요청마다 모델을 재로드하지 않도록 lifespan 기반 LLM preload 구성'
    ],
    stack: ['FastAPI', 'llama.cpp', 'Qwen2.5', 'Docker', 'EC2']
  },
  {
    title: 'Fresh Money',
    label: 'Team · 2025.03 - 2025.07',
    summary: '청년정책 및 재정관리 추천 서비스',
    context: '사회초년생의 재정관리를 돕기 위해 투자 방식, 금융상품, 청년지원정책 추천과 자산 관련 챗봇을 제공한 프로젝트입니다.',
    role: 'AI · AIBE · Infra',
    impact: '은행상품 데이터와 청년정책 문서를 RAG로 연결해 추천 결과의 근거성과 확장성을 높였습니다.',
    evidence: [
      ['Problem', '금융상품과 정책 문서가 분산되어 추천 근거를 유지하기 어려운 상황'],
      ['Solution', '크롤링 데이터 임베딩, FAISS 검색, LCEL 기반 RAG 파이프라인 구성'],
      ['Result', '근거 문서 기반 추천 흐름을 만들고 JSON 응답 오류를 few-shot으로 안정화']
    ],
    points: [
      '제1금융권 금융상품 크롤링 후 임베딩 및 FAISS 벡터 검색 구축',
      'LangChain LCEL과 RetrievalQA 체인 기반 RAG 파이프라인 작성',
      'Few-shot 프롬프팅으로 JSON 응답 안정화 및 422 오류 해결'
    ],
    stack: ['FastAPI', 'MongoDB', 'LangChain', 'FAISS', 'OpenAI API']
  },
  {
    title: 'LightBox',
    label: 'Team · 2025.09 - 2025.11',
    summary: '실시간 졸음운전 감지 서비스',
    context: 'YOLO와 MediaPipe FaceMesh를 활용해 눈 감김을 감지하고, 주행 종료 후 졸음 발생 구간을 리와인드 분석으로 제공했습니다.',
    role: 'AI · AIBE · Infra',
    impact: 'GPU 제약 상황에서도 CPU 추론 파이프라인을 조정해 실시간 처리 안정성을 확보했습니다.',
    evidence: [
      ['Problem', 'GPU 없이 실시간 영상 추론과 눈 감김 감지를 함께 처리해야 하는 제약'],
      ['Solution', 'YOLO crop, FaceMesh 랜드마크, EAR 계산으로 감지 범위와 연산량 조정'],
      ['Result', 'CPU 환경에서도 실시간 처리 흐름을 유지하도록 imgsz와 감지 로직 튜닝']
    ],
    points: [
      '눈 주변 6개 랜드마크와 EAR 알고리즘으로 사용자별 눈 폭 차이 대응',
      'YOLO 기반 얼굴 및 눈 영역 crop으로 오탐 감소',
      'CPU 환경에서 imgsz 조정으로 실시간성과 감지 정확도 균형 확보'
    ],
    stack: ['YOLOv11', 'MediaPipe', 'FastAPI', 'MongoDB', 'EC2']
  },
  {
    title: 'Swagger Inspector',
    label: 'Personal · 2026.01 - 2026.02',
    summary: 'OpenAPI RAG 분석 챗봇 서비스',
    context: '기능이 많은 백엔드 API 문서를 챗봇 형태로 탐색할 수 있도록 만든 개인 프로젝트입니다.',
    role: 'Agent · Backend · AI',
    impact: '문서 신뢰도와 threshold를 응답에 반영해 사실과 다른 API 안내가 섞이는 문제를 줄였습니다.',
    evidence: [
      ['Problem', 'OpenAPI 전체 스펙을 매번 주입하면 비용이 커지고 잘못된 API 안내가 섞이는 문제'],
      ['Solution', 'MongoDB Vector Search와 embedding 기반 검색으로 필요한 문서만 주입'],
      ['Result', '참고 문서 신뢰도와 threshold를 응답에 반영해 답변 근거를 드러냄']
    ],
    points: [
      'MongoDB Vector Search와 text-embedding-3-small 기반 문서 임베딩',
      'OpenAPI 스펙 전체 주입 대신 검색 기반 응답으로 토큰 비용 절감',
      '참고 문서 신뢰도 표시와 threshold 조절로 응답 근거성 개선'
    ],
    stack: ['FastAPI', 'MongoDB', 'OpenAI', 'Codex']
  }
];

const awards = [
  ['활동', '2026', 'AI Expo Korea 작품 출품', 'Dogtor 프로젝트를 2026 AI Expo Korea 국제인공지능대전에 3일간 출품'],
  ['수상', '2025', '교내 캡스톤 프로젝트 은상 · 동상', 'Fresh Money 은상, Dogtor 동상 수상'],
  ['수상', '2025', '전국 고등학교 동아리 SW 경진대회 장려', 'YOLO와 MediaPipe 기반 LightBox 프로젝트 수행'],
  ['수상', '2025', '제7회 데이터 크리에이터 캠프 장려', '500여 개 팀 중 6위 입상'],
  ['활동', '2026', '실리콘밸리 견학', '현지 기술 기업과 개발 문화를 직접 살펴보며 서비스 기획과 실행 방식의 차이를 경험'],
  ['활동', '2026', '퀀텀아이 인턴십', '현업 환경에서 개발 업무 흐름과 협업 방식, 결과물 관리 과정을 경험'],
  ['활동', '2024', 'Apple Foundation Program @ POSTECH', '3기 과정에서 제품 기획, 사용자 관점의 문제 정의, 팀 기반 프로토타이핑을 수행'],
  ['자격', '2025', '정보처리기능사', '개발 기초 역량과 정보처리 전반에 대한 이해를 확인한 국가기술자격 보유'],
  ['자격', '2025', '파이썬 프로그래밍 3급', '한국인공지능아카데미 발급 민간자격증으로 Python 기초 활용 역량을 확인'],
  ['자격', '2025', '딥러닝활용자격증 3급', '한국인공지능아카데미 발급 민간자격증으로 딥러닝 기초 활용 역량을 확인']
];

const awardCategories = ['활동', '수상', '자격'];

const stacks = [
  ['AI / ML', 'Python, PyTorch, LLM, RAG, LangChain, FAISS, OpenAI API, CV'],
  ['Backend / Infra', 'FastAPI, MongoDB, Docker, AWS EC2, Nginx, REST API, Linux'],
  ['Tools', 'Git, GitHub, Notion, Codex, VS Code, Postman']
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero" id="home">
        <div className="heroBackdrop" />
        <div className="heroGrid">
          <div className="heroCopy">
            <p className="heroLead">데이터 수집부터 모델 개발 · 서빙까지</p>
            <h1>
              <span className="titleLine">모든 걸 경험한</span>
              <span className="titleLine">AI 백엔드 개발자</span>
            </h1>
            <p>
              RAG, 온디바이스 AI, 실시간 추론 서버 구축 경험을 바탕으로 모델이 제한된 실행 환경에서도 안정적으로 동작하도록 설계하고 구현합니다.
            </p>
            <div className="heroActions">
              <a className="button primary" href="#projects">프로젝트 보기</a>
              <a className="button ghost" href={portfolioPdf} target="_blank" rel="noreferrer">PDF 보기</a>
              <a className="button ghost" href="#contact">연락하기</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section intro" id="about">
        <div className="sectionHead split">
          <div>
            <p className="kicker">About</p>
            <h2>
              <span className="titleLine">모델 구현보다 더 오래 남는 건,</span>
              <span className="titleLine">실제 환경에서 버티는 구조라고 생각합니다.</span>
            </h2>
          </div>
          <p>
            LLM과 비전 기술을 활용한 프로젝트를 진행하며 모델 성능뿐 아니라 추론 속도, 메모리 사용량, API 형식, 배포 환경까지 함께 고려해왔습니다. 협업에서는 인터페이스와 데이터 구조를 먼저 정리해 작업 기준을 맞추는 편입니다.
          </p>
        </div>
      </section>

      <section className="section muted stackStrip" id="stack" aria-label="사용 기술">
        <div className="stackTicker" aria-label="주요 기술 스택 목록">
          {stacks.map(([, description], index) => (
            <div className="stackMarquee" aria-label={`사용 기술 ${index + 1}`} key={description}>
              <div className="stackTrack">
                {Array.from({ length: 6 }, (_, loop) => (
                  <div className="stackLoop" aria-hidden={loop > 0 ? 'true' : undefined} key={`${index}-${loop}`}>
                    {description.split(', ').map((skill) => (
                      <span className="skillPill" key={`${index}-${loop}-${skill}`}>{skill}</span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section projects" id="projects">
        <div className="sectionHead">
          <div>
            <p className="kicker">Projects</p>
            <h2>프로젝트</h2>
          </div>
        </div>

        <div className="projectList">
          {projects.map((project, index) => (
            <article className="projectItem" key={project.title}>
              <div className="projectIndex">{String(index + 1).padStart(2, '0')}</div>
              <div className="projectMain">
                <div className="projectTopline">
                  <span>{project.label}</span>
                  {project.label.startsWith('Personal') ? null : <span>{project.role}</span>}
                </div>
                <h3>{project.title}</h3>
                <p className="projectSummary">{project.summary}</p>
                <p className="projectContext">{project.context}</p>
                <div className="impactBox">
                  <span>Impact</span>
                  <strong>{project.impact}</strong>
                </div>
              </div>
              <div className="projectDetail">
                <ul>
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className="projectEvidence">
                  {project.evidence.map(([label, value]) => (
                    <div key={label}>
                      <span>{label}</span>
                      <p>{value}</p>
                    </div>
                  ))}
                </div>
                <div className="tags">
                  {project.stack.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="projectResource">
          <a className="resourceLink" href={portfolioPdf} target="_blank" rel="noreferrer">포트폴리오 PDF에서 더 보기</a>
        </div>
      </section>

      <section className="section muted" id="experience">
        <div className="sectionHead">
          <div>
            <p className="kicker">Experience & Awards</p>
            <h2>경험&수상</h2>
          </div>
        </div>
        <div className="awardGroups">
          {awardCategories.map((category) => (
            <section className="awardGroup" aria-label={`${category} 내역`} key={category}>
              <div className="awardGroupLabel">
                <span>{category}</span>
              </div>
              <div className="awardList">
                {awards
                  .filter(([itemCategory]) => itemCategory === category)
                  .map(([, year, title, description]) => (
                    <article className="awardItem" key={year + '-' + title}>
                      <div className="awardMeta">
                        <span>{year}</span>
                      </div>
                      <h3>{title}</h3>
                      <p>{description}</p>
                    </article>
                  ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="section contact" id="contact">
        <div className="contactCopy">
          <p className="kicker">Contact</p>
          <h2>
            <span className="titleLine">간단한 커피챗도</span>
            <span className="titleLine">환영입니다.</span>
          </h2>
          <p>프로젝트 자료, 깃허브, 블로그를 함께 확인하실 수 있습니다.</p>
        </div>
        <div className="contactList" aria-label="연락처 목록">
          <a href={portfolioPdf} target="_blank" rel="noreferrer"><span>PDF</span><strong>최인규_포트폴리오.pdf</strong></a>
          <a href="mailto:chldlsrb08@naver.com"><span>Mail</span><strong>chldlsrb08@naver.com</strong></a>
          <a href="https://github.com/yeeeengyu" target="_blank" rel="noreferrer"><span>GitHub</span><strong>github.com/yeeeengyu</strong></a>
          <a href="https://blog.ingyuc.click" target="_blank" rel="noreferrer"><span>Blog</span><strong>blog.ingyuc.click</strong></a>
          <a href="tel:01082699915"><span>Phone</span><strong>010-8269-9915</strong></a>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Choi Ingyu. AI Backend Portfolio.</p>
        <a href="#home">맨 위로</a>
      </footer>
    </main>
  );
}
