var React = require('react');
var Notes = require('../components/Notes');

module.exports = React.createClass({
    render() {
        return (
            <section>
                <h3>&#8593; Simplicity</h3>
                <h3>&#8593; Reliability</h3>
                <Notes notes={[
                    'Simple',
                    'Fiable'
                ]} />
            </section>
        );
    }
});