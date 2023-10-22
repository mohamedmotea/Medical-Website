import React, { useEffect } from 'react'
import './Team.css'
import doc1 from '../../Assets/aboutDoc1.jpeg'
import doc2 from '../../Assets/bestdoc2.jpeg'
import doc3 from '../../Assets/bestdoc3.jpeg'
import doc4 from '../../Assets/doc4.jpeg'
import doc5 from '../../Assets/aboutDoc2.jpg'
import doc6 from '../../Assets/doc6.jpeg'
import { Helmet } from 'react-helmet-async';

import Bannar from '../Bannar/Bannar'
import AboutBestDoc from '../About/AboutBestDoc'
export default function Team() {
  useEffect(()=>{
    window.scrollTo({
      top:0
    })
    },[])
  return <>
       <Helmet>
        <title>Team</title>
      </Helmet>
  <Bannar title='Our Team'/>

  
  <div className="row about-best-doc">
    <AboutBestDoc name='Dr. Addition Smith' img={doc1} division='Dentist'/>
    <AboutBestDoc name='Dr. Mahfuz Riad' img={doc2} division='Chiropractor'/>
    <AboutBestDoc name='Dr. David Benjamin' img={doc3} division='Cardiologist'/>

    <AboutBestDoc name='Dr. Addition Smith' img={doc4} division='Dentist'/>
    <AboutBestDoc name='Dr. Mahfuz Riad' img={doc5} division='Chiropractor'/>
    <AboutBestDoc name='Dr. David Benjamin' img={doc6} division='Cardiologist'/>
  </div>
  
  
  </>
  
}
