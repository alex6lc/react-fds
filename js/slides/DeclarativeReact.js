var React = require('react');
var CodeEditor = require('../components/CodeEditor');

var code = `
var React = require('react');

var AlertNotification = React.createClass({
  render() {
    var count = this.props.alerts.length;
    if ( count === 0 ) {
      return <div className="alert-icon"></div>;
    } else if ( count <= 99 ) {
      return (
        <div className="alert-icon">
          <div className="icon-message">{count}</div>
        </div>
      );
    } else {
      return (
        <div className="alert-icon fire">
          <div className="icon-message">99+</div>
        </div>
      );
    }
  }
});
`;

module.exports = React.createClass({
    render() {
        return (
            <section>
                <CodeEditor language="javascript" codeText={code} />
            </section>
        );
    }
});