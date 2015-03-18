var React = require('react');
var CodeEditor = require('../components/CodeEditor');


var es5arrow = `
function Person() {
  var that = this;
  that.age = 0;

  setInterval(function() {
    that.age++;
  }, 1000);
}`;
var es6arrow = `
function Person() {
  this.age = 0;

  setInterval(() => {
    this.age++;
  }, 1000);
}`;

var es5method = `
var Person = Model.extend({
  run: function(distance) {
    //...
  }
});
`;
var es6method = `
var Person = Model.extend({
  run(distance) {
    //...
  }
});`;

module.exports = React.createClass({
    render() {
        return (
            <section>
                <h2>EcmaScript 6</h2>

                <div className="row">
                    <div className="col-xs-3"></div>
                    <div className="col-xs-4">
                        <p>ECMAScript 3/5</p>
                    </div>
                    <div className="col-xs-4">
                        <p>ECMAScript 6</p>
                    </div>
                    <div className="col-xs-1"></div>
                </div>

                <div className="row middle-xs">
                    <div className="col-xs-3">
                        Arrow functions
                    </div>
                    <div className="col-xs-4">
                        <CodeEditor language="javascript" codeText={es5arrow} />
                    </div>
                    <div className="col-xs-4">
                        <CodeEditor language="javascript" codeText={es6arrow} />
                    </div>
                    <div className="col-xs-1"></div>
                </div>

                <div className="row middle-xs">
                    <div className="col-xs-3">
                        Method Definitions
                    </div>
                    <div className="col-xs-4">
                        <CodeEditor language="javascript" codeText={es5method} />
                    </div>
                    <div className="col-xs-4">
                        <CodeEditor language="javascript" codeText={es6method} />
                    </div>
                    <div className="col-xs-1"></div>
                </div>
            </section>
        );
    }
});