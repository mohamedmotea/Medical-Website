import React, { useEffect } from 'react'
import './Booking.css'
import Bannar from './../Bannar/Bannar';
import AppBokking from '../AppBokking/AppBokking';
import { Helmet } from 'react-helmet-async';

export default function Booking() {
  useEffect(()=>{
    window.scrollTo({
      top:0
    })
    },[])
  return <>
       <Helmet>
        <title>Booking</title>
      </Helmet>
<Bannar title='Booking'/>
  <AppBokking/>
  
  
  </>
  
}
