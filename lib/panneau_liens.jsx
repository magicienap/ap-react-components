var React = require('react'),
    ListeLiens = require('./../components/liste_liens');

module.exports = React.createClass({
  getDefaultProps: function() {
    return {
      liens: [],
      liensInternes: false,
      titre: ""
    }
  },

  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          {this.props.titre}
        </div>

        <ListeLiens liensInternes={this.props.liensInternes} liens={this.props.liens} />
      </div>
    );
  }
});