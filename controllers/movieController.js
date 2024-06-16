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
        console.log(error)
        res.redirect('/')
    }
}
exports.listOrder = async (req, res) => {
    try {
        const data = await movie.listOrder()
        res.render('history', { title: "History", data })
    } catch (error) {
        console.log(error)
        res.redirect('/')
    }
}