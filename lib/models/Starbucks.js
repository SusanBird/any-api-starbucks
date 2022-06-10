const pool = require('../utils/pool');

module.exports = class Starbucks {
  id;
  name;
  calories;
  fat;
  carb;
  protein;
  sodium;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.calories = row.calories;
    this.fat = row.fat;
    this.carb = row.carb;
    this.protein = row.protein;
    this.sodium = row.sodium;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM starbucks;');
    return rows.map((row) => new Starbucks(row));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM starbucks WHERE id=$1;', [id]);
    if (!rows[0]) return null;

    return new Starbucks(rows[0]);
  }
};
