import React from 'react';
import { auth, provider } from '../firebase';
import Wrapper from './styledWrapper';
//______________________________________________________________________________


class LogInOut extends React.Component {
    constructor() {
        super();
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }

    login() {
        auth.signInWithPopup(provider);
    }

    logout() {
        auth.signOut().then(function() {
            console.log('Signed out');
        }, function(error) {
            alert('Sign out FAILED for some reasons... Please try again');
            console.log(error);
        });
    }

    render() {
        const {isLoggedIn} = this.props;
        return (
            <Wrapper>
                {isLoggedIn ?
                    <button type="button" onClick={this.logout} >Logout</button> :
                    <button type="button" onClick={this.login} >Login</button>}
            </Wrapper>
        );
    }
}

export default LogInOut;
