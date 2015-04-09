var React = require('react');

var Notes = require('../components/Notes.js');

module.exports = React.createClass({
    render() {
        return (
            <section>
                <h3>Seperation of Concerns</h3>

                <p className="fragment">Reduce Coupling</p>
                <p className="fragment">Increase Cohesion</p>


                <Notes notes={[
                    'Le couplage est le niveau d’interaction entre deux ou plusieurs modules',
                    'Fix localiser vs changement dans 10 modules',
                    'La cohésion est le degré d’accord entre les différents éléments d’un module'
                ]}/>
            </section>
        );
    }
});