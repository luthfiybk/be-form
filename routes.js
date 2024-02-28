const controller = require('./controller');

module.exports = function(app) {
    app.post('/api/form', controller.create)
}