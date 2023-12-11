const app = require("express");
const { qrgen } = require("../controllers/qrgenCtlr");

const route = app.Router();

route.post("/generate", qrgen);

module.exports = route;
