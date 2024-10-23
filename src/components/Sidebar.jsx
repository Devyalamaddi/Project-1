import React, { useState } from 'react';
import { FaBars, FaHome, FaUserAlt, FaSignInAlt, FaUserPlus  } from 'react-icons/fa';

import {Link} from 'react-router-dom'

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`d-flex flex-column bg-dark rounded-e-xl text-white p-2.5 ${isCollapsed ? 'sidebar-collapsed' : 'sidebar-expanded'}`} style={{minHeight:'100vh'}}>
      <button className="btn btn-secondary text-center" onClick={toggleSidebar}>
        <FaBars />
      </button>
      <ul className="list-unstyled mt-3">
        <Link to="/" className={` d-flex align-items-center gap-2 mb-3 hover:cursor-pointer hover:text-orange-400   ${isCollapsed ? 'justify-content-center':''}`}>
          <FaHome title={isCollapsed ? 'Home' : ''} />
          {!isCollapsed && <span className="ms-2">Home</span>}
        </Link>
        <Link to="/profile" className={` d-flex align-items-center gap-2 mb-3 hover:cursor-pointer hover:text-orange-400   ${isCollapsed ? 'justify-content-center':''}`}>
          <FaUserAlt title={isCollapsed ? 'Profile' : ''} />
          {!isCollapsed && <span className="ms-2">Profile</span>}
        </Link>
        <Link to="/signin" className={` d-flex align-items-center gap-2 mb-3 hover:cursor-pointer hover:text-orange-400   ${isCollapsed ? 'justify-content-center':''}`}>
          <FaSignInAlt title={isCollapsed ? 'Sign In' : ''} />
          {!isCollapsed && <span className="ms-2">SignIn</span>}
        </Link>
        <Link to="/signup" className={` d-flex align-items-center gap-2 mb-3 hover:cursor-pointer hover:text-orange-400   ${isCollapsed ? 'justify-content-center':''}`}>
          <FaUserPlus title={isCollapsed ? 'Sign Out' : ''} />
          {!isCollapsed && <span className="ms-2">SignUp</span>}
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
