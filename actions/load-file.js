'use strict';

const when = require('when');

function loadFile(file){
  return when.promise(function(resolve, reject){
    setTimeout(resolve, 1000, 'the text of this file');
  })
  .then((content) => {
    return {
      type: 'LOAD_FILE',
      payload: { content, file }
    };
  });
}

module.exports = loadFile;
