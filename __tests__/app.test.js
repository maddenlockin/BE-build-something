import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';

describe('demo routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('POSTS a new material', aysnc () => {
    const material = {
      material: 'linen',
      piece: 'pants',
      color: 'cream',
      have: true,
    };
    const res = await (request(app).post('api/v1/clothing-inventory')).send(material);

    expect(res.body).toEqual({
      id: '1',
      date: '04-01-2021',
      ...material,
    })
  });

  afterAll(() => {
    pool.end();
  });

});

