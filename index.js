const express = require("express");
const axios = require("axios");

const cors = require("cors");

const app = express();

const challengesRoute = require("./routes/challengesRoute");

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_, res) => {
  res.send("Health Check");
});

app.use("/challenges", challengesRoute);

app.post("/execute", async (req, res) => {
  try {
    const response = await axios.post(
      "https://api.jdoodle.com/v1/execute",
      req.body
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server has started @ http://localhost:${port}`);
});
