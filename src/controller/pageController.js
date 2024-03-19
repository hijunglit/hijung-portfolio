const projects = [
  {
    key: "youtube",
    name: "youtube clone",
    img: "/static/images/youtube-sample.gif",
    desc: "crud를 구현한 동영상 플랫폼 클론 프로젝트",
    tools: ["node.js", "mongodb", "aws", "fly.io"],
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
    img: "/static/images/portfolio__sample.gif",
    desc: "프로젝트들을 보여줄 수 있는 웹 포트폴리오",
    tools: ["pug", "webpack", "responsive", "fly.io"],
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
    img: "/static/images/hero-collection__sample.gif",
    desc: "usestate, useeffect 훅을 이용한 히어로 캐릭터 컬렉션 프로젝트",
    tools: ["react.js", "react-router", "github.io"],
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
