var React = require('react');

module.exports = React.createClass({
    render() {
        return (
            <section>
                <h3>Re-render, don't mutate</h3>

                <p>Re-render the whole app once the state changes</p>
                <p>Makes things simple to reason about</p>
                <p>You can't just throw out the DOM and rebuild on every update</p>
                <small>
                    <p>Lose form state</p>
                    <p>Lose scroll position</p>
                    <p>Performance hit</p>
                </small>
            </section>
        );
    }
});