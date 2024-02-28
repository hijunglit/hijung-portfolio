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
  return res.render("projects", { pageTitle: "hijung portfolio | Projects" });
};
export const handleContact = (req, res) => {
  return res.render("contact", { pageTitle: "hijung portfolio | Contact" });
};
