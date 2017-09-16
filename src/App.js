import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './configureStore';
import router from './router';


/* experimenting with fireBase so I'm making this iteration of the store available
via an export */
export const store = configureStore();


// Adding an event listener cuz script bundle.js is the 1st thing loaded in index.html
document.addEventListener( 'DOMContentLoaded', () => {

  ReactDOM.render(
    (<Provider store={store}>{router}</Provider>),
    document.getElementById('app')
  );
});
