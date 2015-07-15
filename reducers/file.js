'use strict';

const initialState = {
  name: '',
  content: ''
};

function fileStore(state = initialState, { type, payload }){

  if(type === 'LOAD_FILE'){
    return {
      name: payload.file,
      content: payload.content
    };
  }

  return state;
}

module.exports = fileStore;
