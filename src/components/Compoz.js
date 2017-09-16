// import dependencies
import React from 'react';
import {connect} from 'react-redux';
import {Editor, EditorState, Modifier, ContentState} from 'draft-js';
import {auth, provider} from '../firebase/firebaseStuff';
// import selector for "hydrating" props in mapStateToProps
import {getAllLabels} from '../reducers';
import {startListening} from '../firebase/fbListeners';

// import components
import Redo         from './Redo';
import Undo         from './Undo';
import Clear        from './Clear';
import NewLine      from './NewLine';
import Container    from './Container';
import AddContainer from './AddContainer';

import style from "../styling/main.css";


class Compoz extends React.Component {

  constructor() {
    super();
    this.state = {
      editorState: EditorState.createEmpty(),
      user: null
    };
    this.onChange = (editorState) => this.setState({editorState});
    this.onClick = this.onClick.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    this.focus();
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
        startListening(user);
      }
    });
  }
  focus() {
    this.editor.focus();
    // the editor var is set at the ref prop of the Editor component below
  }

  reset() {
    let editorState = EditorState.push(this.state.editorState, ContentState.createFromText(''));
    this.setState({editorState: EditorState.moveFocusToEnd(editorState)});
  }

  onClick(e) {
    let {editorState} = this.state;
    let selection = editorState.getSelection();
    let content = editorState.getCurrentContent();
    let newContent = Modifier.replaceText(content, selection, e.target.value);
    let newEState = EditorState.push(editorState, newContent, 'insert-fragment');
    this.setState({editorState: EditorState.forceSelection(newEState, newEState.getSelection())});
  }

  undo() {
    this.onChange(EditorState.undo(this.state.editorState));
    // EditorState.undo() returns a new EditorState.
  }
  redo() {
    this.onChange(EditorState.redo(this.state.editorState));
  }

  login() {
    auth.signInWithPopup(provider)
    .then((result) => {
      const user = result.user;
      this.setState({
        user
      });
    });
  }

  logout() {
    auth.signOut().then(() => this.setState({user: null}));
    // TODO build a stopListening function to cancel all fb listeners and reset the redux store
  }

  render() {
    let listContainers = this.props.labels.map(
      label => <Container key={label.id} label={label} handleClick={this.onClick} />
    );
    return (
      <div>
        <div className={style.editorWrapper}>
          <div className={style.controls} >
            {/* TODO create an HOC for these similar components */}
            <NewLine handleClick={this.onClick} />
            <Undo handleClick={this.undo.bind(this)} />
            <Redo handleClick={this.redo.bind(this)} />
            <Clear handleClick={this.reset.bind(this)} />
          </div>
          <div className={style.editor} onClick={this.focus.bind(this)}>
            <Editor
              editorState={this.state.editorState}
              onChange={this.onChange}
              placeholder="Type here, Click things there ->"
              ref={(element) => {this.editor = element;}}
            />
          </div>
        </div>
        <div className={style.clickBoard}>
          {listContainers}
          {this.state.user ? <AddContainer /> : null}
        </div>
        <div className={style.loginThings}>
          <div>
            {this.state.user ?
              <button onClick={this.logout}>Log Out</button>
              :
              <button onClick={this.login}>Log In</button>
            }
          </div>

          {/* this.state.user ?
            <div>
              <div className='user-profile'>
                <img src={this.state.user.photoURL} />
              </div>
            </div>
            :
            <p>Login to do stuff.</p>
          */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    labels: getAllLabels(state)
  }
);

export default connect(mapStateToProps)(Compoz);
