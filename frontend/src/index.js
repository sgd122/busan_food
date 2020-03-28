import React from 'react';
import ReactDOM from 'react-dom';
/** redux */
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
/** redux */
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer);
const appElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    appElement
);

serviceWorker.unregister();
