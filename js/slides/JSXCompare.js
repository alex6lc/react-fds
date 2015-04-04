var React = require('react');

var CodeEditor = require('../components/CodeEditor');

var js = `
var Foo = React.createClass({ /* */ });
var HelloMessage = React.createClass({
  displayName: "HelloMessage",
  render() {
    return
      React.createElement("div", null,
        React.createElement(Foo, null, null),
        "Hello ",
        this.props.name
      );
  }
});
`;

var jsx = `
var Foo = React.createClass({ /* */ });
var HelloMessage = React.createClass({
  render() {
    return (
      <div>
        <Foo />
        Hello {this.props.name}
      </div>
    );
  }
});
`;

module.exports = React.createClass({
    render() {
        return (
            <section>
                <div className="row middle-xs">
                    <div className="col-xs-1">JSX</div>
                    <div className="col-xs-11">
                        <CodeEditor language="javascript" codeText={jsx} />
                    </div>
                </div>
                <div className="row middle-xs">
                    <div className="col-xs-1">JS</div>
                    <div className="col-xs-11">
                        <CodeEditor language="javascript" codeText={js} />
                    </div>
                </div>
            </section>
        );
    }
});