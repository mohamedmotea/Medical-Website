import React from 'react'

export default function WorkSliceOur({title,num,link,para}) {
  return     <div className="col-md-4 mb-5">
  <div className="box p-3 py-5 rounded">
<h5 className='workNum display-4 fw-bold'>{num}</h5>
<h3 className='h5 my-3'>{title}</h3>
<p className='fs-sm'>{para}
</p>

<button className='btn fs-sm'>{link} <span className='bg-white py-1 px-2 rounded ms-1'><i className='fas fa-arrow-right text-black'></i></span></button>
  </div>


</div>
}
