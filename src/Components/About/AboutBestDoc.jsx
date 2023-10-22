import React from 'react'

export default function AboutBestDoc({name,img,division}) {
  return <>
      <div className="col-md-4 mb-5">
      <div className="box text-center border rounded">
        <div className="best-img d-flex justify-content-center align-items-center">
        <img src={img} alt="" className='rounded-circle' /> 

        </div>
        <h3 className='fw-bold'>{name}</h3>
        <span>{division}</span>
        <ul className="my-3 d-flex justify-content-center gap-2 align-items-center">
      <li className='rounded' role='button'>
        <i className='fa-brands fa-twitter fs-5 p-2'></i>
      </li>
      <li className='rounded' role='button'>
        <i className='fa-brands fa-linkedin fs-5 p-2'></i>
      </li>
      <li className='rounded' role='button'>
        <i className='fa-brands fa-instagram fs-5 p-2'></i>
      </li>
        </ul>

      </div>
    </div>
  </>
}
