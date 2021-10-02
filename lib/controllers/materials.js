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
        try {
            const items = await MaterialService.getAllItems();
            res.send(items);
        } catch (err) {
            next(err);
        }
    })

    .patch('/:id', async (req, res, next) => {
        console.log(req.body);
        try {
            const id = req.params.id;
            const update = await MaterialService.updateItem(id, req.body.material, req.body.piece, req.body.color, req.body.have);
            res.send(update);
        } catch (err) {
            next(err);
        }
    })

//.patch
//.delete
;
