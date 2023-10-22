import React, { useEffect } from 'react'
import './Notfound.css'
import Bannar from '../Bannar/Bannar'
import Lottie from "lottie-react";
import error from '../../animation/notfound.json'
import { Helmet } from 'react-helmet-async';

export default function Notfound() {
  useEffect(()=>{
    window.scrollTo({
      top:0
    })
  },[])
  return <>
       <Helmet>
        <title>Not Found</title>
      </Helmet>
  <Bannar title='Page Not Found'/>
  <Lottie animationData={error}/>
  
  </>
  
}
