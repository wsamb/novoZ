module.exports.handler = async (event) => {
    const result = JSON.parse(event.body);
    result.message = result.message.toUpperCase();
    return {
        statusCode: 200,
        body: JSON.stringify(result),
    };
};
