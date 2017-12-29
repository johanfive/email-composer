import React, { Component } from 'react';
import { auth } from './firebase';
import LogInOut from './LogInOut';
import EditorWrapper from './EditorWrapper/';
import ClickBoard from './ClickBoard';
import ListLabels from './ListLabels/';
import Logo from './Logo/';
import './App.css'; // Left this one as a reminder to self that this is possible
//______________________________________________________________________________


class App extends Component {
    constructor() {
        super();
        this.state = {isLoggedIn: false};
    }
    componentDidMount() {
        auth.onAuthStateChanged(user => {
            user ?
            this.setState({isLoggedIn: true}) :
            this.setState({isLoggedIn: false});
        });
    }
    render() {
        const { isLoggedIn } = this.state;
        return (
            <div className="App">
                <LogInOut isLoggedIn={isLoggedIn} />
                <ClickBoard>
                    <Logo />
                    {isLoggedIn ? <ListLabels /> : null}
                </ClickBoard>
                <EditorWrapper />
            </div>
        );
    }
}

export default App;
