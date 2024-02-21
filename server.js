import express from "express";
const app = express();
const PORT = 8080;
app.get("/", (req, res) => {
  console.log(`server listening on port ${PORT}`);
});
app.listen(PORT);
