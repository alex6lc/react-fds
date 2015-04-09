var React = require('react');
var CodeEditor = require('../components/CodeEditor');
var Notes = require('../components/Notes');

var code = `
var React = require('react');

module.exports = React.createClass({
  render() {
    var count = this.props.alerts.length;
    if ( count === 0 ) {
      return <div className="alert-icon"></div>;
    } else if ( count <= 99 ) {
      return (
        <div className="alert-icon">
          <div className="icon-message">{count}</div>
        </div>
      );
    } else {
      return (
        <div className="alert-icon fire">
          <div className="icon-message">99</div>
        </div>
      );
    }
  }
});
`;

module.exports = React.createClass({
    render() {
        return (
            <section>
                <h3>Anatomy of a React Component</h3>
                <div className="rel">
                    <CodeEditor language="javascript" codeText={code} />
                    <span className="fragment current-visible hide-line-2-to-25"></span>
                    <span className="fragment current-visible">
                        <span className="hide-line-1-to-2"></span>
                        <span className="hide-line-4-to-25"></span>
                    </span>
                    <span className="fragment current-visible">
                        <span className="hide-line-1-to-3"></span>
                        <span className="hide-line-5-to-25"></span>
                    </span>
                    <span className="fragment current-visible">
                        <span className="hide-line-1-to-4"></span>
                        <span className="hide-line-22-to-25"></span>
                    </span>
                    <div className="fragment"></div>
                </div>
                <Notes notes={[
                    'ES6 Classes',
                    'class HelloMessage extends React.Component',
                    'Render == method pure',
                    'Render =ne devrait pas modifier l\'etat du component'
                ]} />
            </section>
        );
    }
});