import SiteHeader from './SiteHeader';

const portfolioPdf = '/최인규_포트폴리오.pdf';

const projects = [
  {
    title: 'DOGTOR',
    label: 'Team · 2025.08 - 2025.12',
    summary: '온디바이스 AI 기반 애완견 케어 서비스',
    context: 'OceanLight와 협업한 2025학년도 2학기 캡스톤 프로젝트로, 반려견 케어와 동물병원 연계를 돕는 온디바이스 AI 서비스를 구현했습니다. 2026 AI Expo Korea 국제인공지능대전에 3일간 출품되었습니다.',
    role: 'AI · AIBE · Infra · PM',
    impact: '7B 모델 15GB를 4.1GB GGUF로 경량화하고 FastAPI inference 서버에서 preload 구조를 적용했습니다.',
    evidence: [
      ['상황', '랜덤 삽입·제거 증강 후 모델 답변의 문맥이 깨지고 정확도가 감소'],
      ['해결방향', '문맥과 의미를 살릴 수 있는 paraphrasing과 역번역 증강으로 다시 학습'],
      ['결과', '문장 의미와 문맥이 깨지는 문제를 줄이고 질문 의도와 더 자연스럽게 연결되는 출력 확인']
    ],
    points: [
      'Qwen2.5-7B-Instruct 모델을 llama.cpp 기반 4bit GGUF로 양자화',
      '수의사 대화 QA 데이터 2,000개를 전처리하고 paraphrasing, 역번역으로 증강',
      'API 요청마다 모델을 재로드하지 않도록 lifespan 기반 LLM preload 구성'
    ],
    sections: [
      ['온디바이스-AI 개발', ['산학연계 회사 과제 내용 완수를 위해 온디바이스 AI 개발', 'llama.cpp를 활용해 7B 모델 약 15GB를 4bit GGUF 4.1GB로 양자화']],
      ['데이터셋 전처리', ['실제 수의사 대화 QA 데이터 전처리와 증강 진행', '기존 데이터 2,000개를 4배 증강하고 중복 데이터 삭제와 질문 paraphrasing 진행']],
      ['모델 Lifespan 설정', ['FastAPI 기반 inference 서버 구축', '서버 startup 단계에서 LLM 모델을 preload해 API 요청마다 모델 재로드 방지']]
    ],
    stack: ['FastAPI', 'llama.cpp', 'Qwen2.5', 'Docker', 'EC2']
  },
  {
    title: 'Fresh Money',
    label: 'Team · 2025.03 - 2025.07',
    summary: '청년정책 및 재정관리 추천 서비스',
    context: '2025학년도 1학기 캡스톤 프로젝트로, 사회초년생의 재정관리를 돕기 위해 투자 방식, 금융상품, 청년지원정책 추천과 자산 관련 챗봇을 제공했습니다.',
    role: 'AI · AIBE · Infra',
    impact: '은행상품 데이터와 청년정책 문서를 RAG로 연결해 추천 결과의 근거성과 확장성을 높였습니다.',
    evidence: [
      ['상황', 'OpenAI API를 사용하는 모든 기능에서 서버가 프론트에 문자열을 그대로 반환해 422 오류 발생'],
      ['해결방향', 'LangChain 출력 강제 메서드 대신 예시 JSON을 넣은 Few-Shot 프롬프팅 적용'],
      ['결과', '기능별 10회 호출 테스트에서 422 오류 해결 및 응답 형식 단일화']
    ],
    points: [
      '제1금융권 금융상품 크롤링 후 임베딩 및 FAISS 벡터 검색 구축',
      'LangChain LCEL과 RetrievalQA 체인 기반 RAG 파이프라인 작성',
      'Few-shot 프롬프팅으로 JSON 응답 안정화 및 422 오류 해결'
    ],
    sections: [
      ['핵심 기능', ['투자 추천, 금융상품 추천, 청년지원정책 추천에 RAG 기법 도입', '공식 신용등급 계산법 기반 신용등급 분석과 자산 관련 FM 챗봇 제공']],
      ['RAG 구축', ['제1금융권 은행상품을 크롤링해 임베딩·벡터화', 'LangChain RecursiveCharacterTextSplitter로 문서 청크 분할 후 FAISS 벡터 검색 활성화']],
      ['LangChain 기반 모델 파이프라인 구축', ['LCEL 체이닝으로 RAG 파이프라인 작성', 'RetrievalQA 체인으로 RAG 파이프라인을 캡슐화하고 StrOutputParser로 객체 문자열 해독']]
    ],
    stack: ['FastAPI', 'MongoDB', 'LangChain', 'FAISS', 'OpenAI API', 'Docker', 'Nginx']
  },
  {
    title: 'LightBox',
    label: 'Team · 2025.09 - 2025.11',
    summary: '실시간 졸음운전 감지 서비스',
    context: '2025 전국 고등학교 동아리 SW 경연대회 본선 프로젝트로, YOLO와 MediaPipe FaceMesh를 활용해 눈 감김을 감지하고 주행 종료 후 졸음 발생 구간을 리와인드 분석으로 제공했습니다.',
    role: 'AI · AIBE · Infra',
    impact: 'GPU 제약 상황에서도 CPU 추론 파이프라인을 조정해 실시간 처리 안정성을 확보했습니다.',
    evidence: [
      ['상황', 'EC2 AMI 환경이 GPU 드라이버와 호환되지 않아 CUDA Runtime 충돌 발생'],
      ['해결방향', 'GPU 사용을 포기하고 CPU 기반 추론 구조로 변경, YOLO imgsz 조정'],
      ['결과', 'CPU 환경에서도 실시간 처리 안정성을 확보해 작품 출품']
    ],
    points: [
      '눈 주변 6개 랜드마크와 EAR 알고리즘으로 사용자별 눈 폭 차이 대응',
      'YOLO 기반 얼굴 및 눈 영역 crop으로 오탐 감소',
      '주행 중 졸음 지표를 수집하고 시간 축 기준 졸음도 그래프 생성',
      'CPU 환경에서 imgsz 조정으로 실시간성과 감지 정확도 균형 확보'
    ],
    sections: [
      ['MediaPipe 기반 눈 감김 감지', ['눈 근처 6개 랜드마크 기준으로 감김 퍼센트 계산', '첫 시작 5초 EAR 평균값을 임계값으로 지정해 사람마다 다른 눈 폭에도 감지']],
      ['운전 이후 졸음도 리와인드 제공', ['주행 중 EAR 기반 졸음 지표 수집', '운전 종료 후 졸음 발생 구간 리와인드 분석과 시간 축 기준 졸음도 그래프 제공']],
      ['YOLO 기반 얼굴·눈 크롭', ['추론 정확도를 높이기 위해 얼굴과 눈 영역 crop', '사용자 화면에도 눈 감지 상태를 보여주며 내부 테스트 기준 오탐 감소']]
    ],
    stack: ['YOLOv11', 'MediaPipe', 'FastAPI', 'MongoDB', 'EC2']
  },
  {
    title: 'Swagger Inspecter',
    label: 'Personal · 2026.01 - 2026.02',
    summary: 'OpenAPI RAG 분석 챗봇 서비스',
    context: '기능이 많은 백엔드 API 문서를 챗봇 형태로 탐색할 수 있도록 만든 개인 프로젝트입니다. 백엔드 외 팀원도 기술 명세와 요청 방식을 빠르게 확인할 수 있게 하는 데 집중했습니다.',
    role: 'Agent · Backend · AI',
    impact: '문서 신뢰도와 threshold를 응답에 반영해 사실과 다른 API 안내가 섞이는 문제를 줄였습니다.',
    evidence: [
      ['상황', 'OpenAPI 관련 질문에 질문과 유사하지 않은 기능들이 섞여 출력되는 문제 발생'],
      ['해결방향', '각 문서마다 질문에 대한 신뢰도를 도입하고 threshold 기반 검색 구조로 수정'],
      ['결과', '사용자에게 참고 문서와 신뢰도를 함께 보여주며 믿을 수 있는 문서 추천']
    ],
    points: [
      'MongoDB Vector Search와 text-embedding-3-small 기반 문서 임베딩',
      'OpenAPI 스펙 전체 주입 대신 검색 기반 응답으로 토큰 비용 절감',
      '참고 문서 신뢰도 표시와 threshold 조절로 응답 근거성 개선'
    ],
    sections: [
      ['Codex 기반 개발 효율 증대', ['Codex를 리팩터링, 디버깅, 반복 코드 정리에 활용', '단순 반복 작업을 줄여 주요 기능 구현에 집중']],
      ['RAG 기반 신뢰도 있는 답변 출력', ['MongoDB Vector Search와 text-embedding-3-small로 벡터화·임베딩 진행', '시스템 프롬프트에 OpenAPI 스펙을 넣지 않아 토큰 비용 절감']],
      ['Threshold 조절', ['지정된 신뢰도 임계치를 넘지 못하는 문서는 검색에서 제외', '임계치를 사용자가 직접 조절할 수 있도록 변경']]
    ],
    stack: ['FastAPI', 'MongoDB', 'text-embedding-3-small', 'ChatGPT Codex']
  }
];

const awards = [
  ['활동', '2026', 'AI Expo Korea 작품 출품', 'Dogtor 프로젝트를 2026 AI Expo Korea 국제인공지능대전에 3일간 출품'],
  ['수상', '2025', '교내 캡스톤 프로젝트 은상 · 동상', 'Fresh Money 은상, Dogtor 동상 수상'],
  ['수상', '2025', '전국 고등학교 동아리 SW 경진대회 장려', 'YOLO와 MediaPipe 기반 LightBox 프로젝트 수행'],
  ['수상', '2025', '제7회 데이터 크리에이터 캠프 장려', '500여 개 팀 중 6위 입상'],
  ['수상', '2025', 'SW-AI 장려', 'SW-AI 관련 프로젝트 활동으로 장려 수상'],
  ['수상', '2024', 'MS 해커그라운드 해커톤 장려', '해커톤 프로젝트 수행 및 장려 수상'],
  ['활동', '2026', '제3회 아진실리경진대회 작품 출품', '압축공기 누설 및 절전 알림시스템, LightBox 프로젝트를 경북교육청 부스에 출품'],
  ['활동', '2025', 'AI Expo Korea 부스 참가 및 운영', '2025 AI Expo Korea 국제인공지능대전 부스 참가 및 운영'],
  ['활동', '2025', '실리콘밸리 견학', '현지 기술 기업과 개발 문화를 직접 살펴보며 서비스 기획과 실행 방식의 차이를 경험'],
  ['활동', '2025', '퀀텀아이 인턴십', '현업 환경에서 개발 업무 흐름과 협업 방식, 결과물 관리 과정을 경험'],
  ['활동', '2025-2026', '선도부장', '2025~26학년도 선도부장 활동'],
  ['활동', '2024', 'Apple Foundation Program @ POSTECH', '3기 과정에서 제품 기획, 사용자 관점의 문제 정의, 팀 기반 프로토타이핑 수행'],
  ['활동', '2024', '의성 자기소개페이지 워크샵', '자기소개 페이지 제작 워크샵 참가'],
  ['자격', '2025', '정보처리기능사', '개발 기초 역량과 정보처리 전반에 대한 이해를 확인한 국가기술자격 보유'],
  ['자격', '2025', '파이썬 프로그래밍 3급', '한국인공지능아카데미 발급 민간자격증으로 Python 기초 활용 역량을 확인'],
  ['자격', '2025', '딥러닝활용자격증 3급', '한국인공지능아카데미 발급 민간자격증으로 딥러닝 기초 활용 역량을 확인']
];

const awardCategories = ['활동', '수상', '자격'];

const stacks = [
  ['AI / ML', 'Python, PyTorch, llama.cpp, FAISS, RAG, LangChain, OpenAI API, YOLOv11, MediaPipe'],
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
            <h1>
              <span className="titleLine">AI 모델을 실서비스에 통합하고 안정적으로 운용하는 것에</span>
              <span className="titleLine">집중하는 백엔드 개발자입니다.</span>
            </h1>
            <p>
              RAG, 온디바이스 AI, 실시간 추론 서버 구축 경험을 보유하고 있습니다.
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
              <span className="titleLine">실제 서비스 환경에서 문제를 마주하고</span>
              <span className="titleLine">해결하는 과정에 집중합니다.</span>
            </h2>
          </div>
          <p>
            프로젝트를 진행하며 모델을 설계하는 것보다, 실제 서비스 환경에서 문제를 마주하고 해결하는 과정이 더 재미있다는 것을 알게 되었습니다. 차후 AI 엔지니어링, 특히 모델을 안정적으로 서빙하고 운용하는 MLOps 방향으로 나아가고자 합니다.
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
                  <span>핵심 성과</span>
                  <strong>{project.impact}</strong>
                </div>
              </div>
              <div className="projectDetail">
                <ul>
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className="projectSubsections">
                  {project.sections.map(([label, items]) => (
                    <section className="projectSubsection" aria-label={`${project.title} ${label}`} key={label}>
                      <h4>{label}</h4>
                      <ul>
                        {items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </section>
                  ))}
                </div>
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
            <span className="titleLine">긴 글 읽어주셔서 감사합니다.</span>
            <span className="titleLine">최인규였습니다.</span>
          </h2>
          <p>공부하고 있는 내용들은 블로그와 깃허브에 기록중입니다.</p>
        </div>
        <div className="contactList" aria-label="연락처 목록">
          <a href={portfolioPdf} target="_blank" rel="noreferrer"><span>PDF</span><strong>최인규_포트폴리오.pdf</strong></a>
          <a href="mailto:chldlsrb08@naver.com"><span>Mail</span><strong>chldlsrb08@naver.com</strong></a>
          <a href="https://github.com/yeeeengyu" target="_blank" rel="noreferrer"><span>GitHub</span><strong>github.com/yeeeengyu</strong></a>
          <a href="https://yeeeengyu.tistory.com" target="_blank" rel="noreferrer"><span>Blog</span><strong>yeeeengyu.tistory.com</strong></a>
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
