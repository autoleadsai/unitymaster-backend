const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// TEST ROUTE
app.get("/", (req, res) => {
  res.json({ status: "Backend is running 🚀" });
});

// LOGIN API (demo)
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email && password) {
    res.json({
      success: true,
      message: "Login successful",
      user: { email }
    });
  } else {
    res.status(400).json({
      success: false,
      message: "Email & password required"
    });
  }
});

// CONTACT FORM API
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  res.json({
    success: true,
    message: "Message received",
    data: { name, email, message }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
