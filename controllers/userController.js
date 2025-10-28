const { db } = require("../config/firebase");
// const { uploadBase64Image } = require("../utils/uploadBase64");

exports.saveUser = async (req, res) => {
  try {
   const { nama, email } = req.body;
   if (!nama || !email) {
      return res.status(400).json({ success: false, message: "Nama dan email wajib diisi." });
    }

    // const fotoUrl = await uploadBase64Image(foto);
    const newRef = db.ref("users").push();

    await newRef.set({
      nama,
       email,
      // foto: fotoUrl,
      timestamp: Date.now(),
    });

    res.json({ success: true, message: "Data berhasil disimpan!"});
  } catch (error) {
    console.error("❌ Error saveUser:", error);
    res.status(500).json({ message: "Terjadi kesalahan server" });
  }
};
