import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import App from './app.js';
import reducers from './reducers/reducers';

const store = createStore(reducers,applyMiddleware(thunk)); 
//wiring up thunk middleware and the combined reducers to the provider

ReactDOM.render(<Provider store={store}><App /></Provider>,document.getElementById('root'));