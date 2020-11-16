import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import CounterComponent from './components/CounterComponent';

import { createStore } from 'redux';
import { Provider } from 'react-redux'

import counterReducer from './utils/reducer'

const store = createStore(counterReducer);

// 使用react-redux的Provider元件作為React應用的最上層
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
            {/* 可使用 store的內建函式 getState() 確認目前 store 內所保管的資料 */}
            { console.log(`store.getState() >>>`, store.getState()) }
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// ReactDOM.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>,
//     document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
