import React from 'react'
import './Footer.css'
import { Container } from 'react-bootstrap'
import footerImg from '../../Assets/logo.png'
import bollAni from '../../Assets/footer-boll.png';
import lineBlue from '../../Assets/line-blue.png';
import lineh3 from '../../Assets/line-h3.png';

import facebook from '../../Assets/facebook.png';
import twitter from '../../Assets/twitter.png';
import linkedin from '../../Assets/linkedin.png';
import insta from '../../Assets/insta.png';


export default function Footer() {
  return <>
  
  <footer className='pt-4'>

  <Container>
    <img src={lineBlue} alt="wave-pic" className='wave-pic' />

<div className="row m-0 justify-content-between g-5">

  {/* col 1 */}
  <div className="col-lg-3 col-md-6">
    <img src={footerImg} alt="Footer Img" />

    <p className='lh-lg mt-3'>
      Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore smod tempor incididunt ut labore et.
</p>

  <div className='d-flex align-items-center gap-3 position-relative'>
  <i className="fa-solid fa-square-phone fs-1"></i>
  <div>
    <span className='fw-bold'>Contact Us</span>
    <span className='fw-bold d-block'>+01 123 456 7890</span>
  </div>
    <img src={bollAni} alt="boll Animation" className='img-ani-first  position-absolute'/>
  </div>


  </div>

  
  {/* col 2 */}
  <div className="col-lg-3 col-md-6">
    <h3 className='m-0'>Quick Links</h3>
    <img src={lineh3}   alt="line pic" />

    <ul className='p-0 d-flex flex-column gap-2 mt-2'>
    
      <li><a href="#">About Us</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Booking</a></li>
      <li><a href="#">Faq's</a></li>
      <li><a href="#">Blogs</a></li>
      <li><a href="#">Out Team</a></li>
    </ul>
  </div>


  {/* col 3 */}
  <div className="col-lg-3 col-md-6">
    <h3 className='m-0'>Our Service</h3>
    <img src={lineh3}   alt="line pic" />
    <ul className='p-0 d-flex flex-column gap-2 mt-2'>
      <li><a href="#">Dental Care</a></li>
      <li><a href="#">  Cardiac Clinic</a></li>
      <li><a href="#">Massege Therapy</a></li>
      <li><a href="#">Cardiology</a></li>
      <li><a href="#">Precise Diagnosis</a></li>
      <li><a href="#">Abmbulance Services</a></li>
      
    </ul>
  </div>




  {/* col 4 */}
  <div className="col-lg-3 col-md-6">
    <h3 className='m-0'>Subcribe</h3>
    <img src={lineh3}   alt="line pic" />

  <form className='my-3'>
    <input className='form-control py-3' type="text" name="" id="" placeholder='Enter Address'/>

    <button className='btn d-block mx-auto my-2 form-control py-2' type='submit'>Subcribe Now</button>
  </form>
  <div className="footer-links">
    <ul className='d-flex gap-3 flex-wrap'>
      <li><a href="#"><img src={facebook} alt="facebook" /></a></li>
      <li><a href="#"><img src={twitter} alt="twitter" /></a></li>
      <li><a href="#"><img src={insta} alt="insta" /></a></li>
      <li><a href="#"><img src={linkedin} alt="linkedin" /></a></li>
    <img src={lineBlue} alt="wave-pic" className='wave-pic' />
    </ul>
  </div>
  </div>










</div>




  </Container>

  <p className='mt-5 text-center border-top py-5'>Copyright © 2023 Developed by Mohamed Motea</p>
  </footer>
  
  
  
  
  </>
  
}
