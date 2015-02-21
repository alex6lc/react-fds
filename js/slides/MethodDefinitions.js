var React = require('react');
var CodeEditor = require('../components/CodeEditor');

var es5code = `
var Person = Model.extend({
  run: function (distance) {
    //...
  }
});
`;

var es6code = `
var Person = Model.extend({
  run(distance) {
    //...
  }
});`;

module.exports = React.createClass({
    render() {
        return (
            <section>
                <h2>Method Definitions</h2>

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
                <aside className="notes">
                    This slide has fragments which are also stepped through in the notes window.
                </aside>
            </section>
        );
    }
});