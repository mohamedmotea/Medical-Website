import React from 'react'
import './AppBokking.css'
import Lottie from "lottie-react";
import AppBookingAni from '../../animation/register.json';
import { Helmet } from 'react-helmet-async';

export default function AppBokking() {
  return <>
     <Helmet>
        <title>AppBokking</title>
      </Helmet>
<section id='appBooking'>
  <div className="row my-5 align-items-center justify-content-between">
  <div className="col-md-5">
    <form className=' border px-4 py-3 position-relative'>
      <h4 className='fw-bold text-center my-3'>Book Appointment</h4>
      <select className='form-control py-3' name="" id="">
        <option value="selecty Department">Selecty Department</option>
        <option value="one">One</option>
        <option value="two">Two</option>
        <option value="three">Three</option>
      </select>

      <select className='form-control my-3 py-3' name="" id="">
        <option value="select Doctor">Select Doctor</option>
        <option value="one">One</option>
        <option value="two">Two</option>
        <option value="three">Three</option>
      </select>

      <input className='form-control py-3' type="text" name="name" id="name" placeholder='Enter Name' />
      <input className='form-control my-3 py-3' type="tel" name="phone" id="phone" placeholder='Enter Phone' />

      <input className='form-control py-3' type="date" name="date" id="date"  />

      <button type='submit' className='btn fs-sm border d-block mx-auto my-3 py-2'>Appointment Booking</button>
      
    </form>
  </div>
  <div className="col-md-6">
    <div className="box">
    <Lottie animationData={AppBookingAni}/>

    </div>
  </div>
    
  </div>
</section>
  
  
  </>
  
}
