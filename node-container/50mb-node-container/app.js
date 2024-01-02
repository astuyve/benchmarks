'use strict';
const start = Date.now()
const imdb = require('imdb-data')
const end = Date.now()

console.log(end - start)
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
