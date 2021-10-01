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

    it('POSTS a new item', () => {
        //console.log('runnning....');
        //const currentDate = new Date().toISOString().slice(0, 10);
        const material = {
            //date: currentDate, 
            material: 'linen',
            piece: 'pants',
            color: 'cream',
            have: true
        };

        return request(app)
            .post('/api/v1/clothing-inventory')
            .send(material)
            .then((res) => {
                expect(res.body).toEqual({
                    id: '1',
                    //date: '09-27-2021',
                    ...material,
                });
            });
    });
});


