const pool = require('../lib/utils/pool.js');
//const twilio = require('twilio');
const setup = require('../data/setup.js');
const request = require('supertest');
const app = require('../lib/app.js');
const Material = require('../lib/models/Material.js');
const MaterialService = require('../lib/services/MaterialService.js');

jest.mock('twilio', () => () => ({
    messages: {
        create: jest.fn(),
    },
}));

describe('routes', () => {

    beforeEach(() => {
        return setup(pool);
    });

    const material = { 
        material: 'linen',
        piece: 'pants',
        color: 'cream',
        have: true
    };

    it('POSTS a new item', () => {
        
        return request(app)
            .post('/api/v1/clothing-inventory')
            .send(material)
            .then((res) => {
                expect(res.body).toEqual({
                    id: '1',
                    ...material,
                });
            });
    });

    it('gets an item by id', async () => {
        const item = await Material.create(material);

        return request(app)
            .get('/api/v1/clothing-inventory/1')
            .then((res) => {
                expect(res.body).toEqual(item);
            });
    });

    it('gets all items in the database', async () => {
        const item = await Material.create(material);

        return request(app)
            .get('/api/v1/clothing-inventory')
            .then((res) => {
                //console.log(res.body);
                expect(res.body).toEqual([item]);
            });
    });

    it('updates an item in the database by its id', async () => {
        const entry = await Material.create(material);
        const updateEntry = {
            id: entry.id,
            material: 'cotton',
            piece: entry.piece,
            color: entry.color,
            have: entry.have
        };
        return request(app)
            .patch(`/api/v1/clothing-inventory/${entry.id}`)
            .send(updateEntry)
            .then((res) => {
                expect(res.body).toEqual(updateEntry);
            });
    });

    it('deletes an item from db by id', async () => {
        const item = await Material.create(material);

        return request(app)
            .delete(`/api/v1/clothing-inventory/${item.id}`)
            .then((res) => {expect(res.body).toEqual({});
            });
    });


});


