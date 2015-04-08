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
                <h3>Synthetic Events</h3>

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
                <aside className="notes">
                    optimise c’est l'attachement des events
                    <br/>
                    Events listeners directement sur des DOM nodes =
                    <br/>
                    très demandant
                    <br/>
                    ça consume beaucoup de mémoire
                    <br/>
                    jQuery = fameux on avec une sélecteur
                    <br/>
                    React a re-implementé un event system complets qui suit le standard W3C
                    <br/>
                    Attache sur le root du document
                    <br/>
                    Garde un hash des event listeners et propager l'évènement a partir de celui-ci.
                    <br/>
                    Pas besoin de parcourir sont virtual DOM
                </aside>
            </section>
        );
    }
});
