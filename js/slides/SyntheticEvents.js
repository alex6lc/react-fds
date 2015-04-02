var React = require('react');
var CodeEditor = require('../components/CodeEditor');

var BACKBONE = `
Backbone.View.extend({
  events: {
    'click button': 'onBtnClick',
    'change input': 'onInputChange'
  }
  /* ... */
});
`;

var JQUERY = `
$('#page').on('click', 'button', function(event) {
  /* ... */
});
`;

module.exports = React.createClass({
    render() {
        return (
            <section>
                <h2>Synthetic Events</h2>

                <p>Event Delegation</p>
                <div className="row middle-xs">
                    <div className="col-xs-2"></div>
                    <div className="col-xs-8">
                        <CodeEditor language="javascript" codeText={BACKBONE} />
                        <CodeEditor language="javascript" codeText={JQUERY} />
                    </div>
                    <div className="col-xs-2"></div>
                </div>
                <p>Normalizes events across browsers (IE8)</p>
                <p>A single native event listener at root of the document</p>
            </section>
        );
    }
});