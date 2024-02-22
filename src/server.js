import express from "express";
import morgan from "morgan";

const app = express();

const PORT = 8080;

app.use(morgan("dev"));

const handleListen = () =>
  console.log(`Server is listening on port http://localhost:${PORT}`);

const handleHome = (req, res) => {
  return res.send("Home");
};

app.get("/", handleHome);
app.listen(PORT, handleListen);
