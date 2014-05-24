var React = require('react'),
    Link = require('react-router-component').Link;

module.exports = React.createClass({
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
        return <Link key={lien[0]} className="list-group-item" href={lien[1]}>{lien[0]}</Link>;
      } else {
        return <a key={lien[0]} className="list-group-item" href={lien[1]}>{lien[0]}</a>;
      }
    });

    return (
      <div className="list-group">
        {liens}
      </div>
    );
  }
});