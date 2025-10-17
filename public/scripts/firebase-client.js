// ✅ Gunakan Firebase compat SDK (untuk HTML biasa)
const firebaseConfig = {
  apiKey: "AIzaSyBylzHBeBLDAiqfBhiOAZ9DoZWTv_PahZs",
  authDomain: "guest-game-751f8.firebaseapp.com",
  databaseURL: "https://guest-game-751f8-default-rtdb.firebaseio.com",
  projectId: "guest-game-751f8",
  storageBucket: "guest-game-751f8.firebasestorage.app",
  messagingSenderId: "584723239505",
  appId: "1:584723239505:web:0efcbd7812cc47f3299e70",
  measurementId: "G-MMQTRTN6B0"
};

// 🔹 Inisialisasi Firebase
firebase.initializeApp(firebaseConfig);

// 🔹 Inisialisasi Database
const db = firebase.database();

// (opsional, kalau mau analytics)
try {
  firebase.analytics();
} catch (e) {
  console.log("Analytics tidak aktif di environment lokal");
}
