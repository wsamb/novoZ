module.exports.handler = async (event) => {
    const result = JSON.parse(event.body);
    if( typeof result?.message === 'string') result.message = result.message.toUpperCase();
    return {
        statusCode: 200,
        body: JSON.stringify(result.message || 'Incorrect message passed, please check format.'),
    };
};
