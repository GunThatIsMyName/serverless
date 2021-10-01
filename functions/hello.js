exports.handler = async (event,context)=>{
    return{
        headers: {
			'Acess-Control-Allow-Origin':'*',
		},
        statusCode:200,
        body:"my first serverless is working",
    }
}