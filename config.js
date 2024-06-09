// Memanggil MySQL library yang diperlukan
const mysql = require('mysql');

// Variabel koneksi database
const db = mysql.createConnection({
  host: 'sql12.freesqldatabase.com',  // Alamat host database (biasanya 'localhost' jika database berjalan di mesin lokal)
  user: 'sql12712838',       // Nama pengguna database
  password: 'dYllccAMbK',       // Kata sandi pengguna database (dalam contoh ini, password kosong)
  database: 'sql12712838'  // Nama database yang akan digunakan (misalnya, 'db_penjualan')
});

// Ekspor variabel koneksi database untuk digunakan di modul lain
module.exports = db;
