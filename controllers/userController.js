const { db } = require("../config/firebase");
const { uploadBase64Image } = require("../utils/uploadBase64");

exports.saveUser = async (req, res) => {
  try {
    const { nama, foto } = req.body;
    if (!nama || !foto) {
      return res.status(400).json({ message: "Nama dan foto wajib diisi." });
    }

    const fotoUrl = await uploadBase64Image(foto);
    const newRef = db.ref("users").push();

    await newRef.set({
      nama,
      foto: fotoUrl,
      timestamp: Date.now(),
    });

    res.json({ success: true, message: "Data berhasil disimpan!", fotoUrl });
  } catch (error) {
    console.error("❌ Error saveUser:", error);
    res.status(500).json({ message: "Terjadi kesalahan server" });
  }
};
