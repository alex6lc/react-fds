var React = require('react');

module.exports = React.createClass({
    render() {
        return (
            <section>
                <img className="logo" src="images/react_logo.png" />
                <h1>React</h1>

                <h3>A JavaScript library for building user interfaces</h3>

                <p>
                    <small>By Alexis Leroux-Chartré</small>
                </p>
            </section>
        );
    }
});