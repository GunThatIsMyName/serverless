require("dotenv").config();

const Airtable = require("airtable-node");
const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
    .base("appWdGZWAhEAswiR9")
    .table("serverless");

exports.handler = async (event, context) => {
    try {
        const { records } = await airtable.list();
        const data = records.map((item) => {
            const {
                id,
                fields: { Name, desc, images, price,status },
            } = item;
            const image = images[0].url;
            return { id, Name, desc, image, price ,status};
        });
        return {
            statusCode: 200,
            body: JSON.stringify(data),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: "server error",
        };
    }
};
