const express = require("express");
const app = express();
const PORT = 8002;

const qrRoute = require("./src/routes/qrgenRoute");

const cors = require("cors");

app.use(express.json());

app.use(cors());

// define routes
app.use("/qrcode", qrRoute);

app.listen(PORT, () => {
  console.log(`your server has started and running on port ${PORT}`);
});
