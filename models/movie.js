const db = require('../helpers/db_config')

exports.orderTicket = async (data) => {
    console.log('test12')
    return new Promise((resolve, reject) => {
        let queries = `insert into orders(user_id, movie_name, watch_at, seat, ticket, price, payment_proof, created_at) values(1,'${data.movie_name}', '${data.watch_at}', '${data.seat}', ${data.ticket}, ${data.total}, '${data.payment_proof}',NOW())`
        console.log('test1233', queries)
        // const { } = data
        // const bind = [1, movie_name, watch_at, seat, ticket, total, payment_proof]
        db.query(queries, (err, result) => {
            console.log('test')
            if (err) {
                console.log(err)
                reject(err)
            }

            resolve(result)
        })
    })
}