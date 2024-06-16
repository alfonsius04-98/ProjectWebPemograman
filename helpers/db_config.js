const mysql = require('mysql')
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    pass: '',
    database: 'movie_db'
})

connection.connect((error) => {
    if (error) {
        console.log(error)
    } else {
        console.log('berhasil')
    }
})

module.exports = connection