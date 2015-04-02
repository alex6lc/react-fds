var React = require('react');
var Playground = require('../components/Playground');

var demo = `
module.exports = React.createClass({
  getInitialState() {
    return { name: 'World' };
  },
  onChange(e) {
    this.setState({ name: e.target.value });
  },
  onClick() {
    var el = document.getElementById("dd");
    el.style.backgroundColor = "red";
  },
  render() {
    return (
      <div>
        <input onChange={this.onChange} value={this.state.name} />
        <div id="dd">Hello {this.state.name}</div>
        <button onClick={this.onClick}>
          Click Me!
        </button>
      </div>
    );
  }
});
`;

module.exports = React.createClass({
    render() {
        return (
            <section>
                <h3>Demo - Virtual DOM</h3>

                <Playground codeText={demo} />
            </section>
        );
    }
});