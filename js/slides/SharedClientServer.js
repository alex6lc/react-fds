var React = require('react');

var BlocModules = require('../components/Isomorphic/BlocModules');
var Arrow = require('../components/Isomorphic/Arrow');

var { isomorphic } = require('../styles');

module.exports = React.createClass({
    render() {
        return (<section>
            <h3>Shared, Server, Client</h3>

            <BlocModules
                items={['DOM Manipulation']}
                location={'Client'}
                languages={['JavaScript']}
            />

            <div className="row">
                <div className="col-xs-4"></div>
                <div className="col-xs-1">
                    <Arrow height={40} />
                </div>
                <div className="col-xs-7"></div>
            </div>

            <BlocModules
                items={['Routing','View Layer','Application Logic']}
                location={'Shared'}
                languages={['JavaScript']}
            />

            <div className="row">
                <div className="col-xs-4"></div>
                <div className="col-xs-1">
                    <Arrow height={40} />
                </div>
                <div className="col-xs-7"></div>
            </div>

            <BlocModules
                items={['Persistence']}
                location={'Server'}
                languages={['Ruby','PHP','ASP.NET']}
            />
        </section>);
    }
});