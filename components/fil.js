/** @jsx React.DOM */
var React = require('react'),
    Link = require('react-router-component').Link;

module.exports = React.createClass({displayName: 'exports',
  getDefaultProps: function() {
    return {
      liens: [],
      pageActuelle: ""
    }
  },

  render: function() {
    var items = this.props.liens.map(function(lien) {
      return (
        React.DOM.li( {key:lien[0]}, 
          Link( {href:lien[1]}, lien[0])
        )
      );
    });

    items.push(React.DOM.li( {key:this.props.pageActuelle, className:"active"}, this.props.pageActuelle));

    return (
      React.DOM.ol( {className:"breadcrumb"}, 
        items
      )
    );
  }
});