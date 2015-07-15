'use strict';

const sequence = require('when/sequence');
const React = require('react');
const { createStore, combineReducers, applyMiddleware } = require('redux');
const { createContainer } = require('sovereign');
const reduxPromise = require('redux-promise');

const reducers = require('./reducers');

const reducer = combineReducers(reducers);

const middleware = [reduxPromise];

const finalCreateStore = applyMiddleware(...middleware)(createStore);

const store = finalCreateStore(reducer);

const container = document.createElement('div');

// actions
const changeDirectory = require('./actions/change-directory');
const loadFile = require('./actions/load-file');
const log = require('./actions/log');

// views
const View = createContainer(require('./views/index'), {
  getStores(){
    return {
      store
    };
  },

  listen(store, onChange){
    return store.subscribe(onChange);
  },

  unlisten(store, onChange, unsubscribe){
    unsubscribe();
  },

  getPropsFromStores(){
    const state = store.getState();

    return {
      cwd: state.directory.cwd,
      listing: state.directory.files,
      filename: state.file.name,
      content: state.file.content
    };
  }
});

sequence([
  () => store.dispatch(changeDirectory('/blah')),
  () => store.dispatch(loadFile('test')),
  () => store.dispatch(log())
]);

React.render(<View />, container);

document.body.appendChild(container);
