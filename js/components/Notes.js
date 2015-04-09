var React = require('react');

module.exports = React.createClass({
    propTypes: {
        notes: React.PropTypes.array
    },
    render() {
        return (
            <aside className="notes">
                <ul style={{padding: 0, margin: 0}}>
                {this.props.notes.map((note) => {
                    return <li>{note}</li>;
                })}
                </ul>
            </aside>
        );
    }
});