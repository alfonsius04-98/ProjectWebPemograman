const db = require('../helpers/db_config')

exports.register = async (username, email, password) => {
    return new Promise((resolve, reject) => {
        let queries = `INSERT INTO users(username, password, email) VALUES('${username}', '${password}', '${email}')`

        db.query(queries, (err, result) => {
            if (err) {
                reject(err)
            }

            resolve(result)
        })
    })
}

exports.login = async (email, password) => {
    return new Promise((resolve, reject) => {
        let queries = `SELECT * FROM users WHERE email = '${email}' AND password = '${password}'`
        
        db.query(queries, (err, result) => {
            if (err) {
                reject(err)
            }

            resolve(result)
        })
    })
}