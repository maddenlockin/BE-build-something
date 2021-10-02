const { Router } = require('express');
//const Material = require('../models/Material.js');
const MaterialService = require('../services/MaterialService.js');

module.exports = Router()
    .post('/', async (req, res, next) => {
        try {
            const entry = await MaterialService.createItem(req.body);
            res.send(entry);
        } catch (err) {
            next(err);
        }
    })
    .get('/:id', async (req, res, next) => {
        try {
            const id = req.params.id;
            const item = await MaterialService.getById(id);
            res.send(item);
        } catch (err) {
            next(err);
        }
    })

    .get('/', async (req, res, next) => {
        console.log('controller', req.body);
        try {
            const items = await MaterialService.getAllItems();
            res.send(items);
        } catch (err) {
            next(err);
        }
    })

    //.patch
    //.delete
;
