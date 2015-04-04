var React = require('react');
var Playground = require('../components/Playground');

var HELLO_COMPONENT = `
var BEST_JS_LIBS = [
  { name: 'Backbone.js' },
  { name: 'AngularJS' },
  { name: 'jQuery' },
  { name: 'React' },
  { name: 'Ember' }
];

module.exports = React.createClass({
  getInitialState() { return { query: '' }; },
  handleChange(e) {
    this.setState({ query: e.target.value });
  },
  componentWillUnmount() {
    alert('Unmount.');
  },
  render() {
    var libs = BEST_JS_LIBS;
    var query = this.state.query.trim().toLowerCase();

    if (query.length > 0) {
      libs = libs.filter(
        lib => lib.name.toLowerCase().match(query)
      );
    }
    return (
      <div>
        <input type='text'
               value={this.state.query}
               onChange={this.handleChange}
               placeholder='Type to search' />
        <ul>
          {libs.map(lib =>
            <li key={lib.name}>{ lib.name }</li>
          )}
        </ul>
      </div>
    );
  }
});
`;

module.exports = React.createClass({
    render() {
        return (
            <section>
                <Playground codeText={HELLO_COMPONENT} />
            </section>
        );
    }
});