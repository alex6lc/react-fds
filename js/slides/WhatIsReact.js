var React = require('react');

module.exports = React.createClass({
    render() {
        return (
            <section>
                <h2>What is <em>React</em>{"?"}</h2>

                <p className="fragment">Library, not a <del>framework</del></p>
                <p className="fragment">Only cares about the UI</p>
                <p className="fragment">The "V" in MVC</p>
                <p className="fragment">Relatively small (121kb minified)</p>
            </section>
        );
    }
});