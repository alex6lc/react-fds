var React = require('react');
var codePreview = require('../mixings/codePreview');

var code = `
var React = require('react');

var DashboardCallInfo = React.createClass({
  render() {
    return (
      <section className="dashboard-info">
        <div className="call-info">
          ..
          <div className="label-progess">..</div>
          <div className="icon-message">..</div>
        </div>
        <hr>
        <address className="store-address">..</address>
        <ul className="store-additional-infos">..</ul>
        <hr>
        ..
      </section>
    );
  }
});
`;

module.exports = React.createClass({
    mixins: [codePreview],

    render() {
        return (
            <section>
                <div className="rel">
                    <pre><code data-trim className="javascript">{code}</code></pre>
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
                        <span className="hide-line-19-to-25"></span>
                    </span>
                    <div className="fragment"></div>
                </div>
                <aside className="notes">
                    This slide has fragments which are also stepped through in the notes window.
                </aside>
            </section>
        );
    }
});