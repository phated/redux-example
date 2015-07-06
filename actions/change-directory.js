'use strict';

const when = require('when');

function changeDirectory(directory){
  return when.promise(function(resolve, reject){
    setTimeout(resolve, 1000, ['test1', 'test2']);
  })
  .then((files) => {
    return {
      type: 'CHANGE_DIRECTORY',
      payload: { files, cwd: directory }
    }
  });
}

module.exports = changeDirectory;
