var React = require('react');

module.exports = React.createClass({
    render() {
        return (
            <section>
                <h3>Re-render, don't mutate</h3>

                <p className="fragment">Re-render the whole app once the state changes</p>
                <p className="fragment">Makes things simple to reason about</p>
                <p className="fragment">You can't just throw out the DOM and rebuild on every update</p>
                <small className="fragment">
                    <p>Lose form state</p>
                    <p>Lose scroll position</p>
                    <p>Performance hit</p>
                </small>
            </section>
        );
    }
});