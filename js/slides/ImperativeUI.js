var React = require('react');
var CodeEditor = require('../components/CodeEditor');

var VIEW = `
var count = this.alerts.length;
if ( count > 99 ) {
  count = 99;
  if ( !this.hasFire() ) {
    this.addFire();
  }
} else {
  if ( this.hasFire() ) {
    this.removeFire();
  }
}
if (count === 0) {
  if ( this.hasLabel() ) {
    this.removeLabel();
  }
  return;
}
if ( !this.hasLabel() ) {
  this.addLabel();
}
this.getLabel().setText(count);
`;

module.exports = React.createClass({
    render() {
        return (
            <section>
                <h3>Imperative</h3>
                <div className="rel">
                    <CodeEditor language="javascript" codeText={VIEW} />
                    <span className="fragment current-visible hide-line-2-to-25"></span>
                    <span className="fragment current-visible">
                        <span className="hide-line-1-to-1"></span>
                        <span className="hide-line-7-to-25"></span>
                    </span>
                    <span className="fragment current-visible">
                        <span className="hide-line-1-to-6"></span>
                        <span className="hide-line-12-to-25"></span>
                    </span>
                    <span className="fragment current-visible">
                        <span className="hide-line-1-to-11"></span>
                        <span className="hide-line-18-to-25"></span>
                    </span>
                    <span className="fragment current-visible">
                        <span className="hide-line-1-to-17"></span>
                    </span>
                    <div className="fragment"></div>
                </div>
            </section>
        );
    }
});