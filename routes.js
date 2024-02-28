const controller = require('./controller');

module.exports = function(app) {
    app.post('/api/form', controller.create)

    app.get('/api/form', function(req, res) {
        res.send('Test')
    })
}