var React = require('react');

module.exports = React.createClass({
    render() {
        return (
            <section>
                <h2>Virtual DOM</h2>
                <aside className="notes">
                    botleneck de performance d’une application web === DOM
                    <br/>
                    mutations dans le DOM ça coûte chère
                    <br/>
                    Style calculations, layout, paint, compositing
                    <br/>
                    mutations arrivés l’une après l’autre (cascade)
                    <br/>
                    garde en mémoire une représentation de qu’est que le DOM ressembler
                </aside>
            </section>
        );
    }
});
