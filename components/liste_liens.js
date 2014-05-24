/** @jsx React.DOM */
var React = require('react'),
    Link = require('react-router-component').Link;

module.exports = React.createClass({displayName: 'exports',
  getDefaultProps: function() {
    return {
      liens: [],
      liensInternes: false
    }
  },

  render: function() {
    var liensInternes = this.props.liensInternes;
    var liens = this.props.liens.map(function(lien) {
      if (liensInternes) {
        return Link( {key:lien[0], className:"list-group-item", href:lien[1]}, lien[0]);
      } else {
        return React.DOM.a( {key:lien[0], className:"list-group-item", href:lien[1]}, lien[0]);
      }
    });

    return (
      React.DOM.div( {className:"list-group"}, 
        liens
      )
    );
  }
});