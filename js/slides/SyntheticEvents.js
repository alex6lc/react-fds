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
$( '#page' ).on( 'click', 'button', function( event ) {
  /* ... */
});
`;

module.exports = React.createClass({
    render() {
        return (
            <section>
                <h2>Synthetic Events</h2>

                <CodeEditor language="javascript" codeText={BACKBONE} />
                <CodeEditor language="javascript" codeText={JQUERY} />
                <p>A single native event listener at root of the document</p>
                <p>Normalizes events across browsers (IE8)</p>
            </section>
        );
    }
});