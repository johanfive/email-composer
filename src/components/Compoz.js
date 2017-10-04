// import dependencies
import React from 'react';

import ListLabelsContainer from './ListLabelsContainer';
import ConnectedCompoTE from './ConnectedCompoTE';
import AddLabel from './AddLabel';
import Undo from './Undo';
import Redo from './Redo';
import Clear from './Clear';
import NewLine from './NewLine';
import LoginButtons from './LoginButtons';
import {startListening} from '../firebase/fbListeners';

import style from '../styling/main.css';
/*************************************/


class Compoz extends React.Component {
    componentDidMount() {
        startListening();
    }
    render() {
        return (
            <div>
                <div className={style.editorWrapper}>
                    <div className={style.controls} >
                        {/*TODO*/}
                        <Undo />
                        <Redo />
                        <Clear />
                        <NewLine />
                    </div>
                    <div className={style.editor}>
                        <ConnectedCompoTE />
                    </div>
                </div>
                <div className={style.clickBoard}>
                    <ListLabelsContainer />
                    <AddLabel />
                    <LoginButtons />
                </div>
            </div>
        );
    }
}

export default Compoz;
