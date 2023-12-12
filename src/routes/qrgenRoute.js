const app = require("express");

const { qrgen, qrgenimage } = require("../controllers/qrgenCtlr");

const route = app.Router();

route.post("/generate", qrgen);

module.exports = route;
