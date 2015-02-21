var React = require('react');
var Reveal = require('../reveal');

var Intro = require('../slides/Intro');
var DemoSearchInList = require('../slides/DemoSearchInList');
var MethodDefinitions = require('../slides/MethodDefinitions');
var ArrowFunctions = require('../slides/ArrowFunctions');
var AnatomyReact = require('../slides/AnatomyReact');
var AnatomyReact2 = require('../slides/AnatomyReact2');

module.exports = React.createClass({
    componentDidMount() {
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
    },
    render() {
        return (
            <div className="slides">
                <Intro />
                <MethodDefinitions />
                <ArrowFunctions />
                <DemoSearchInList />
                <AnatomyReact2 />
            </div>
        );
    }
});