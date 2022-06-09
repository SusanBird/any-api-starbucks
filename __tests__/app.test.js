const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const Starbucks = require('../lib/models/Starbucks');

describe('starbucks routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/starbucks should return a list of drinks', async () => {
    const res = await request(app).get('/starbucks');
    const starbucksData = Starbucks.getAll();
    const expected = (await starbucksData).map((drink) => {
      return { name: drink.name, calories: drink.calories };
    });
    expect(res.body).toEqual(expected);
  });

  it('/starbucks/:id should return drink detail', async () => {
    const res = await request(app).get('/starbucks/2');
    const mocha = {
      id: '2',
      name: 'Mocha Frappuccino',
      calories: 280,
      fat: 3,
      carb: 60,
      protein: 4,
      sodium: 220,
    };
    expect(res.body).toEqual(mocha);
  });
  

  afterAll(() => {
    pool.end();
  });
});
