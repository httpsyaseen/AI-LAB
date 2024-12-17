const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Path to the existing text file
const filePath = path.join(__dirname, "example.txt");

// Route to serve the file for download
app.get("/download", (req, res) => {
  res.download(filePath, "example.txt", (err) => {
    if (err) {
      console.error("Error downloading file:", err);
      res.status(500).send("Error downloading file");
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
