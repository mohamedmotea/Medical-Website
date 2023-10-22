import React from 'react'

export default function NewsCart({newsImg,doc,title,date,docName}) {
  return <>
    <div className="col-md-4">
      <div className="box border p-3 rounded">
        <img src={newsImg} alt="news img" className='w-100 rounded'/>
        <div className='attrForDoc d-flex gap-2 align-items-center my-3 px-3'>
          <img src={doc} className='rounded-circle' width={40} alt="doctor pic" />
          <span className='fw-bold me-3'>{docName}</span>
          <span>
          <i class="fa-solid fa-calendar-days me-1"></i>
          {date}
          </span>
        </div>
        <div className='px-3'>
        <h4>
          <a href="#">{title}</a>
        </h4>

        <button className='btn border my-2 fs-sm py-2'>Read More <span className='ms-2 p-2 rounded'><i className='fas fa-arrow-right'></i></span></button>
        </div>

      </div>
    </div>
  </>

}
