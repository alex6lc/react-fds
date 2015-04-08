var React = require('react');
var CodeEditor = require('../components/CodeEditor');

var VIEW = `
var count = this.alerts.length;
if ( count === 0 ) {
  return <div class="alert-icon"></div>;
} else if ( count <= 99 ) {
  return (
    <div class="alert-icon">
      <div class="icon-message">{count}</div>
    </div>
  );
} else {
  return (
    <div class="alert-icon fire">
      <div class="icon-message">99</div>
    </div>
  );
}
`;

module.exports = React.createClass({
    render() {
        return (
            <section>
                <h3>Declarative</h3>
                <div className="rel">
                    <CodeEditor language="javascript" codeText={VIEW} />
                    <span className="fragment current-visible">
                        <span className="hide-line-4-to-25"></span>
                    </span>
                    <span className="fragment current-visible">
                        <span className="hide-line-1-to-3"></span>
                        <span className="hide-line-10-to-25"></span>
                    </span>
                    <span className="fragment current-visible">
                        <span className="hide-line-1-to-9"></span>
                    </span>
                    <div className="fragment"></div>
                </div>
                <aside className="notes">
                    Beaucoup plus claire
                    <br/>
                    Revenir dans le code apres 1 mois, et rajouter la citrouille, c'est l'histoire de rajouter un if
                </aside>
            </section>
        );
    }
});