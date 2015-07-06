'use strict';

const sequence = require('when/sequence');
const React = require('react');
const { createRedux, createDispatcher, composeStores } = require('redux');
const { createContainer } = require('sovereign');
const reduxPromise = require('redux-promise');

const stores = require('./stores');

const store = composeStores(stores);

const middleware = [reduxPromise];

const dispatcher = createDispatcher(store, middleware);

const redux = createRedux(dispatcher);

const container = document.createElement('div');

// actions
const changeDirectory = require('./actions/change-directory');
const loadFile = require('./actions/load-file');
const log = require('./actions/log');

// views
const View = createContainer(require('./views/index'), {
  getStores(){
    return {
      redux
    };
  },

  getPropsFromStores(){
    const state = redux.getState();

    return {
      cwd: state.directory.cwd,
      listing: state.directory.files,
      filename: state.file.name,
      content: state.file.content
    };
  }
});

sequence([
  () => redux.dispatch(changeDirectory('/blah')),
  () => redux.dispatch(loadFile('test')),
  () => redux.dispatch(log())
]);

React.render(<View />, container);

document.body.appendChild(container);
