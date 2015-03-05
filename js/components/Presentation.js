var React = require('react');
var Reveal = require('../reveal');

// Expose Reveal
window.Reveal = Reveal;

var Intro = require('../slides/Intro');
var ES6 = require('../slides/ES6');
var WhatIsReact = require('../slides/WhatIsReact');

var DemoSearchInList = require('../slides/DemoSearchInList');
var AnatomyReact = require('../slides/AnatomyReact');
var AnatomyReact2 = require('../slides/AnatomyReact2');


var ComponentsNotTemplates = require('../slides/ComponentsNotTemplates');
var SeparationOfConcerns = require('../slides/SeparationOfConcerns');
var HandlebarsAndView = require('../slides/HandlebarsAndView');
var ReactComponent = require('../slides/ReactComponent');

// Virtual DOM
var VirtualDom = require('../slides/VirtualDom');
var VirtualDomDiff = require('../slides/VirtualDomDiff');
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
                <DemoSearchInList />
                <AnatomyReact />
                <AnatomyReact2 />

                <ComponentsNotTemplates />
                <SeparationOfConcerns />
                <HandlebarsAndView />
                <ReactComponent />

                <VirtualDom />
                <VirtualDomDiff />
                <DemoDomDiff />

                <PropsAndState />
                <UnidirectionalFlow />

                <Isomorphic />
                <FatServerThinClient />
                <FatClientThinServer />
                <SinglePageApplication />
                <SharedClientServer />
            </div>
        );
    }
});