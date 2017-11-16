import React, { Component } from 'react';
import { auth } from './firebase';
import NewLabelButton from './NewLabelButton/';
import ListLabels from './ListLabels/';
import LogInOut from './LogInOut';
import CompoTE from './CompoTE/';
import EditorButtons from './EditorButtons/'
import logo from './logo.svg';
import './App.css';
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
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Compoz</h1>
                </header>
                <LogInOut isLoggedIn={isLoggedIn} />
                <br />
                {
                    isLoggedIn ?
                        (<div><ListLabels /><NewLabelButton /></div>) :
                        null
                }
                <br />
                <hr />
                <EditorButtons />
                <br />
                <CompoTE />
                <br />
                <br />
            </div>
        );
    }
}

export default App;
