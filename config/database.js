const mysql = requirel('mysql');
//Buat Konfigurasi Koneksi
const koneksi = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database : 'dbmovie',
        multipleStatements: true
});
// Koneksi database
koneksi.connect((err) => {
    if (err) throw err;
    console.log('MySQL Connected...');
})
module.exports = koneksi;
