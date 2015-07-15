'use strict';

const initialState = {
  files: [],
  cwd: '/'
};

function directoryStore(state = initialState, { type, payload }){

  if(type === 'CHANGE_DIRECTORY'){
    return {
      files: payload.files,
      cwd: payload.cwd
    };
  }

  return state;
}

module.exports = directoryStore;
