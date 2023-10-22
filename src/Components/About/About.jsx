import React, { useEffect } from 'react'
import './About.css'
import AboutInfo from './AboutInfo'
import Bannar from '../Bannar/Bannar'
import AboutSliceCount from './AboutSliceCount'
import doc1 from '../../Assets/aboutDoc1.jpeg'
import doc2 from '../../Assets/bestdoc2.jpeg'
import doc3 from '../../Assets/bestdoc3.jpeg'
import AboutBestDoc from './AboutBestDoc';
import { Helmet } from 'react-helmet-async';
export default function About() {
  useEffect(()=>{
  window.scrollTo({
    top:0
  })
  },[])
  return <>
   <Helmet>
        <title>About</title>
      </Helmet>
  <Bannar title='About Us'/>
    <AboutInfo/>
  
  <div className="row countRow gx-5 my-5">
    <AboutSliceCount title='Years With You' num='120' para='Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.'/>
    <AboutSliceCount title='Awards' num='400' para='Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.'/>
    <AboutSliceCount title='Doctors' num='250' para='Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.'/>
    <AboutSliceCount title='Satisfied Client' num='800' para='Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.'/>
  </div>

  <h4 className='sec-title mx-auto'>Our Doctor</h4>
  <h3 className='text-center'>Meet Best Doctors</h3>
  
  <div className="row about-best-doc">
    <AboutBestDoc name='Dr. Addition Smith' img={doc1} division='Dentist'/>
    <AboutBestDoc name='Dr. Mahfuz Riad' img={doc2} division='Chiropractor'/>
    <AboutBestDoc name='Dr. David Benjamin' img={doc3} division='Cardiologist'/>
  </div>
  
  </>
  
}
