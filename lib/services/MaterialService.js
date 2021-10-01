const Material = require('../models/Material');
const { sendSms } = require('../utils/twilio');

module.exports = class MaterialService {
    static async createItem({ material, piece, color, have }) {
        //send text
        await sendSms(
            process.env.ORDER_HANDLER_NUMBER,
            `New Item received: ${material, piece, color, have}`
        );

        //store the order
        const item = await Material.insert({ material, piece, color, have });

        return item;
    }
};
