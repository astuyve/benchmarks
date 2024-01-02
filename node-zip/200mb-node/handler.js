'use strict';

const imdb = require('imdb-data')
const moby = require('moby')
const datefns = require('date-fns')
const mathjax = require('mathjax')
const mui = require('@mui/material')
module.exports.hello = async (event) => {
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
