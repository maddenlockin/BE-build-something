const pool = require('../lib/utils/pool.js');
//const twilio = require('../lib/utils/twilio.js');
const setup = require('../data/setup.js');
const request = require('supertest');
const app = require('../lib/app.js');

// jest.mock('twilio', () => () => ({
//     messages: {
//         create: jest.fn(),
//     },
// }));

describe('routes', () => {

    beforeEach(() => {
        return setup(pool);
    });
    const material = {
        //date: currentDate, 
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
        const item = await Item.insert(material);
        return request(app)
            .get('/api/v1/clothing-inventory')
            .then((res) => {
                expect(res.body).toEqual(item);
            });
    });
});


