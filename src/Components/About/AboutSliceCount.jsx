import React from 'react'

export default function AboutSliceCount({num,title,para}) {
  return <>
  <div className="col-md-3 mb-5">
      <div className="box border px-3 py-5 rounded position-relative">
        <span className='fw-bold fs-1'>{num}</span>
        <h3 className='h4 my-2'>{title}</h3>
        <p className=' fs-sm'>{para}</p>

      </div>
    </div>
  </>
}
