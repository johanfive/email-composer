// import dependencies
import React from 'react';

import ListLabelsContainer from '../containers/ListLabelsContainer';
import ConnectedCompoTE from '../containers/ConnectedCompoTE';
import NewLine from '../containers/NewLine';
import Clear from '../containers/Clear';
import Undo from '../containers/Undo';
import Redo from '../containers/Redo';
import AddLabel from './AddLabel';
import LoginButtons from './LoginButtons';

import style from '../styling/main.css';
/*************************************/


class Compoz extends React.Component {

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
                    <ConnectedCompoTE />
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
