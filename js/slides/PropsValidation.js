var React = require('react');

var CodeEditor = require('../components/CodeEditor');

var propTypes = `
React.createClass({
  propTypes: {
    optionalArray: React.PropTypes.array,
    optionalBool: React.PropTypes.bool,
    optionalFunc: React.PropTypes.func,
    optionalNumber: React.PropTypes.number,
    optionalObject: React.PropTypes.object,
    optionalString: React.PropTypes.string,
    /* ... */
});
`;

module.exports = React.createClass({
    render() {
        return (
            <section>
                <h3>Validating props</h3>
                <CodeEditor language="javascript" codeText={propTypes} />
            </section>
        );
    }
});