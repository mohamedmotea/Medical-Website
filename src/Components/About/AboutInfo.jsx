import React from 'react'
import doctor1 from '../../Assets/contact-pic.jpg'
import doctor2 from '../../Assets/aboutDoc2.jpg'
import doctor3 from '../../Assets/aboutDoc3.jpg'
import './about.css'
export default function AboutInfo() {
  return <>
  
  <section id='about' className='my-5'>

    <div className="row  g-5">
      <div className="col-md-6 position-relative d-flex flex-wrap">

      <div className="col-6 d-flex">
        <img src={doctor1} alt="" className='doc1 w-75 mb-4' style={{alignSelf:'flex-end'}}/>
      </div>

      <div className="col-6 d-flex">
        <img src={doctor2} alt=""className='doc2 w-100 mb-4' />
      </div>


  <div className='about-ani-center'></div>
      {/* UnderSec */}
        

        <div className="col-6 d-flex">
          <img src={doctor3} alt="" className='doc3 w-75'/>
        </div>

        <div className="col-6 d-flex">
        <div className='doc4 d-flex justify-content-center align-items-center flex-column'>
          <h5 className='display-1 fw-bold'>20</h5>
          <p className='fw-bold'>Year Experience</p>
        </div>

        </div>

        </div>


  <div className="col-md-6">
    <h3 className='sec-title h5 px-3 py-1'>About Us</h3>

      <p className='display-6 fw-bold'>
      The Great Place Of Medical Hospital Center

      </p>
      <p>
        <span className='fs-sm'>

      We provide the special tips and advice’s of heath care treatment and high level of best technology involve in the our hospital.
        </span>


      </p>

      <div className="row g-2">
        {/* Box 1 */}
        <div className="col-md-6">
          <div className="box d-flex border align-items-center">
          <i class="fa-solid fa-truck-medical p-3 me-2 fs-5"></i>
          <p className='my-1 px-2 fs-sm'>Emergency Help</p>
          </div>
        </div>

        {/* BOX 2 */}
        <div className="col-md-6">
          <div className="box d-flex border align-items-center">
          <i class="fa-solid fa-bed-pulse p-3 me-2 fs-5"></i>
          <p className='my-1 px-2 fs-sm'>Qualified Doctors</p>
          </div>
        </div>

            {/* BOX 3 */}
            <div className="col-md-6">
          <div className="box d-flex border align-items-center">
          
          <i class="fa-solid fa-hand-holding-droplet p-3 me-2 fs-5"></i>
          <p className='my-1 px-2 fs-sm'>Best Professionals</p>
          </div>
        </div>

            {/* BOX 4 */}
            <div className="col-md-6">
          <div className="box d-flex border align-items-center">
          <i class="fa-solid fa-syringe p-3 me-2 fs-5"></i>
          <p className='my-1 px-2 fs-sm'>Medical Treatment</p>
          </div>
        </div>




      </div>

<button className='btn fs-sm py-2 mt-4 px-3'>Read More</button>

  </div>


      </div>




  </section>
  
  </>
}
