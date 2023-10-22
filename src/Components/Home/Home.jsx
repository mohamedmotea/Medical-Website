import React, { useEffect } from 'react'
import './Home.css'
import Hero from './../Hero/Hero';
import AboutInfo from '../About/AboutInfo';
import Work from './../Work/Work';
import AppBokking from '../AppBokking/AppBokking';
import News from './../News/News';
import { Helmet } from 'react-helmet-async';

export default function Home() {
  
  useEffect(()=>{
    window.scrollTo({
      top:0
    })
    },[])
  return <>
 <Hero/>
  <AboutInfo/>
  <Work/>
<AppBokking/>

  <News/>
     <Helmet>
        <title>Home</title>
      </Helmet>
  </>
  
}
