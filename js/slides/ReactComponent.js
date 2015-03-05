var React = require('react');
var CodeEditor = require('../components/CodeEditor');

var reactComponent = `
var Component = React.createClass({
  render() {
    var items = this.props.collection.map((model) => {
      var itemClass (model.get('isFlaged'))
        ? 'important'
        : '';

      return (
        <li className={itemClass}>
          {model.get('name')}
        </li>
      );
    });

    return <ul>{items}</ul>;
  }
});
`;

module.exports = React.createClass({
    render() {
        return (
            <section>
                <h2>React Component</h2>
                <CodeEditor language="javascript" codeText={reactComponent} />
            </section>
        );
    }
});