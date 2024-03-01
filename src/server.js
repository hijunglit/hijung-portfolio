import express from "express";
import morgan from "morgan";
import globalRouter from "./router/globalRouter";

const PORT = 8080;

const cwd = process.cwd();
const app = express();
app.use(morgan("dev"));

app.set("views", cwd + "/src/views");
app.set("view engine", "pug");
app.use("/static", express.static("assets"));
app.use("/images", express.static(cwd + "/src/images"));
app.use("/", globalRouter);

const handleListen = () =>
  console.log(`✅ Server is listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListen);

/*************************** Reference ***************************/
// https://www.codewonders.dev/
// https://github.com/adenekan41/codewonders
