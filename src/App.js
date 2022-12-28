// import { useEffect, useState } from 'react';
// import { Routes } from 'react-router-dom';
import Header from './components/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';
import './scss/App.scss';

function toggler(array, state, setState) {
    return array.map((item, i) => (
        <li className={i === state ? 'active' : ''} key={i} onClick={() => setState(i)}>
            {item}
        </li>
    ));
}

function App() {
    return (
        <div className="wrapper">
            <Header toggler={toggler} />
            <div className="content">
              <Home toggler={toggler} />
            </div>
        </div>
    );
}

export default App;
