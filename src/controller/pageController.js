const projects = [
  {
    key: "youtube",
    name: "youtube clone",
    preview: "/static/images/youtube-sample.gif",
    thumb: "/static/images/youtube__thumbnail.jpg",
    desc: "crud를 구현한 동영상 플랫폼 클론 프로젝트",
    tools: ["node.js", "mongodb", "aws", "fly.io"],
    goals: [
      "CRUD 기능을 구현해 웹 개발의 전체적인 흐름에 대한 이해도 향상을 위해",
      "데이터베이스 프로그램을 사용해 DB 조작 및 쿼리를 사용하기 위해",
      "관계형 데이터 베이스에 대해 이해하기 위해",
      "github의 OAuth 기능을 구현하여 auth 시스템을 이해하기 위해",
    ],
    features: [
      "github 회원가입",
      "댓글 추가/삭제",
      "동영상 업로드/삭제/수정",
      "유저 프로필 등록",
    ],
    url: "https://youtube-2024.fly.dev",
    github: "https://github.com/hijunglit/youtube-2024",
  },
  {
    key: "portfolio",
    name: "portfolio",
    preview: "/static/images/portfolio__sample.gif",
    thumb: "/static/images/portfolio__thumbnail.jpg",
    desc: "프로젝트들을 보여줄 수 있는 웹 포트폴리오",
    tools: ["pug", "webpack", "responsive", "fly.io"],
    goals: [
      "진행한 프로젝트 들을 모으고 구체적인 내용을 설명하는 공간을 만들기 위해 제작",
    ],
    features: [
      "반응형 웹",
      "Home 페이지",
      "About 페이지",
      "Projects 페이지",
      "Contact 페이지",
    ],
    url: "https://hijung-portfolio.fly.dev",
    github: "https://github.com/hijunglit/hijung-portfolio",
  },
  {
    key: "hero",
    name: "hero collection",
    preview: "/static/images/hero-collection__sample.gif",
    thumb: "/static/images/hero__thumbnail.jpg",
    desc: "usestate, useeffect 훅을 이용한 히어로 캐릭터 컬렉션 프로젝트",
    tools: ["react.js", "react-router", "github.io"],
    goals: [
      "react.js hook에 대한 이해를 위해 진행",
      "react.js의 DOM 제어방식을 경험하기 위해",
    ],
    features: ["반응형 웹", "SPA 라우팅", "useRef hook"],
    url: "https://hijunglit.github.io/toy-project",
    github: "https://github.com/hijunglit/toy-project",
  },
];
export const handleHome = (req, res) => {
  const { url } = req;
  const isHome = url === "/";
  return res.render("home", { pageTitle: "hijung portfolio | Home", isHome });
};
export const handleAbout = (req, res) => {
  return res.render("about", { pageTitle: "hijung portfolio | About" });
};
export const handleProject = (req, res) => {
  return res.render("projects", {
    pageTitle: "hijung portfolio | Projects",
    project: projects,
  });
};
export const handleDetail = (req, res) => {
  const { id } = req.params;
  let project = projects.filter((project) => project.key === id);
  project = project[0];
  return res.render("detail", { pageTitle: "detail", project });
};
export const handleContact = (req, res) => {
  return res.render("contact", { pageTitle: "hijung portfolio | Contact" });
};
