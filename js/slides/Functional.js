var React = require('react');

module.exports = React.createClass({
    render() {
        return (
            <section>
                <h3>React is <em>functional</em></h3>

                <p className="fragment">f(state, props) = UI Fragment</p>
                <p className="fragment">Well-written components don't even need state</p>
                <p className="fragment">f(props) = UI Fragment</p>
                <p className="fragment">Idempotency</p>
                <p className="fragment">Immutability</p>
                <p className="fragment">Testability</p>
            </section>
        );
    }
});