const request = require("supertest");
const express = require("express");

const app = express();
app.use(express.urlencoded({ extended: true }));

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

describe("calculator API", () => {
  it("should return sum of two numbers", async () => {
    const response = await request(app).post("/add").send("num1=5&num2=3");
    expect(response.body.result).toBe(8);
  });

  it("should return difference of two numbers", async () => {
    const response = await request(app).post("/subtract").send("num1=5&num2=3");
    expect(response.body.result).toBe(2);
  });
});
