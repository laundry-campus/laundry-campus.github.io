// js/firebase.js - Radar (#3)
// Satu-satunya tempat koneksi ke Firebase. File lain cukup import dari sini.
//
// TODO (#3, Radar):
// 1. Buat proyek Firebase, aktifkan Firestore dan Authentication (email/password).
// 2. Tempel konfigurasi Firebase di sini, lalu export:  export { db, auth };
// 3. Lengkapi susunan data di bawah, supaya Rafi dan Radar memakai nama yang sama.
//
// Susunan data (usulan dari proposal, final ditentukan Radar):
//   nota/{id}           data lengkap pesanan, hanya untuk pengelola yang login:
//                       nomor nota, nama, nomor WA, jenis layanan, berat, jumlah potong,
//                       catatan, status, jam tiap tahap, perkiraan selesai
//   status/{nomorNota}  data untuk halaman Lacak: jenis layanan, berat, status,
//                       jam tiap tahap, perkiraan selesai (tanpa nama dan nomor WA)
//   layanan/{id}        daftar layanan dan harga
//   Nilai status (urut): ...   contoh: Diterima, Dicuci, Siap diambil, Selesai
//
// Catatan untuk semua:
// - File yang memakai import harus dimuat dengan <script type="module">.
// - Buka website lewat Live Server (tombol Go Live di VS Code), jangan double-click
//   file HTML, karena import tidak jalan kalau dibuka langsung dari file.
