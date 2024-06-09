// Memanggil library Express untuk membuat aplikasi server
const express = require('express');

// Memanggil library bodyParser untuk membantu dalam mengelola data yang dikirimkan oleh klien
const bodyParser = require('body-parser');

// Memanggil konfigurasi database dari file config.js
const db = require('./config.js');

// Membuat aplikasi Express
const app = express();

// Menetapkan nomor port yang akan digunakan oleh server
const port = 3002;

// Memanggil fungsi response yang berisi konfigurasi untuk menangani respons HTTP
const response = require('./request.js');

// Middleware for parsing JSON bodies
app.use(bodyParser.json());

// Definisi endpoint POST '/dosen' untuk menambahkan data dosen baru
app.post("/dosen", (req, res) => {
    const { id_dosen, nama, gigit } = req.body;
    const sql = `INSERT INTO dosen (id_dosen, nama, gigit) VALUES (${id_dosen}, '${nama}', '${gigit}')`;
    db.query(sql, (error, fields) => {
        if (error) {
            response(500, null, `Error: ${error.message}`, res);
        } else if (fields?.affectedRows) {
            const data = {
                isSuccess: fields.affectedRows,
                id: fields.insertId,
            };
            response(200, data, "Data dosen berhasil disimpan", res);
        }
    });
});

// Definisi endpoint POST '/matakuliah' untuk menambahkan data matakuliah baru
app.post("/matakuliah", (req, res) => {
    const { id_matakuliah, nama_matakuliah, kode_matakuliah } = req.body;
    const sql = `INSERT INTO matakuliah (id_matakuliah, nama_matakuliah, kode_matakuliah) 
                 VALUES (${id_matakuliah}, '${nama_matakuliah}', '${kode_matakuliah}')`;
    db.query(sql, (error, fields) => {
        if (error) {
            response(500, null, `Error: ${error.message}`, res);
        } else if (fields?.affectedRows) {
            const data = {
                isSuccess: fields.affectedRows,
                id: fields.insertId,
            };
            response(200, data, "Data matakuliah berhasil disimpan", res);
        }
    });
});

// Definisi endpoint POST '/mahasiswa' untuk menambahkan data mahasiswa baru
app.post("/mahasiswa", (req, res) => {
    const { id_siswa, nama, nim } = req.body;
    const sql = `INSERT INTO mahasiswa (id_siswa, nama, nim) VALUES (${id_siswa}, '${nama}', '${nim}')`;
    db.query(sql, (error, fields) => {
        if (error) {
            response(500, null, `Error: ${error.message}`, res);
        } else if (fields?.affectedRows) {
            const data = {
                isSuccess: fields.affectedRows,
                id: fields.insertId,
            };
            response(200, data, "Data mahasiswa berhasil disimpan", res);
        }
    });
});

// Definisi endpoint POST '/dosen_matakuliah' untuk menambahkan data relasi dosen dan matakuliah baru
app.post("/dosen_matakuliah", (req, res) => {
    const { id_dosen, id_matakuliah } = req.body;
    const sql = `INSERT INTO dosen_matakuliah (id_dosen, id_matakuliah) 
                 VALUES (${id_dosen}, ${id_matakuliah})`;
    db.query(sql, (error, fields) => {
        if (error) {
            response(500, null, `Error: ${error.message}`, res);
        } else if (fields?.affectedRows) {
            const data = {
                isSuccess: fields.affectedRows,
                id: fields.insertId,
            };
            response(200, data, "Data relasi dosen dan matakuliah berhasil disimpan", res);
        }
    });
});

// Definisi endpoint POST '/mahasiswa_matakuliah' untuk menambahkan data relasi mahasiswa dan matakuliah baru
app.post("/mahasiswa_matakuliah", (req, res) => {
    const { id_siswa, id_matakuliah } = req.body;
    const sql = `INSERT INTO mahasiswa_matakuliah (id_siswa, id_matakuliah) 
                 VALUES (${id_siswa}, ${id_matakuliah})`;
    db.query(sql, (error, fields) => {
        if (error) {
            response(500, null, `Error: ${error.message}`, res);
        } else if (fields?.affectedRows) {
            const data = {
                isSuccess: fields.affectedRows,
                id: fields.insertId,
            };
            response(200, data, "Data relasi mahasiswa dan matakuliah berhasil disimpan", res);
        }
    });
});

// Add a route to handle GET requests for fetching data dosen
app.get('/dosen', (req, res) => {
    const sql = 'SELECT * FROM dosen';
    db.query(sql, (error, result) => {
        if (error) {
            response(500, null, `Error: ${error.message}`, res);
        } else {
            response(200, result, 'Data dosen berhasil diambil', res);
        }
    });
});

// Add a route to handle GET requests for fetching data matakuliah
app.get('/matakuliah', (req, res) => {
    const sql = 'SELECT * FROM matakuliah';
    db.query(sql, (error, result) => {
        if (error) {
            response(500, null, `Error: ${error.message}`, res);
        } else {
            response(200, result, 'Data matakuliah berhasil diambil', res);
        }
    });
});

// Add a route to handle GET requests for fetching data mahasiswa
app.get('/mahasiswa', (req, res) => {
    const sql = 'SELECT * FROM mahasiswa';
    db.query(sql, (error, result) => {
        if (error) {
            response(500, null, `Error: ${error.message}`, res);
        } else {
            response(200, result, 'Data mahasiswa berhasil diambil', res);
        }
    });
});

// Add a route to handle GET requests for fetching data dosen_matakuliah
app.get('/dosen_matakuliah', (req, res) => {
    const sql = 'SELECT * FROM dosen_matakuliah';
    db.query(sql, (error, result) => {
        if (error) {
            response(500, null, `Error: ${error.message}`, res);
        } else {
            response(200, result, 'Data relasi dosen dan matakuliah berhasil diambil', res);
        }
    });
});

// Add a route to handle GET requests for fetching data mahasiswa_matakuliah
app.get('/mahasiswa_matakuliah', (req, res) => {
    const sql = 'SELECT * FROM mahasiswa_matakuliah';
    db.query(sql, (error, result) => {
        if (error) {
            response(500, null, `Error: ${error.message}`, res);
        } else {
            response(200, result, 'Data relasi mahasiswa dan matakuliah berhasil diambil', res);
        }
    });
});

// Mendengarkan permintaan pada port yang ditetapkan
app.listen(port, () => {
    console.log(`Running on port ${port}`);
});
