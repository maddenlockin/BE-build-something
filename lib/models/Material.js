import pool from '../utils/pool.js';

export default class Material {
    id;
    date;
    material;
    piece;
    color;
    have;

    constructor(row) {
        this.id = row.id;
        this.date = row.date;
        this.material = row.material;
        this.piece = row.piece;
        this.color = row.color;
        this.have = row.have;
    }

    static async create({ material, piece, color, have }) {
        const currentDate = new Date().toISOString().slice(0, 10);
        const { rows } = await pool.query(
            'INSERT INTO materials (date, material, piece, color, have) VALUES ($1, $2, $3, $4, $5) RETURNING *'
            [date, material, piece, color, have]
        );

        return new Material(rows[0]);
    }
    
}