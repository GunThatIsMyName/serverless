require("dotenv").config();

const Airtable = require("airtable-node");
const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
    .base("appWdGZWAhEAswiR9")
    .table("serverless");

exports.handler = async (event, context) => {
    const {id}=event.queryStringParameters
    if(id){
        try {
            const data = await airtable.retrieve(id)
            if(data.error){
                return {
                    statusCode: 404,
                    body: `no provided data via id ${id} `,
                };
            }
            return{
                statusCode: 200,
                body: JSON.stringify(data) ,
            }
        } catch (error) {
            return {
                statusCode: 400,
                body: "server error",
            };
        }
    }
    return {
        statusCode: 500,
        body: "no server",
    };
};
