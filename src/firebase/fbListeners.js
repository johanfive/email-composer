// Thanks to David Gilbertson for his article https://medium.com/@david.gilbertson/react-and-firebase-sittin-in-a-tree-a00d481786cb
import {database, auth} from "./firebaseStuff";
import {store} from "../App"; // So that we have access to dispatch
import * as action from '../actions/actions';


const db = database.ref();
const userRef = db.child('users').child('userID');

const objectsToListenTo = [
  {
    dbRef: userRef.child('Labels'),
    keyPath: 'Labels',
    actions: {
      upsert: item => store.dispatch( action.upsertLabel(item.id, item.name) ),
      remove: key => store.dispatch( action.deleteLabel(key) )
    }
  },
  {
    dbRef: userRef.child('Bits'),
    keyPath: 'Bits',
    actions: {
      upsert: item => store.dispatch( action.upsertBit(item.id, item.text, item.label) ),
      remove: key => store.dispatch( action.deleteBit(key) )
    }
  }
];

class ObjectWatcher {
  constructor(snapshot, type) {
    this.type = type;
    this.key = snapshot.key;
    this.ref = type.dbRef.child(this.key);
    this.ref.on('value', this.onChange.bind(this));
  }

  onChange(snapshot) {
    if (snapshot.val()) {
      this.type.actions.upsert(snapshot.val());
    }
  }

  remove() {
    this.ref.off();
    this.type.actions.remove(this.key);
  }
}

class ListWatcher {
  constructor() {
    this.cache = {};
  }

  watchList(ref, type) {
    ref.on('child_added', snap => this.onChildAdded(snap, type));
    ref.on('child_removed', snap => this.onChildRemoved(snap));
  }

  onChildAdded(snapshot, type) {
    this.cache[snapshot.key] = new ObjectWatcher(snapshot, type);
  }

  onChildRemoved(snapshot) {
    this.cache[snapshot.key].remove();
    delete(this.cache[snapshot.key]);
  }
}

export const startListening = (userID) => {

  const listWatcher = new ListWatcher();

  objectsToListenTo.forEach(objectToListenTo => {
    listWatcher.watchList(userRef.child(objectToListenTo.keyPath), objectToListenTo);
  });
};

export const stopListening = () => {
  store.dispatch(action.logout());
  listWatcher = null;
};
