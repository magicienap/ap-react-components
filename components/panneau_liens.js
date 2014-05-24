/** @jsx React.DOM */
var React = require('react'),
    ListeLiens = require('./../components/liste_liens');

module.exports = React.createClass({displayName: 'exports',
  getDefaultProps: function() {
    return {
      liens: [],
      liensInternes: false,
      titre: ""
    }
  },

  render: function() {
    return (
      React.DOM.div( {className:"panel panel-default"}, 
        React.DOM.div( {className:"panel-heading"}, 
          this.props.titre
        ),

        ListeLiens( {liensInternes:this.props.liensInternes, liens:this.props.liens} )
      )
    );
  }
});