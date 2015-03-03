var React = require('react');

var BlocModules = require('../components/Isomorphic/BlocModules');

module.exports = React.createClass({
    render() {
        return (<section>
            <h2>Shared, Server, Client</h2>

            <BlocModules
                items={['DOM Manipulation']}
                location={'Client'}
                languages={['JavaScript']}
            />

            <div className="row">
                <div className="col-xs-offset-4 col-xs-1">
                    <svg width="100%" height="20" viewBox="0 0 20 20">
                        <g>
                            <line id="svg_1" y2="20" x2="10" y1="0" x1="10" stroke-width="2" stroke="#000"/>
                            <line id="svg_2" y2="10" x2="15" y1="0" x1="10" stroke-width="2" stroke="#000"/>
                            <line id="svg_3" y2="10" x2="5" y1="0" x1="10" stroke-width="2" stroke="#000"/>
                        </g>
                    </svg>
                </div>
            </div>

            <BlocModules
                items={['Routing','View Layer','Application Logic']}
                location={'Shared'}
                languages={['JavaScript']}
            />

            <div className="row">
                <div className="col-xs-offset-4 col-xs-1">
                    <svg width="100%" height="20" viewBox="0 0 20 20">
                        <g>
                            <line id="svg_1" y2="20" x2="10" y1="0" x1="10" stroke-width="2" stroke="#000"/>
                            <line id="svg_2" y2="10" x2="15" y1="0" x1="10" stroke-width="2" stroke="#000"/>
                            <line id="svg_3" y2="10" x2="5" y1="0" x1="10" stroke-width="2" stroke="#000"/>
                        </g>
                    </svg>
                </div>
            </div>

            <BlocModules
                items={['Persistence']}
                location={'Server'}
                languages={['Ruby','PHP','ASP.NET']}
            />
        </section>);
    }
});