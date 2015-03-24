var React = require('react');
var CodeEditor = require('../components/CodeEditor');

var VIEW = `
var count = this.alerts.length;
if ( count > 99 ) {
  count = "99+";
  if ( !this.hasFire() ) {
    this.addFire();
  }
} else {
  if ( this.hasFire() ) {
    this.removeFire();
  }
}
if (count === 0) {
  if ( this.hasBadge() ) {
    this.removeBadge();
  }
  return;
}
if ( !this.hasBadge() ) {
  this.addBadge();
}
this.getBadge().setText(count);
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