import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';

describe('routes', () => {
    beforeEach(() => {
        return setup(pool);
    });
  
    it('POSTS a new material', async () => {
        const currentDate = new Date().toISOString().slice(0, 10);
        const material = {
            date: currentDate, 
            material: 'linen',
            piece: 'pants',
            color: 'cream',
            have: true
        };

        const res = await request(app)
            .post('api/v1/clothing-inventory')
            .send(material);
        console.log(res);
        expect(res.body).toEqual({
            id: '1',
            date: '09-27-2021',
            ...material,
        });
    });
});


