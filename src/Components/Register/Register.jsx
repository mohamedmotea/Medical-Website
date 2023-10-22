import React from 'react'
import './Register.css'
import logo from '../../Assets/logo.png'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async';

export default function Register() {

  return <>
       <Helmet>
        <title>Register</title>
      </Helmet>
  <section id='register'>
    <form className='w-50 mx-auto text-center py-5 my-5'>
      <img src={logo} alt="logo" className='mb-4' />

<div className='w-75 mx-auto'>
<input className='form-control py-2 my-3' type="text" name="name" id="name" placeholder='name' />
<input className='form-control py-2 my-3' type="email" name="Email" id="Email" placeholder='Email' />

      <input className='form-control py-2' type="text" name="Username" id="Username" placeholder='Username' />
      <input className='form-control py-2 my-3' type="password" name="password" id="password" placeholder='Password' />

      <button type='submit' className='loginBtn btn form-control py-3'>Register Now</button>



      <p className='mt-4 mb-1'>Already have an account?</p>


      <Link type='button' to='/login'  className='btn form-control py-3 mt-4'>Login</Link>
</div>
    </form>
  </section>
  
  
  
  </>
  
}
