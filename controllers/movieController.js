const movie = require('../models/movie')
exports.order = async (req, res) => {
    try {
        console.log(req.body)
        const data = await movie.orderTicket(req.body)
        console.log('hasil post data', data)
        if (data.affectedRows == 0) {
            console.log('test')
            res.redirect('/')
        }
        res.redirect('/list-order')
    } catch (error) {
        res.redirect('/')
    }
}