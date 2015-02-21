var React = require('react');
var codePreview = require('../mixings/codePreview');

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
    mixins: [codePreview],
    
    render() {
        return (
            <section>
                <h2>Arrow functions</h2>

                <div className="row">
                    <div className="col-xs">
                        <p>ECMAScript 3/5</p>
                        <pre><code data-trim className="javascript">{es5code}</code></pre>
                    </div>
                    <div className="col-xs">
                        <p>ECMAScript 6</p>
                        <pre><code data-trim className="javascript">{es6code}</code></pre>
                    </div>
                </div>
            </section>
        );
    }
});