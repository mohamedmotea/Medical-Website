import React from 'react'
import './Hero.css';
import boll from '../../Assets/boll-hero.png';
import doctorAvatar from '../../Assets/doctor-hero.png';
import { Container } from 'react-bootstrap';


export default function Hero() {
  return <>
  <section id='hero' className='py-2'>

<Container>
    <div className="row align-items-center">


      <div className="col-md-6">
                  <img src={boll} alt="boll pic" className='d-block mx-auto mb-1' />
                  <div  className='desc px-2 mx-auto fs-sm mb-3' >We Provide All Health Care Solution</div>
                <h1 className='h3 fw-bold lh-sm'>Protect Your Health And Take Care To Of Your Health
              </h1>
              <button className='btn fs-sm my-3 px-3'> Read More</button>
      </div>
      <div className="col-md-6 text-center">
  <img src={doctorAvatar} alt="doctor pic" className='w-75 doctor-img'/>

      </div>
    </div>
</Container>


  </section>
  
  
  
  
  </>
  
}
