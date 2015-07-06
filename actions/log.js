'use strict';

function log(){
  console.log('sync!');
  return {
    type: 'LOG',
    payload: {}
  };
}

module.exports = log;
