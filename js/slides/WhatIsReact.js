var React = require('react');

module.exports = React.createClass({
    render() {
        return (
            <section>
                <h3>What is <em>React</em>{"?"}</h3>

                <p className="fragment">Library, not a <del>framework</del></p>
                <p className="fragment">Only cares about the UI</p>
                <p className="fragment">The "V" in MVC</p>
                <p className="fragment">JS Conf 2013 &#8594; Open Source</p>
                <p className="fragment">Relatively small (121kb minified)</p>
                <p className="fragment">Everything is a component</p>
                <p className="fragment">Declarative vs <del>Imperative</del></p>

                <aside className="notes">
                    Agnostic d'ou provient le data ou de l'architecture
                    <br />
                    React render du UI et repond a des events du browser
                    <br />
                    Créer par l'équipe de publicité (annonce)
                    <br />
                    30kb de plus que jquery
                </aside>
            </section>
        );
    }
});