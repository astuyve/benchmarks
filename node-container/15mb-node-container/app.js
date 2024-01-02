'use strict';
const mobx = require('mobx')
const lodash = require('lodash')
const ajv = require('ajv')
const archiver = require('archiver')
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
