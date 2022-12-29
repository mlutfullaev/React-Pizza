import { Route, Router, Routes } from 'react-router-dom';
import Header from './components/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
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
              {/* <NotFound /> */}
                <Routes>
                    <Route path='/' element={<Home toggler={toggler} />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>

            </div>
        </div>
    );
}

export default App;
