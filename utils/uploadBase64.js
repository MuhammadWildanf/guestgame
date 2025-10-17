const { bucket } = require("../config/firebase");
const { v4: uuidv4 } = require("uuid");

async function uploadBase64Image(base64Data) {
  const fileName = `uploads/${uuidv4()}.png`;
  const file = bucket.file(fileName); // ✅ langsung pakai bucket

  const base64Image = base64Data.split(";base64,").pop();
  const buffer = Buffer.from(base64Image, "base64");

  await file.save(buffer, {
    metadata: { contentType: "image/png" },
    public: true,
  });

  const publicUrl = `https://storage.googleapis.com/${bucket.name}/${fileName}`;
  return publicUrl;
}

module.exports = { uploadBase64Image };
