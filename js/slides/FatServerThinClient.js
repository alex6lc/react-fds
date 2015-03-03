var React = require('react');

var BlocModules = require('../components/Isomorphic/BlocModules');

module.exports = React.createClass({
    render() {
        return (<section>
            <h2>Fat Server, Thin Client</h2>

            <BlocModules
                items={['DOM Manipulation']}
                location={'Client'}
                languages={['JavaScript']}
            />

            <div className="row center-xs">
            <div className="col-xs-4">
                <svg width="100%" height="20">
                    <g>
                        <line id="svg_1" y2="10" x2="0" y1="10" x1="10000" stroke-width="2" stroke="#000"/>
                    </g>
                </svg>
            </div>

            <div className="col-xs-1">
            <svg width="100%" height="20" viewBox="0 0 20 20">
                <g>
                    <line id="svg_1" y2="20" x2="10" y1="0" x1="10" stroke-width="2" stroke="#000"/>
                    <line id="svg_2" y2="10" x2="15" y1="0" x1="10" stroke-width="2" stroke="#000"/>
                    <line id="svg_3" y2="10" x2="5" y1="0" x1="10" stroke-width="2" stroke="#000"/>
                </g>
            </svg>
            </div>
            <div className="col-xs-7">
                <svg width="100%" height="20">
                    <g>
                        <line id="svg_1" y2="10" x2="0" y1="10" x1="10000" stroke-width="2" stroke="#000"/>
                    </g>
                </svg>
            </div>
            </div>

            <BlocModules
                items={['Routing','View Layer','Application Logic','Persistence']}
                location={'Server'}
                languages={['Ruby','PHP','ASP.NET']}
            />
        </section>);
    }
});