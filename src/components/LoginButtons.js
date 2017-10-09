// import dependencies
import React from 'react';

import {auth, provider} from '../firebase/firebaseStuff';
import {startListening, stopListening} from '../firebase/fbListeners';
import Log from './Log';
// Styles
import style from '../styling/main.css';
/*************************************/


class LoginButtons extends React.Component {
    constructor() {
        super();
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.state = {loggedIn: false}
    }
    componentDidMount() {
        auth.onAuthStateChanged(user => {
            if (user) {
                const uid = user.uid;
                startListening(uid);
                this.setState({loggedIn: true});
            } else {
                this.setState({loggedIn: false});
            }
        });
    }
    login() {
        auth.signInWithRedirect(provider);
    }
    logout() {
        auth.signOut().then(stopListening);//.then(this.login);
    }
    render() {
        const {loggedIn} = this.state;
        return (
            <div className={style.loginThings} >
                {loggedIn ?
                    <Log handleClick={this.logout} >Logout</Log> :
                    <Log handleClick={this.login}>Login</Log>}
            </div>
        );
    }
}

export default LoginButtons;
