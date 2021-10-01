const { Router } = require('express');
const Material = require('../models/Material.js');

module.exports = Router()
    .post('/', async (req, res, next) => {
        try {
            const entry = await Material.create(req.body);
            res.send(entry);
        } catch (err) {
            next(err);
        }
    });
