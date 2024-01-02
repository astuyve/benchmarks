'use strict';
const mobx = require('mobx')

module.exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Hello, world! Your function executed successfully!`,
      },
      null,
      2
    ),
  };
};
