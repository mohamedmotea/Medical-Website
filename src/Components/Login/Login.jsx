import React from 'react'
import './Login.css'
import logo from '../../Assets/logo.png'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async';

export default function Login() {

  return <>
       <Helmet>
        <title>Login</title>
      </Helmet>
  <section id='login'>
    <form className='w-50 mx-auto text-center py-5 my-5'>
      <img src={logo} alt="logo" className='mb-4' />

<div className='w-75 mx-auto'>

      <input className='form-control py-2' type="text" name="Username" id="Username" placeholder='Username' />
      <input className='form-control py-2 my-3' type="password" name="password" id="password" placeholder='Password' />

      <button type='submit' className='loginBtn btn form-control py-3'>Login</button>

      <a href="#" className='my-4 d-block'>Forgot Password</a>

      <p className='mt-4 mb-1'>Dont have any account?</p>


      <Link type='button' to='/register'  className='btn form-control py-3 mt-4'>Register</Link>
</div>
    </form>
  </section>
  
  
  </>
  
}
