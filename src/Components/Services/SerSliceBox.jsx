import React from 'react'

export default function SerSliceBox({icon,title,para}) {
  return <>
    <div className="col-md-4">
      <div className="box border px-3 py-5 rounded" role='button'>
        

        <i class={`${icon} border display-4 py-3 px-3 rounded`}></i>
        
        <h4 className='my-3 fw-bold'>{title}</h4>

        <p className='fw-sm'>{para}</p>

        <button className='btn fs-sm px-3 py-2'>View More</button>
    
      </div>
    </div>
  </>
}
