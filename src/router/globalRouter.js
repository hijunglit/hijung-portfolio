import express from "express";
import {
  handleHome,
  handleAbout,
  handleProject,
  handleDetail,
  handleContact,
} from "../controller/pageController";

const globalRouter = express.Router();

globalRouter.get("/", handleHome);
globalRouter.get("/about", handleAbout);
globalRouter.get("/projects", handleProject);
globalRouter.get("/projects/:id/detail", handleDetail);
globalRouter.get("/contact", handleContact);

export default globalRouter;
