import './App.scss';
import Header from './components/Header/Header';
import { ButtonToolbar } from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";
import HomePage from './components/Home/HomePage.js';
import PerfectScrollbar from 'react-perfect-scrollbar';


const App = () => {
  return (

    <div className='app-container'>
      <div className='header-container'>
        <Header />
      </div>
      <div className='main-container'>
        <div className='sidenav-container'>

        </div>
        <div className='app-content'>
          <PerfectScrollbar>
            <Outlet />
          </PerfectScrollbar>
        </div>
      </div>

    </div>
  );
}

export default App;
