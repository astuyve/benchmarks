'use strict';
const mobx = require('mobx')
const lodash = require('lodash')

module.exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        handlerTs: Date.now()
      },
      null,
      2
    ),
  };
};
