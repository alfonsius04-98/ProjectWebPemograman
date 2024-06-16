const db = require('../helpers/db_config')

exports.order = async (user_id, movie_name, seat, ticket, total, watch_at) => {
    return new Promise((resolve, reject) => {
        let queries = `
            INSERT INTO orders(user_id, movie_name, watch_at, seat, ticket, price, created_at) 
            VALUES(1,"${movie_name}","${watch_at}","${seat}",${parseInt(ticket)},${parseInt(total)},NOW())`
            console.log('2')
    
        db.query(queries, (err, result) => {
            console.log(result)
            if (err) {
                reject(err)
            }
            resolve(result)
        })
    })
}

exports.listOrder = (user_id = 1) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT o.*, u.username FROM orders o JOIN users u ON o.user_id = u.id WHERE o.user_id = ${user_id}`;

        db.query(query, (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
};

exports.listMovie = () => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM movies`; 

        db.query(query, (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
};

exports.updatePembayaran = (id, proof) => {
    return new Promise((resolve, reject) => {
        const query = `update orders set payment_proof = '${proof}' where id = ${id}`; 

        db.query(query, (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
};