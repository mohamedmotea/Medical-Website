import React from 'react'


export default function ContactInfo({title,imgTitle,img,para1,para2}) {
  return <>

<div className="col-md-4">
  <div className="box border p-4 bg-white rounded">
    <img src={img} width={50} alt={`${imgTitle}`} />
    <h4  className="my-3 fw-bold">{title}</h4>
      <p className="m-0" role="button">{para1}</p>
      <p className="m-0" role="button">{para2}</p>
  </div>
</div>

  </>
}
