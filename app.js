import React from 'react';
import ReactDOM from 'react-dom';

var Hello = React.createClass({displayName: 'Hello',
  render: function() {
    return React.createElement("h1", null, "Hello ");
  }
});
 
ReactDOM.render(<Hello/>, document.getElementById('plop'));