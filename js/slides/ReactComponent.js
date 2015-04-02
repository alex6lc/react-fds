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
                <h3>React Component</h3>
                <CodeEditor language="javascript" codeText={reactComponent} />
            </section>
        );
    }
});