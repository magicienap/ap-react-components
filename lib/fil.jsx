var React = require('react'),
    Link = require('react-router-component').Link;

module.exports = React.createClass({
  getDefaultProps: function() {
    return {
      liens: [],
      pageActuelle: ""
    }
  },

  render: function() {
    var items = this.props.liens.map(function(lien) {
      return (
        <li key={lien[0]}>
          <Link href={lien[1]}>{lien[0]}</Link>
        </li>
      );
    });

    items.push(<li key={this.props.pageActuelle} className="active">{this.props.pageActuelle}</li>);

    return (
      <ol className="breadcrumb">
        {items}
      </ol>
    );
  }
});