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
    
}