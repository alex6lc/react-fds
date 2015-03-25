var React = require('react');
var Reveal = require('../reveal');

// Expose Reveal
window.Reveal = Reveal;

var Intro = require('../slides/Intro');
var ES6 = require('../slides/ES6');
var WhatIsReact = require('../slides/WhatIsReact');

// Declarative vs Imperative
var ImperativeVsDeclarative = require('../slides/ImperativeVsDeclarative');
var Alert = require('../slides/Alert');
var ImperativeUI = require('../slides/ImperativeUI');
var DeclarativeUI = require('../slides/DeclarativeUI');
var DeclarativeReact = require('../slides/DeclarativeReact');
var AnatomyReact = require('../slides/AnatomyReact');

var DemoSearchInList = require('../slides/DemoSearchInList');

var ComponentsNotTemplates = require('../slides/ComponentsNotTemplates');
var SeparationOfConcerns = require('../slides/SeparationOfConcerns');
var HandlebarsAndView = require('../slides/HandlebarsAndView');
var ReactComponent = require('../slides/ReactComponent');

// Virtual DOM
var VirtualDom = require('../slides/VirtualDom');
var DomManipulation1 = require('../slides/DomManipulation1');
var DomManipulation2 = require('../slides/DomManipulation2');
var VirtualDomDiff = require('../slides/VirtualDomDiff');
var SyntheticEvents = require('../slides/SyntheticEvents');
var DemoDomDiff = require('../slides/DemoDomDiff');

// Props and State
var PropsAndState = require('../slides/PropsAndState');
var UnidirectionalFlow = require('../slides/UnidirectionalFlow');

// Isomorphic
var Isomorphic = require('../slides/Isomorphic');
var FatServerThinClient = require('../slides/FatServerThinClient');
var FatClientThinServer = require('../slides/FatClientThinServer');
var SinglePageApplication = require('../slides/SinglePageApplication');
var SharedClientServer = require('../slides/SharedClientServer');
var IsomorphicDemo = require('../slides/IsomorphicDemo');

/*

 */


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
                <ES6 />
                <WhatIsReact />

                <ImperativeVsDeclarative />
                <Alert />
                <ImperativeUI />
                <DeclarativeUI />
                <DeclarativeReact />
                <AnatomyReact />

                <DemoSearchInList />

                <ComponentsNotTemplates />
                <SeparationOfConcerns />
                <HandlebarsAndView />
                <ReactComponent />

                <VirtualDom />
                <DomManipulation1 />
                <DomManipulation2 />
                <VirtualDomDiff />
                <SyntheticEvents />
                <DemoDomDiff />

                <PropsAndState />
                <UnidirectionalFlow />

                <Isomorphic />
                <FatServerThinClient />
                <FatClientThinServer />
                <SinglePageApplication />
                <SharedClientServer />
                <IsomorphicDemo />
            </div>
        );
    }
});