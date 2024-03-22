const BASE_URL = "/static/images/";
const projects = [
  {
    key: "youtube",
    name: "youtube clone",
    preview: BASE_URL + "youtube-sample.gif",
    thumb: BASE_URL + "youtube__thumbnail.jpg",
    desc: "crud를 구현한 동영상 플랫폼 클론 프로젝트",
    tools: ["node.js", "mongodb", "aws", "fly.io"],
    goals: [
      "CRUD 기능을 구현해 웹 개발의 전체적인 흐름에 대한 이해도 향상을 위해 진행",
      "데이터베이스 프로그램을 사용해 DB 조작 및 쿼리를 사용하기 위해",
      "관계형 데이터 베이스에 대해 이해하기 위해",
      "github의 OAuth 기능을 구현하여 auth 시스템을 이해하기 위해",
    ],
    features: [
      {
        name: "github 회원가입",
        desc: "github OAuth 시스템을 이용한 회원가입 / 로그인 기능 구현",
        img: BASE_URL + "oauth.JPG",
      },
      {
        name: "댓글 추가/삭제",
        desc: "mongoose api, express api 을 이용한 비디오 검색/ 댓글 추가 삭제",
        img: BASE_URL + "registComment.JPG",
      },
      {
        name: "동영상 업로드/삭제/수정",
        desc: "mongoose api(create, findByIdAndDelete, findByIdAndUpdate)를 이용한 동영상 업로드",
        img: BASE_URL + "uploadVideo.JPG",
      },
      {
        name: "유저 프로필 등록",
        desc: "mongoose findByIdAndUpdate api 를 이용한 프로필 등록",
        img: BASE_URL + "registProfile.JPG",
      },
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
      {
        name: "반응형 웹",
        desc: "다양한 디바이스 화면에 대응하는 반응형 디자인",
        img: BASE_URL + "portfolio__responsive.gif",
      },
      {
        name: "About 페이지",
        desc: "개인정보, 스킬, 수료 정보 제공",
        img: BASE_URL + "portfolio__about.JPG",
      },
      {
        name: "Projects 페이지",
        desc: "진행 했던 프로젝트 정보 제공",
        img: BASE_URL + "portfolio__projects.JPG",
      },
      {
        name: "Detail 페이지",
        desc: "프로젝트의 세부정보 제공",
        img: BASE_URL + "portfolio__detail.JPG",
      },
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
      "React.js 숙련도 향상을 위해 진행",
      "react.js와 Css를 활용하여 인터렉티브한 웹 프로젝트를 진행하기 위해",
    ],
    features: [
      {
        name: "반응형 웹",
        desc: "다양한 디바이스 화면에 대응하는 반응형 디자인",
        img: BASE_URL + "hero__responsive.gif",
      },
      {
        name: "Home 페이지",
        desc: "Api를 호출해 20개의 히어로 데이터를 가져오기",
        img: BASE_URL + "hero__thumbnail.jpg",
      },
      {
        name: "Detail 페이지",
        desc: "Home 페이지에서 클릭한 히어로의 데이터를 라우터 Link의 state, useLocation을 이용하여 데이터 전달 및 사용",
        img: BASE_URL + "hero__detail.JPG",
      },
    ],
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
