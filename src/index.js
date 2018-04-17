import React from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App';
import { reducers } from './reducers/index';


// build the users list
let users = [];
for(let i=1; i<10; i++){
    users.push({
        id:i,
        username: 'John' +i,
        job: 'Employee' +i
    });
}
const initial_state = {
    users:users,
}

// create the store
const store = createStore(reducers, initial_state);

// render the main component
ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('app'));
