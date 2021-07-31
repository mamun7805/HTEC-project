import React from 'react';
import {Route, Redirect } from 'react-router-dom';



class PrivateRoute extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            isLoading: true,
            isLoggedIn: false
        };

        // Your axios call here

        // For success, update state like
        this.setState(() => ({ isLoading: false, isLoggedIn: true }));

        // For fail, update state like
        this.setState(() => ({ isLoading: false, isLoggedIn: false }));

    }

    render() {

        return this.state.isLoading ? null :
            this.state.isLoggedIn ?
            <Route path={this.props.path} component={this.props.component} exact={this.props.exact}/> :
            <Redirect to={{ pathname: '/login', state: { from: this.props.location } }} />
    }
}
export default PrivateRoute;
