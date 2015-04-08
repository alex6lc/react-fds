var React = require('react');

module.exports = React.createClass({
    render() {
        return (
            <section>
                <h3>Props vs State</h3>
                <small>
                    <table>
                        <thead>
                            <tr>
                                <th> </th>
                                <th>Props</th>
                                <th>State</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Can get initial value from parent Component{"?"}</td>
                                <td>Yes</td>
                                <td>Yes</td>
                            </tr>
                            <tr>
                                <td>Can be changed by parent Component{"?"}</td>
                                <td>Yes</td>
                                <td>No</td>
                            </tr>
                            <tr>
                                <td>Can set default values inside Component{"?"}</td>
                                <td>Yes</td>
                                <td>Yes</td>
                            </tr>
                            <tr>
                                <td>Can change inside Component{"?"}</td>
                                <td>No</td>
                                <td>Yes</td>
                            </tr>
                            <tr>
                                <td>Can set initial value for child Components{"?"}</td>
                                <td>Yes</td>
                                <td>Yes</td>
                            </tr>
                            <tr>
                                <td>Can change in child Components{"?"}</td>
                                <td>Yes</td>
                                <td>No</td>
                            </tr>
                        </tbody>
                    </table>
                </small>
            </section>
        );
    }
});