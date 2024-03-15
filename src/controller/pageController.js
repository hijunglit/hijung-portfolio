export const handleHome = (req, res) => {
  const { url } = req;
  const isHome = url === "/";
  console.log(isHome);
  return res.render("home", { pageTitle: "hijung portfolio | Home", isHome });
};
export const handleAbout = (req, res) => {
  return res.render("about", { pageTitle: "hijung portfolio | About" });
};
export const handleProject = (req, res) => {
  const project = [
    {
      name: "youtube clone",
      img: "/static/images/youtube-sample.gif",
      desc: "crud를 구현한 동영상 플랫폼 클론 프로젝트",
      tools: ["node.js", "mongodb", "aws", "fly.io"],
      link: "https://youtube-2024.fly.dev",
    },
    {
      name: "portfolio",
      img: "/static/images/portfolio__sample.gif",
      desc: "프로젝트들을 보여줄 수 있는 웹 포트폴리오",
      tools: ["pug", "webpack", "responsive", "fly.io"],
      link: "https://hijung-portfolio.fly.dev",
    },
    {
      name: "hero collection",
      img: "/static/images/hero-collection__sample.gif",
      desc: "usestate, useeffect 훅을 이용한 히어로 캐릭터 컬렉션 프로젝트",
      tools: ["react.js", "react-router", "github.io"],
      link: "https://hijunglit.github.io/toy-project",
    },
  ];
  return res.render("projects", {
    pageTitle: "hijung portfolio | Projects",
    project,
  });
};
export const handleContact = (req, res) => {
  return res.render("contact", { pageTitle: "hijung portfolio | Contact" });
};
