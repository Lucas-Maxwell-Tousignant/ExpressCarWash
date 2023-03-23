const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("http://localhost:5000/", (req, res) => {
  res.send("Hello from the server!");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
