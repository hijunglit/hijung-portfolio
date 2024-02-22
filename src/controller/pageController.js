export const handleHome = (req, res) => {
  return res.render("home");
};
export const handleAbout = (req, res) => {
  return res.render("about", { pageTitle: "about" });
};
export const handleProject = (req, res) => {
  return res.render("projects", { pageTitle: "projects" });
};
export const handleContact = (req, res) => {
  return res.render("contact", { pageTitle: "contact" });
};
