var React = require('react');
var CodeEditor = require('../components/CodeEditor');

var VIEW = `
var count = this.alerts.length;
if ( count === 0 ) {
  return <div class="alert-icon"></div>;
} else if ( count <= 99 ) {
  return (
    <div class="alert-icon">
      <div class="icon-message">{count}</div>
    </div>
  );
} else {
  return (
    <div class="alert-icon fire">
      <div class="icon-message">99+</div>
    </div>
  );
}
`;

module.exports = React.createClass({
    render() {
        return (
            <section>
                <CodeEditor language="javascript" codeText={VIEW} />
            </section>
        );
    }
});