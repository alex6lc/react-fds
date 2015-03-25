var React = require('react');
var CodeEditor = require('../components/CodeEditor');

var reactComponent = `
module.exports = React.createClass({
  render() {
    var items = this.props.collection.map((model) => {
      var itClass (model.get('isActive'))
        ? 'selected'
        : '';
      return (
        <li className={itClass}>
          {model.get('name')}
        </li>
      );
    });
    return (
      <div>
        <ul>{items}</ul>
        <button onClick={this.addItem}>
          Add
        </button>
      </div>
    );
  },
  addItem() { /* ... */ }
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