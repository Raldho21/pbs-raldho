// Memanggil MySQL library yang diperlukan
const mysql = require('mysql');

// Variabel koneksi database
const db = mysql.createConnection({
  host: 'sql6.freesqldatabase.com',  // Alamat host database (biasanya 'localhost' jika database berjalan di mesin lokal)
  user: 'sql6702197',       // Nama pengguna database
  password: 'RsETY9pQ5Y',       // Kata sandi pengguna database (dalam contoh ini, password kosong)
  database: 'sql6702197'  // Nama database yang akan digunakan (misalnya, 'db_penjualan')
});

// Ekspor variabel koneksi database untuk digunakan di modul lain
module.exports = db;
