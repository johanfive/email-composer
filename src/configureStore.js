import {createStore} from 'redux';
import {reducer} from './reducers';

// TODO GET RID of modifiedDispatch when pushing to prod env
// Very useful for troubleshooting. Logs state before and after an action is dispatched
const modifiedDispatch = (store) => {
  const rawDispatch = store.dispatch;
  if (!console.group) {
    return rawDispatch;
  }
  return (action) => {
    console.group(action.type);
    console.log('%c previous state:', 'color: blue', store.getState());
    const returnValue = rawDispatch(action);
    console.log('%c new state:', 'color: red', store.getState());
    console.groupEnd(action.type);
    return returnValue;
  };
};


const configureStore = () => {

  const store = createStore(reducer);

  store.dispatch = modifiedDispatch(store);

  return store;
};

export default configureStore;
