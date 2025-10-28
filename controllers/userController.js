const { db } = require("../config/firebase");
// const { uploadBase64Image } = require("../utils/uploadBase64");

exports.saveUser = async (req, res) => {
  try {
    const { nama, email } = req.body;

    // Validasi input
    if (!nama || !email) {
      return res.status(400).json({
        success: false,
        message: "Nama dan email wajib diisi.",
      });
    }

    // 🔹 Buat data baru di Firebase
    const newRef = db.ref("users").push();
    await newRef.set({
      nama,
      email,
      // foto: fotoUrl, // nanti bisa diaktifkan kembali
      timestamp: Date.now(),
    });

    // 🔹 Kirim response dengan userId
    return res.json({
      success: true,
      userId: newRef.key,
      message: "Data berhasil disimpan!",
    });
  } catch (error) {
    console.error("❌ Error saveUser:", error);
    res.status(500).json({
      success: false,
      message: "Terjadi kesalahan server",
    });
  }
};
