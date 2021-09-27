import pool from '../utils/pool.js';

export default class Material {
    id;
    name;
    material;
    date;

    constructor(row) {
        this.id = row.id;
        this.name = row.id;
        this.material = row.material;
        this.date = row.date;
    }
    
}