var React = require('react');
var Notes = require('../components/Notes');

module.exports = React.createClass({
    render() {
        return (
            <section>
                <h2>Virtual DOM</h2>
                <Notes notes={[
                    'botleneck de performance d’une application web === DOM',
                    'mutations dans le DOM ça coûte chère',
                    'Style calculations, layout, paint, compositing',
                    'mutations arrivés l’une après l’autre (cascade)',
                    'garde en mémoire une représentation de qu’est que le DOM ressembler'
                ]} />
            </section>
        );
    }
});
