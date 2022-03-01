const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 4009;
const router = require("./src/router");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("ok");
});

app.use("/api/v1", router);

app.listen(PORT, console.log(`port ${PORT}`));
