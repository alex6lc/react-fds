var React = require('react');
var CodeEditor = require('../components/CodeEditor');

var es5code = `
function Person() {
  var that = this;
  that.age = 0;

  setInterval(function() {
    that.age++;
  }, 1000);
}`;
var es6code = `
function Person() {
  this.age = 0;

  setInterval(() => {
    this.age++;
  }, 1000);
}`;

module.exports = React.createClass({
    render() {
        return (
            <section>
                <h2>Arrow functions</h2>

                <div className="row">
                    <div className="col-xs">
                        <p>ECMAScript 3/5</p>
                        <CodeEditor language="javascript" codeText={es5code} />
                    </div>
                    <div className="col-xs">
                        <p>ECMAScript 6</p>
                        <CodeEditor language="javascript" codeText={es6code} />
                    </div>
                </div>
            </section>
        );
    }
});