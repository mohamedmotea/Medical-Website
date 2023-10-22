import React, { useEffect } from 'react'
import './Services.css'
import Bannar from '../Bannar/Bannar'
import SerSliceBox from './SerSliceBox'
import AboutSliceCount from '../About/AboutSliceCount'
import doc1 from '../../Assets/aboutDoc1.jpeg'
import doc2 from '../../Assets/bestdoc2.jpeg'
import doc3 from '../../Assets/bestdoc3.jpeg'
import AboutBestDoc from '../About/AboutBestDoc'
import { Helmet } from 'react-helmet-async';

export default function Services() {

  useEffect(()=>{
    window.scrollTo({
      top:0
    })
    },[])
  return <>
  
  <Helmet>
        <title>Services</title>
      </Helmet>
  
  <Bannar title='Services'/>

  <div className="row ser-row g-4 my-5">
  <SerSliceBox icon='fa-solid fa-stethoscope' title='Diagnostics' para='Phasellus venenatis porta rhoncus. Integer et viverra felis.'/>
  <SerSliceBox icon='fa-solid fa-prescription-bottle-medical' title='Treatment' para='Phasellus venenatis porta rhoncus. Integer et viverra felis.'/>
  <SerSliceBox icon='fa-solid fa-kit-medical' title='Surgery' para='Phasellus venenatis porta rhoncus. Integer et viverra felis.'/>
  <SerSliceBox icon='fa-solid fa-truck-medical' title='Emergency' para='Phasellus venenatis porta rhoncus. Integer et viverra felis.'/>
  <SerSliceBox icon='fa-solid fa-user-injured' title='Vaccine' para='Phasellus venenatis porta rhoncus. Integer et viverra felis.'/>
  <SerSliceBox icon='fa-solid fa-bed-pulse' title='Qualified Doctors' para='Phasellus venenatis porta rhoncus. Integer et viverra felis.'/>
  </div>
  

  <div className="row countRow gx-4 my-5">
    <AboutSliceCount title='Years With You' num='120' para='Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.'/>
    <AboutSliceCount title='Awards' num='400' para='Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.'/>
    <AboutSliceCount title='Doctors' num='250' para='Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.'/>
    <AboutSliceCount title='Satisfied Client' num='800' para='Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.'/>
  </div>


  <div className="row about-best-doc">
    <AboutBestDoc name='Dr. Addition Smith' img={doc1} division='Dentist'/>
    <AboutBestDoc name='Dr. Mahfuz Riad' img={doc2} division='Chiropractor'/>
    <AboutBestDoc name='Dr. David Benjamin' img={doc3} division='Cardiologist'/>
  </div>
  
  
  
  
  </>
  
}
