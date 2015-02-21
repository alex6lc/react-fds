var React = require('react');
var codePreview = require('../mixings/codePreview');

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
    mixins: [codePreview],

    render() {
        return (
            <section>
                <h2>Method Definitions</h2>

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
                <aside className="notes">
                    This slide has fragments which are also stepped through in the notes window.
                </aside>
            </section>
        );
    }
});