import React from 'react'
import './Bannar.css'
import { Link } from 'react-router-dom'
import bollAni from '../../Assets/footer-boll.png';

export default function Bannar({title}) {
  return <>
  
  <section id='bannar' className='py-5 text-center '>
    <div className='position-relative'>

  <img src={bollAni} alt="boll Animation" className='img-ani-first  position-absolute'/>
    </div>
    <h2 className='fw-bold display-4'>{title}</h2>
    <ul className='d-flex justify-content-center mx-auto my-3 py-2 px-4 rounded'>
      <li>
        <Link to='/'>
        <i className='fas fa-home'></i> Home
        </Link>
      </li>
      <li className='mx-2'>/</li>

      <li>
        {title}
      </li>
    </ul>

  </section>
  
  
  
  
  </>
  
}
