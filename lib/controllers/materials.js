import { Router } from 'express';
import Material from '../models/Material';

export default Router()
    .post('/', async (req, res, next) => {
        try {
            const entry = await Material.create(req.body);
            res.send(entry);
        } catch (err) {
            next(err);
        }
    });
