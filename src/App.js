import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './configureStore';
import router from './router';

const store = configureStore();

// Adding an event listener cuz script bundle.js is the 1st thing loaded in index.html
document.addEventListener( 'DOMContentLoaded', () => {

  // for the Copy button. Imported via CDN in the index file
  var clipboard = new Clipboard('.copyBTN');
  // TODO use these events to provide users with feedback
  clipboard.on('success', function(e) {
  console.log(e);
  });
  clipboard.on('error', function(e) {
  console.log(e);
  });

  ReactDOM.render(
    (<Provider store={store}>{router}</Provider>),
    document.getElementById('app')
  );
});
