'use strict';
const imdb = require('imdb-data')
const moby = require('moby')
const datefns = require('date-fns')
const mathjax = require('mathjax')
const mui = require('@mui/material')
const react = require('react-dom')
const jsdom = require('jsdom')
const ajv = require('ajv')
const decompress = require('decompress')
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
