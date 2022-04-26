
// read data / get data
app.get('/api/movies', (req, res) => {
    // buat query sql
    const querySql = 'SELECT * FROM movies';

    // jalankan query
    koneksi.query(querySql, (err, rows, field) => {
        // error handling
        if (err) {
            return res.status(500).json({ message: 'Ada kesalahan', error: err });
        }

        // jika request berhasil
        res.status(200).json({ success: true, data: rows });
    });
});

