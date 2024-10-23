import React, { useState } from 'react';
import {useForm} from 'react-hook-form';
import {Link} from 'react-router-dom';
import './Signin.css'

function Signup(){
  
  const {register,handleSubmit,formState:{errors}} = useForm();

  const handleSubmitFunction = (e) => {
    e.preventDefault();
    // Handle sign-in logic
  };

  return (
    <div className="container">
      <div className="form-center">
        <div className='card bg-amber-500 mt-8'>
          <form className="form mt-5 p-12 pb-1 pt-1" onSubmit={handleSubmit(handleSubmitFunction)}>
            <h2 className="text-center display-3 mb-3">Register</h2>
            
            <label htmlFor="username" className="form-label mt-3">Username</label>
            <input type="text" {...register('username',{required:true})} id="username" className='form-control w-96'/>
            {
              errors.username?.type==='required' && <p className='text-red-600'>*username needed</p>
            }
            

            <label htmlFor="password" className="form-label mt-3">Password</label>
            <input type="password" {...register('password',{required:true,minLength:8})} id="password" className='form-control w-96' />
            {
              errors.password?.type==='required' && <p className="text-red-700">*give a password</p>
            }
            {
              errors.password?.type==='minLength' && <p className="text-blue-600">*minimum length of password is 8</p>
            }

            <label htmlFor="email" className="form-label mt-3">Email</label>
            <input type="email" {...register('email',{required:true})} id="email" className='form-control w-96' />
            {
              errors.password?.type==='required' && <p className="text-red-700">*give a password</p>
            }


            <div className="d-flex justify-center">
              <button type="submit" className='btn text-blue-800 bg-slate-200 border-indigo-700 hover:border-black hover:bg-gray-800 hover:text-white mt-4 '>Register</button>
            </div>
          </form>

          <div className="d-flex justify-center align-center mb-3 mt-3">
            <p>Already registered?</p> <Link to='/signin' className='nav-link text-blue-600'>Login here</Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Signup;
