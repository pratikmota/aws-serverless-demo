module.exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Hello again pratik!',
        input: event,
      },
      null,
      2
    ),
  };
};
