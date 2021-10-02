const pool = require('../utils/pool.js');

module.exports = class Material {
    // id;
    // date;
    // material;
    // piece;
    // color;
    // have;

    constructor(row) {
        this.id = row.id;
        this.material = row.material;
        this.piece = row.piece;
        this.color = row.color;
        this.have = row.have;
    }

    static async create({ material, piece, color, have }) {
        const { rows } = await pool.query(
            'INSERT INTO materials (material, piece, color, have) VALUES ($1, $2, $3, $4) RETURNING *', [material, piece, color, have]
        );

        return new Material(rows[0]);
    }
    
    static async getById(id) {
        const { rows } = await pool.query(
            'SELECT * FROM materials WHERE id = $1',
            [id]
        );
        return new Material(rows[0]);
    }

    static async getAll() {
        const { rows } = await pool.query('SELECT * from materials');
        
        return rows.map((row) => new Material(row));
    }

    static async update(id, material, piece, color, have) {
        const { rows } = await pool.query(
            'UPDATE materials SET material=$2, piece=$3, color=$4, have=$5 WHERE id=$1 RETURNING *', [id, material, piece, color, have]
        );
        return new Material(rows[0]);
    }
    //delete
};
