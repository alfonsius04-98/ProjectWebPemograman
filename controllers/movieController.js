const movie = require('../models/movie')

exports.orderTicket = async (req, res) => {
    console.log(req.body)
    try {
        const {
            user_id,
            movie_name,
            seat,
            ticket,
            total,
            watch_at
        } = req.body
    
        const data = await movie.order(user_id,movie_name,seat,ticket,total,watch_at)
        console.log(data.affectedRows)
    } catch (error) {
        
    }


    // if (!data.success) {
    //     req.flash('error', data.msg)
    //     res.redirect('/')
    // } else {
    //     res.redirect('/')
    // }
}

exports.list = async (req, res) => {
    try {
        const data = await movie.listOrder();
        console.log('Data from DB:', data); // Log data to ensure it's correct
        res.render('history', { title: 'History Pembelian', data });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Error fetching data');
    }
}

exports.listMovies = async (req, res) => {
    try {
        const data = await movie.listMovie();
        console.log('Data from DB:', data); // Log data to ensure it's correct
        res.render('manage', { title: '', data });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Error fetching data');
    }
}

exports.updatepayment = async (req, res) => {
    try {
        const { id, proof } = req.body
        const data = await movie.updatePembayaran(id, proof);
        console.log('Data from DB:', data); // Log data to ensure it's correct
        res.redirect('/list-order')
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Error fetching data');
    }
}