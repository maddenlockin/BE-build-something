const Material = require('../models/Material.js');
const { sendSms } = require('../utils/twilio.js');

module.exports = class MaterialService {
    static async createItem({ material, piece, color, have }) {
        //send text
        await sendSms(
            process.env.ORDER_HANDLER_NUMBER,
            `New Item received: ${material, piece, color, have}`
        );

        //store the order
        const item = await Material.create({ material, piece, color, have });

        return item;
    }
    
    static async getById(id) {
        const item = await Material.getById(id);
        return item;
    }

    static async getAllItems() {
        const items = await Material.getAll();
        console.log(items);
        return items;
    }
    
    static async updateItem(id, material, piece, color, have) {
        const item = await Material.update(id, material, piece, color, have);
        return item;
    }
    
    static async deleteItem(id) {
        const deletedItem = await Material.deleteItem(id);
        return deletedItem;
    }
};
