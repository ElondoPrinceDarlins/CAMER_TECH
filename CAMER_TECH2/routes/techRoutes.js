const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Welcome to CAMER_TECH2 API" });
});

module.exports = router;
