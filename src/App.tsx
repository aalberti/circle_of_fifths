import React from 'react';
import './App.css';
import {Musicologist} from "./fifths/Musicologist";
import {Provider} from "react-redux";
import store from './store'

function App() {
    return <div className="App">
        <Provider store={store}>
            <Musicologist/>
        </Provider>
    </div>
}

export default App;
