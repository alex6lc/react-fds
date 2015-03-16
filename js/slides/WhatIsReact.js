var React = require('react');

module.exports = React.createClass({
    render() {
        return (
            <section>
                <h2>What is <em>React</em>{"?"}</h2>
                <div>Library, not a <del>framework</del></div>
                <div>Only cares about the UI</div>
                <div>The "V" in MVC</div>
                <div>28kb</div>
                <div>Battle-tested on:</div>
                <div><small>facebook, instagram</small></div>
                <div><small>yahoo!, khanacademy, airbnb, atom</small></div>
            </section>
        );
    }
});