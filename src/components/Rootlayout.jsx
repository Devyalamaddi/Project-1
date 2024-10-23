import React from 'react';
import {Outlet} from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Sidebar from './Sidebar.jsx';

function Rootlayout() {
  return (
    <div>
        <Header/>
        <div className="flex">
          <Sidebar/>
          <div style={{minHeight:'100vh'}}>
            <Outlet/>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Rootlayout