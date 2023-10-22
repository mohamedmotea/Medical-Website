import React, { useEffect } from 'react'
import './Work.css'
import WorkSliceOur from './workSliceOur'


export default function Work() {
  useEffect(()=>{
    window.scrollTo({
      top:0
    })
    },[])
  return <>

  <section id='work' className='py-4'>

  <h4 className='sec-title mx-auto h5'>Working Process</h4>
  <h3 className='fs-2 text-center my-3 fw-bold'>How we works?</h3>


  <div className="row mt-5 g-4 px-5 ">

  <WorkSliceOur title='Make Appointmnet' num='01' link='View More' para='It is a long established fact that a reader will be distracted by the readable content of.'/>
  <WorkSliceOur title='Take Treatment' num='02' link='View More' para='It is a long established fact that a reader will be distracted by the readable content of.'/>
  <WorkSliceOur title='Registration' num='03' link='View More' para='It is a long established fact that a reader will be distracted by the readable content of.'/>



  </div>

  </section>
  
  
  
  </>
  
}
