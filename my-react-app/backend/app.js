const express = require("express");
const app = express();
const port = process.env.PORT || 5173;

app.get("/", (req, res) => {
  res.send("Hello from the server!");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
