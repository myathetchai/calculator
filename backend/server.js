const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5001;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/add", async (req, res) => {
  const num1 = parseFloat(req.body.num1);
  const num2 = parseFloat(req.body.num2);
  const result = num1 + num2;
  res.status(200).json({ result: result });
});

app.post("/subtract", async (req, res) => {
  const num1 = parseFloat(req.body.num1);
  const num2 = parseFloat(req.body.num2);
  const result = num1 - num2;
  res.status(200).json({ result: result });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
