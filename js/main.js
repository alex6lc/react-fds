var React = require('react');
var hljs = require('highlight.js');
var ReactPlayground = require('./components/Playground.js');


// Full list of configuration options available at:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
    controls: true,
    progress: true,
    history: true,
    center: true,

    transition: 'slide', // none/fade/slide/convex/concave/zoom

    // Optional reveal.js plugins
    dependencies: [{ src: 'plugin/notes/notes.js', async: true }]
});


var hljs_nodes = document.querySelectorAll( 'pre code' );

for( var i = 0, len = hljs_nodes.length; i < len; i++ ) {
    var element = hljs_nodes[i];

    // trim whitespace if data-trim attribute is present
    if( element.hasAttribute( 'data-trim' ) && typeof element.innerHTML.trim === 'function' ) {
        element.innerHTML = element.innerHTML.trim();
    }

    // Now escape html unless prevented by author
    if( ! element.hasAttribute( 'data-noescape' )) {
        element.innerHTML = element.innerHTML.replace(/</g,"&lt;").replace(/>/g,"&gt;");
    }

    // re-highlight when focus is lost (for edited code)
    element.addEventListener( 'focusout', function( event ) {
        hljs.highlightBlock( event.currentTarget );
    }, false );
}
hljs.initHighlightingOnLoad();

var HELLO_COMPONENT = "var BEST_JS_LIBS = [\n  { name: 'Backbone.js', url: 'http://backbonejs.org/'},\n  { name: 'AngularJS', url: 'https://angularjs.org/'},\n  { name: 'jQuery', url: 'http://jquery.com/'},\n  { name: 'Prototype', url: 'http://www.prototypejs.org/'},\n  { name: 'React', url: 'http://facebook.github.io/react/'},\n  { name: 'Ember', url: 'http://emberjs.com/'},\n  { name: 'Knockout.js', url: 'http://knockoutjs.com/'},\n  { name: 'Dojo', url: 'http://dojotoolkit.org/'},\n  { name: 'Mootools', url: 'http://mootools.net/'},\n  { name: 'Underscore', url: 'http://underscorejs.org/'},\n  { name: 'Lodash', url: 'http://lodash.com/'},\n  { name: 'Moment', url: 'http://momentjs.com/'},\n  { name: 'Express', url: 'http://expressjs.com/'},\n  { name: 'Koa', url: 'http://koajs.com/'}\n];\n\n// Let's make this more fun.\n\n// First, type “rx” into the input to the right.\n// Have you typed “rx” there? True-true? Then uncomment this line:\n\n// BEST_JS_LIBS.push({ name: 'Rx', url: 'http://reactivex.io/' });\n\nmodule.exports = React.createClass({\n  getInitialState() { return { query: '' }; },\n\n  handleChange(e) {\n    this.setState({ query: e.target.value });\n\n    // Feel like debugging something?\n    // Open DevTools and uncomment next line:\n\n    // console.log(e); debugger;\n\n    // Now type something into the input.\n    // Nice, huh? Remove this line so we can move on.\n  },\n\n  componentWillUnmount() {\n    alert('I knew Dan lied about hot reloading.');\n  },\n\n  render() {\n    var libs = BEST_JS_LIBS,\n        query = this.state.query.trim().toLowerCase();\n\n    // For the next bits of fun, make sure you\n    // have typed something into the input!\n\n    if (query.length > 0) {\n      libs = libs.filter(\n        // Feeling lucky? Try swapping these lines:\n        // () => Math.random() > 0.5\n        lib => lib.name.toLowerCase().match(query)\n      );\n    }\n\n    // You know what to do:\n    // return <i>{libs.map(l => l.name).join(', ')} are friends!</i>;\n\n    return (\n      <div>\n        <input type='text' // try 'date'\n               value={this.state.query/*.toUpperCase()*/}\n               onChange={this.handleChange}\n               // onMouseEnter={() => this.setState({ query: 'react' })}\n               placeholder='Type to search' />\n        <ul>\n          {libs.map(lib =>\n            <li key={lib.name}>\n              <a href={lib.url} target='_blank'>\n              {\n                // 'Such ' +\n                lib.name\n              }\n              </a>\n            </li>\n          )}\n        </ul>\n        {\n          // libs.length === 0 && <i>Empty!</i>\n        }\n      </div>\n    );\n  }\n});";
React.render(
    React.createElement(ReactPlayground, {codeText: HELLO_COMPONENT}),
    document.getElementById('example')
);
