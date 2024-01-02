'use strict';
const imdb = require('imdb-data')
const moby = require('moby')
const mui = require('@mui/material')
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
