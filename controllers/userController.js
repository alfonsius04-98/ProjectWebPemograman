const user = require('../models/user')

exports.register = async (req, res) => {
    try {
        const { username, email, password } = req.body
        const data = await user.register(username, email, password)
        console.log('Data from DB:', data); // Log data to ensure it's correct
        res.redirect('/users/login-page')
    } catch (error) {
        console.error('Error fetching data:', error);
        res.redirect('/users/register-page');
    }
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body
        const data = await user.login(email, password)
        req.session.user = data[0]
        console.log('Data from DB:', data); // Log data to ensure it's correct
        res.redirect('/')
    } catch (error) {
        console.error('Error fetching data:', error);
        res.redirect('/login');
    }
}

exports.logout = async (req, res) => {
    try {
        req.session.user = null
        res.redirect('/')
    } catch (error) {
        console.error('Error fetching data:', error);
        res.redirect('/login');
    }
}