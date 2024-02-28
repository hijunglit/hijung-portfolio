import express from "express";
import morgan from "morgan";
import globalRouter from "./router/globalRouter";

const PORT = 8080;

const app = express();
app.use(morgan("dev"));

app.set("views", process.cwd() + "/src/views");
app.set("view engine", "pug");
app.use("/", globalRouter);
app.use("/static", express.static(process.cwd() + "/src/client"));
app.use("/images", express.static(process.cwd() + "/src/images"));

const handleListen = () =>
  console.log(`✅ Server is listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListen);

/*************************** Reference ***************************/
// https://www.codewonders.dev/
// https://github.com/adenekan41/codewonders
