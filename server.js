const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ status: "Backend is running 🚀" });
});

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  if (email === "admin@unitymaster.ai" && password === "123456") {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running"));
