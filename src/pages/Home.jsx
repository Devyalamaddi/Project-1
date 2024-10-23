import React, { useContext } from 'react'
import welcomeImg from '../assets/welcome.png'
import registerImg from '../assets/register.png'
import { NavLink } from 'react-router-dom'
// import {userContextobj} from '../context/UserContext';

function Home() {

  return (
    <>
      <h1 className="display-1 text-center mt-3 fw-bold mb-5">
        Hey there!
      </h1>
      <div className="container">


        <div className="row gap-5 p-3 align-items-center justify-content-center">

          <div className="col-5">
            {/* image-1 */}
            <img  src={welcomeImg} width={"500px"} alt="" />
          </div>

          <div className="col-5">
            <p className='lead fw-normal'>Welcome to the User Management System! Here, you can easily manage users by adding new members, viewing existing users, and removing those no longer needed. You can also keep track of users you've removed. Enjoy seamless user management!</p>
          </div>

          
        </div>

        <h3 className="display-5 fw-semibold text-center mt-5">
          Become member!
        </h3>
        <div className="row gap-5 p-3 mt-1 align-items-center justify-content-center">
          <div className="col-5">
            <p className="lead fw-normal">Join our community today and gain full access to our user management system. As a member, you can add, view, and manage users effortlessly. Stay organized, keep track of removed users, and enjoy a seamless user management experience tailored just for you. Sign up now and be a part of something efficient!</p>
            <NavLink className="text-primary nav-link" to="signup">Register Now!</NavLink>
          </div>

          <div className="col-5">
            {/* image-2 */}
            <img src={registerImg} width={"360px"} alt="" />
          </div>
        </div>

      </div>
    </>
  )
}

export default Home