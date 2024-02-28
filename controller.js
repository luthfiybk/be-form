const  db = require("./connection");
const Form = db.form;
const Op = db.Sequelize.Op;
const sequelize = db.sequelize;

exports.create = (req, res) => {
    if (!req.body.nama_lengkap) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    if (!req.body.umur) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    if (!req.body.kontak) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const form = {
        nama_lengkap: req.body.nama_lengkap,
        umur: req.body.umur,
        kontak: req.body.kontak
    };

    Form.create(form)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured while creating the Form"
            });
        });
}