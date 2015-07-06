'use strict';

const React = require('react');

class View extends React.Component {

  render(){
    const { cwd, listing, filename, content } = this.props;

    return (
      <div>
        <div>CWD: {cwd}</div>
        <div>Listing: {listing.join(', ')}</div>
        <div>Filename: {filename}</div>
        <div>Content: {content}</div>
      </div>
    );
  }
}

module.exports = View;
