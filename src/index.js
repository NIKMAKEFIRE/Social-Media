import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/redux-store'
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import './index.css';
import StoreContext from './StoreContext';

const rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <StoreContext.Provider value={store}>
                    <App state={store.getState()} dispatch={store.dispatch.bind(store)} store={store} />
                </StoreContext.Provider>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state)
})
