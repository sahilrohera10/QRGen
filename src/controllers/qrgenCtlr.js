const qr = require("qrcode");

module.exports = { qrgen };

async function qrgen(req, res) {
  const { data } = req.body;

  try {
    const qrcode = await qr.toDataURL(data, {
      errorCorrectionLevel: "H",
      version: 5,
    });
    console.log("QR generated");
    res.status(200).json({ qrCode: qrcode });
  } catch (error) {
    res.status(400).json({ error: error });
  }
}
